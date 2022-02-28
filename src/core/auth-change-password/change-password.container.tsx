import { useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { ChangePasswordComponent } from './change-password.component';
import { changePassworValidation } from './change-password.validation';
import {
  ChangePasswordValues,
  CHANGE_PASSWORD_ACTION_TYPE,
  CHANGE_PASSWORD_FIELD_NAME,
  ChangePasswordStateType,
  ChangePasswordActionType,
} from './change-password.type';
import { changePasswordAction } from './change-password.action';

const initialState = {
  pending: false,
  success: false,
  error: '',
};

function changePasswordReducer(
  state: ChangePasswordStateType,
  action: ChangePasswordActionType,
) {
  switch (action.type) {
    case CHANGE_PASSWORD_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: '',
      };
    case CHANGE_PASSWORD_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case CHANGE_PASSWORD_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function ChangePasswordContainer() {
  const [state, setState] = useReducer(changePasswordReducer, initialState);

  const onSubmit = (values: ChangePasswordValues) => {
    const code = getQuery('code');
    if (typeof code === 'string' && code) {
      changePasswordAction(code, values)(setState);
    } else {
      setState({ type: CHANGE_PASSWORD_ACTION_TYPE.ERROR, error: 'ERROR' });
    }
  };

  const initialValues = {
    [CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: '',
    [CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: '',
  };
  return (
    <ChangePasswordComponent
      initialValues={initialValues}
      validation={changePassworValidation}
      onSubmit={onSubmit}
      state={state}
    />
  );
}
