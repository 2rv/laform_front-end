import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { LOGIN_STORE_NAME } from './login.constant';
import { LOGIN_FIELD_NAME, LOGIN_FORM_FIELD_NAME } from './login.type';
import { LoginComponent } from './login.component';
import { loginFormUploadData } from './login.action';
import { loginFormValidation } from './login.validation';
import { convertLoginFormData } from './login.convert';

export function LoginContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[LOGIN_STORE_NAME]);

  const loginFormSendData = (values) => {
    const data = convertLoginFormData(values);

    dispatch(loginFormUploadData(data));
  };

  const loginFormGetInitialValue = () => ({
    [LOGIN_FIELD_NAME.LOGIN]: '',
    [LOGIN_FIELD_NAME.PASSWORD]: '',
  });

  return (
    <LoginComponent
      isPending={isRequestPending(state.loginForm)}
      errorMessage={getRequestErrorMessage(state.loginForm)}
      isSuccess={isRequestSuccess(state.loginForm)}
      isError={isRequestError(state.loginForm)}
      initialValue={loginFormGetInitialValue()}
      validation={loginFormValidation}
      onSubmitForm={loginFormSendData}
      fieldName={LOGIN_FORM_FIELD_NAME}
    />
  );
}
