import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { useInterval } from 'src/lib/common/hooks';
import {
  sendCodeToEmailAction,
  sendConfirmCodeAction,
} from './confirm-email.action';
import { ConfirmEmailComponent } from './confirm-email.component';
import {
  CONFIRM_EMAIL_ACTION_TYPE,
  confirmEmailStateType,
  confirmEmailActionType,
} from './confirm-email.type';

const initialState = {
  pending: false,
  delay: false,

  sendSuccess: false,
  sendError: '',

  confirmSuccess: false,
  confirmError: '',
};

function confirmEmailReducer(
  state: confirmEmailStateType,
  action: confirmEmailActionType,
) {
  switch (action.type) {
    case CONFIRM_EMAIL_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        sendSuccess: false,
        sendError: '',
        confirmError: '',
      };
    case CONFIRM_EMAIL_ACTION_TYPE.SEND_SUCCESS:
      return {
        ...state,
        pending: false,
        sendSuccess: true,
        delay: true,
      };
    case CONFIRM_EMAIL_ACTION_TYPE.SEND_ERROR:
      return {
        ...state,
        pending: false,
        sendError: action.error,
        delay: true,
      };
    case CONFIRM_EMAIL_ACTION_TYPE.SEND_DELAY_OFF:
      return {
        ...state,
        delay: false,
      };
    case CONFIRM_EMAIL_ACTION_TYPE.CONFIRM_SUCCESS:
      return {
        ...state,
        delay: true,
        confirmSuccess: true,
      };
    case CONFIRM_EMAIL_ACTION_TYPE.CONFIRM_ERROR:
      return {
        ...state,
        pending: false,
        confirmError: action.error,
        delay: true,
      };
    default:
      return state;
  }
}

export function ConfirmEmailContainer() {
  const dispatch = useDispatch();
  const { email = '', emailConfirmed = false } = useSelector(
    (state: any) => state[AUTH_STORE_NAME].user,
  );
  const [state, setState] = useReducer(confirmEmailReducer, initialState);
  const [count, startInterval] = useInterval(() => {
    setState({ type: CONFIRM_EMAIL_ACTION_TYPE.SEND_DELAY_OFF });
  });

  const sendCodeToEmail = () => {
    if (!emailConfirmed) {
      sendCodeToEmailAction()(setState);
      startInterval();
    }
  };

  useEffect(sendCodeToEmail, []);

  const [code, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value.trim());
  };

  const onConfirmEmail = () => {
    if (!emailConfirmed || !code) {
      sendConfirmCodeAction(code)(setState, dispatch);
    }
  };

  return (
    <ConfirmEmailComponent
      state={state}
      email={email}
      count={count}
      onSendCode={sendCodeToEmail}
      onConfirmEmail={onConfirmEmail}
      onChange={onChange}
      value={code}
    />
  );
}
