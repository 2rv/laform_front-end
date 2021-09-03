import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { AuthVerificateEmailComponent } from './auth-verificate-email.component';
import { authVerificateEmailUploadData } from './auth-verificate-email.action';
import { AUTH_VERIFICATE_EMAIL_STORE_NAME } from './auth-verificate-email.constant';

export function AuthVerificateEmailContainer() {
  const dispatch = useDispatch();
  const { state, user } = useSelector((state) => ({
    state: state[AUTH_VERIFICATE_EMAIL_STORE_NAME].authVerificateEmail,
    user: state[AUTH_STORE_NAME].user,
  }));

  const sendVerificationRequest = () => {
    dispatch(authVerificateEmailUploadData());
  };

  useEffect(sendVerificationRequest, []);

  return (
    <AuthVerificateEmailComponent
      email={user?.email}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      onResend={sendVerificationRequest}
    />
  );
}
