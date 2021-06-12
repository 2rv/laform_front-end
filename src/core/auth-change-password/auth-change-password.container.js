import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation';

import { AuthFormChangePasswordContainer } from './frames/auth-form-change-password';
import { AUTH_CHANGE_PASSWORD_STORE_NAME } from './auth-change-password.constant';
import {
  AUTH_CHANGE_PASSWORD_FIELD_NAME,
  AUTH_CHANGE_PASSWORD_FORM_FIELD_NAME,
} from './auth-change-password.type';
import { authChangePasswordFormUploadData } from './auth-change-password.action';
import { authChangePasswordFormValidation } from './auth-change-password.validation';
import { convertAuthChangePasswordFormData } from './auth-change-password.convert';

export function AuthChangePasswordContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[AUTH_CHANGE_PASSWORD_STORE_NAME]);

  const authChangePasswordFormSendData = (values) => {
    const code = getQuery('code');
    const data = convertAuthChangePasswordFormData({ ...values, code });

    dispatch(authChangePasswordFormUploadData(data));
  };

  const authChangePasswordFormGetInitialValue = () => ({
    [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: '',
    [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: '',
  });

  return (
    <AuthFormChangePasswordContainer
      isPending={isRequestPending(state.authChangePasswordForm)}
      errorMessage={getRequestErrorMessage(state.authChangePasswordForm)}
      isSuccess={isRequestSuccess(state.authChangePasswordForm)}
      isError={isRequestError(state.authChangePasswordForm)}
      initialValue={authChangePasswordFormGetInitialValue()}
      validation={authChangePasswordFormValidation}
      onSubmitForm={authChangePasswordFormSendData}
      fieldName={AUTH_CHANGE_PASSWORD_FORM_FIELD_NAME}
    />
  );
}
