import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { AuthFormRecoveryAccountContainer } from './frames/auth-form-recovery-account/auth-form-recovery-account.container';

import { AUTH_RECOVERY_ACCOUNT_STORE_NAME } from './auth-recovery-account.constant';
import {
  AUTH_RECOVERY_ACCOUNT_FIELD_NAME,
  AUTH_RECOVERY_ACCOUNT_FORM_FIELD_NAME,
} from './auth-recovery-account.type';
import { authRecoveryAccountFormUploadData } from './auth-recovery-account.action';
import { parseAuthRecoveryAccountData } from './auth-recovery-account.convert';
import { authRecoveryAccountFormValidation } from './auth-recovery-account.validation';

export function AuthRecoveryAccountContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[AUTH_RECOVERY_ACCOUNT_STORE_NAME]);

  const authRecoveryAccountFormSubmit = (values) => {
    const data = parseAuthRecoveryAccountData(values);

    dispatch(authRecoveryAccountFormUploadData(data));
  };

  const authRecoveryAccountFormGetInitialValue = () => ({
    [AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL]: '',
  });

  return (
    <AuthFormRecoveryAccountContainer
      isPending={isRequestPending(state.authRecoveryAccountForm)}
      errorMessage={getRequestErrorMessage(state.authRecoveryAccountForm)}
      isSuccess={isRequestSuccess(state.authRecoveryAccountForm)}
      isError={isRequestError(state.authRecoveryAccountForm)}
      initialValue={authRecoveryAccountFormGetInitialValue()}
      validation={authRecoveryAccountFormValidation}
      onSubmitForm={authRecoveryAccountFormSubmit}
      fieldName={AUTH_RECOVERY_ACCOUNT_FORM_FIELD_NAME}
    />
  );
}
