import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isRequestPending } from '../../main/store/store.service';

import { AuthVerificateEmailComponent } from './frames/auth-verificate-email';
import { authVerificateEmailUploadData } from './auth-verificate-email.action';
import { AUTH_VERIFICATE_EMAIL_STORE_NAME } from './auth-verificate-email.constant';

export function AuthVerificateEmailContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[AUTH_VERIFICATE_EMAIL_STORE_NAME]);

  const sendVerificationRequest = () => {
    dispatch(authVerificateEmailUploadData());
  };

  useEffect(sendVerificationRequest, []);

  return (
    <AuthVerificateEmailComponent
      isPending={isRequestPending(state.authRecoveryAccountForm)}
      onResend={sendVerificationRequest}
    />
  );
}
