import { ChangeEvent, useReducer, useState } from 'react';
import { useInterval } from 'src/lib/common/hooks';
import { sendRecoveryLinkToEmail } from './recovery-account.action';
import { RecoveryAccountComponent } from './recovery-account.component';
import {
  recoveryAccountActionType,
  recoveryAccountStateType,
  RECOVERY_ACCOUNT_ACTION_TYPE,
} from './recovery-account.type';

const initialState = {
  success: false,
  pending: false,
  error: '',
  delay: false,
};

function recoveryAccountReducer(
  state: recoveryAccountStateType,
  action: recoveryAccountActionType,
) {
  switch (action.type) {
    case RECOVERY_ACCOUNT_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: '',
      };
    case RECOVERY_ACCOUNT_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        delay: true,
      };
    case RECOVERY_ACCOUNT_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
        delay: true,
      };
    case RECOVERY_ACCOUNT_ACTION_TYPE.DELAY_OFF:
      return {
        ...state,
        delay: false,
      };
    default:
      return state;
  }
}

export function RecoveryAccountContainer() {
  const [state, setState] = useReducer(recoveryAccountReducer, initialState);
  const [count, startInterval] = useInterval(() => {
    setState({ type: RECOVERY_ACCOUNT_ACTION_TYPE.DELAY_OFF });
  });
  const [email, setEmail] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value.trim());
  };
  const onSendCode = () => {
    if (!!email) {
      sendRecoveryLinkToEmail(email)(setState);
      startInterval();
    }
  };
  return (
    <RecoveryAccountComponent
      state={state}
      count={count}
      onSendCode={onSendCode}
      onChange={onChange}
      value={email}
    />
  );
}
