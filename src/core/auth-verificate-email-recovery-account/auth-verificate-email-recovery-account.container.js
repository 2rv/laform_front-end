import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isRequestPending } from '../../main/store/store.service';
import { AuthVerificateEmailRecoveryAccountComponent } from './auth-verificate-email-recovery-account.component';
import { authVerificateEmailRecoveryAccountUploadData } from './auth-verificate-email-recovery-account.action';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_STORE_NAME } from './auth-verificate-email-recovery-account.constant';
import { redirect } from 'src/main/navigation';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export function AuthVerificateEmailRecoveryAccountContainer() {
  const dispatch = useDispatch();
  const { authRecoveryAccountForm, user } = useSelector((state) => ({
    authRecoveryAccountForm:
      state[AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_STORE_NAME]
        .authRecoveryAccountForm,
    user: state[AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_STORE_NAME].user,
  }));

  const sendVerificationRequest = () => {
    if (user.email) {
      dispatch(authVerificateEmailRecoveryAccountUploadData(user));
    } else {
      redirect(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH);
    }
  };

  return (
    <AuthVerificateEmailRecoveryAccountComponent
      email={user.email}
      isPending={isRequestPending(authRecoveryAccountForm)}
      onResend={sendVerificationRequest}
    />
  );
}
