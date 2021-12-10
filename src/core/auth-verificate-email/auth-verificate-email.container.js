import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { AuthVerificateEmailComponent } from './auth-verificate-email.component';
import { authVerificateEmailUploadData } from './auth-verificate-email.action';
import { AUTH_VERIFICATE_EMAIL_STORE_NAME } from './auth-verificate-email.constant';
import { getQuery } from 'src/main/navigation';

export function AuthVerificateEmailContainer() {
  const email = getQuery('data');
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({
    state: state[AUTH_VERIFICATE_EMAIL_STORE_NAME].authVerificateEmail,
  }));

  const sendVerificationRequest = () => {
    dispatch(authVerificateEmailUploadData());
  };

  useEffect(sendVerificationRequest, []);

  return (
    <AuthVerificateEmailComponent
      email={email ?? ''}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      onResend={sendVerificationRequest}
    />
  );
}
