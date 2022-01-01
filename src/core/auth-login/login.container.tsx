import { LoginComponent } from './login.component';
import { loginSubmitAction } from './login.action';
import { loginValidate } from './login.validation';
import {
  LOGIN_FIELD_NAME,
  LOGIN_ACTION_TYPE,
  LoginValues,
  LoginStateType,
  LoginActionType,
} from './login.type';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';

const initialState = {
  pending: false,
  success: false,
  error: '',
};
function LoginReducer(state: LoginStateType, action: LoginActionType) {
  switch (action.type) {
    case LOGIN_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: '',
      };
    case LOGIN_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case LOGIN_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function LoginContainer() {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(LoginReducer, initialState);
  const onSubmit = (values: LoginValues) => {
    loginSubmitAction(values)(dispatch, setState);
  };
  useSelector((state: any) => state[LANG_STORE_NAME]);

  const initialValues = {
    [LOGIN_FIELD_NAME.LOGIN]: '',
    [LOGIN_FIELD_NAME.PASSWORD]: '',
  };
  return (
    <LoginComponent
      initialValues={initialValues}
      validate={loginValidate}
      onSubmit={onSubmit}
      state={state}
    />
  );
}
