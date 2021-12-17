import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { LOGIN_STORE_NAME } from './login.constant';
import { LOGIN_FIELD_NAME } from './login.type';
import { LoginComponent } from './login.component';
import { loginFormUploadData } from './login.action';
import { loginFormValidation } from './login.validation';

export function LoginContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[LOGIN_STORE_NAME].loginForm);
  const loginFormSendData = (values) => {
    dispatch(loginFormUploadData(values));
  };

  const loginFormGetInitialValue = () => ({
    [LOGIN_FIELD_NAME.LOGIN]: '',
    [LOGIN_FIELD_NAME.PASSWORD]: '',
  });

  return (
    <LoginComponent
      isPending={isRequestPending(state)}
      errorMessage={getRequestErrorMessage(state)}
      isSuccess={isRequestSuccess(state)}
      isError={isRequestError(state)}
      initialValue={loginFormGetInitialValue()}
      validation={loginFormValidation}
      onSubmitForm={loginFormSendData}
    />
  );
}
