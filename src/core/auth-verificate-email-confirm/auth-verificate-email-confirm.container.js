import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getQuery,
  setLinkRedirect,
} from '../../main/navigation/navigation.core';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { AuthVerificateEmailConfirmComponent } from './frames/auth-verificate-email-confirm';
import { AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME } from './auth-verificate-email-confirm.constant';
import { authVerificateEmailConfirmUploadData } from './auth-verificate-email-confirm.action';
import { HOME_ROUTE_PATH } from '../home';

export function AuthVerificateEmailConfirmContainer() {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state[AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME],
  );

  const sendVerificationConfirmRequest = () => {
    const code = getQuery('code');

    dispatch(authVerificateEmailConfirmUploadData(code));
  };

  useEffect(sendVerificationConfirmRequest, []);

  return (
    <AuthVerificateEmailConfirmComponent
      onButtonClick={setLinkRedirect(HOME_ROUTE_PATH)}
      isPending={isRequestPending(state.authVerificateEmailConfirm)}
      isSuccess={isRequestSuccess(state.authVerificateEmailConfirm)}
      isError={isRequestError(state.authVerificateEmailConfirm)}
      errorMessage={getRequestErrorMessage(state.authVerificateEmailConfirm)}
    />
  );
}
