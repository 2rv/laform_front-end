import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { isRequestPending } from '../../main/store/store.service';

import { AuthVerificateEmailComponent } from './frames/auth-verificate-email';
import { authVerificateEmailUploadData } from './auth-verificate-email.action';
import { AUTH_VERIFICATE_EMAIL_STORE_NAME } from './auth-verificate-email.constant';

export function AuthVerificateEmailContainer() {
  const dispatch = useDispatch();
  const { authRecoveryAccountForm, user } = useSelector((state) => ({
    authRecoveryAccountForm: state[AUTH_VERIFICATE_EMAIL_STORE_NAME],
    user: state[AUTH_STORE_NAME].user,
  }));

  const sendVerificationRequest = () => {
    dispatch(authVerificateEmailUploadData());
  };

  //   useEffect(sendVerificationRequest, []);

  return (
    <AuthVerificateEmailComponent
      email={user?.email}
      isPending={isRequestPending(authRecoveryAccountForm)}
      onResend={sendVerificationRequest}
    />
  );
}
