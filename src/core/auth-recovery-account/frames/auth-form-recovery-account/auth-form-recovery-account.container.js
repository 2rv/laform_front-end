import { Formik } from 'formik';

import { AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY } from './auth-form-recovery-account.type';
import { AuthFormRecoveryAccountComponent } from './auth-form-recovery-account.component';

export function AuthFormRecoveryAccountContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isSuccess,
  } = props;

  const EMAIL_NAME = fieldName[AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY.EMAIL];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <AuthFormRecoveryAccountComponent
          fieldEmail={EMAIL_NAME}
          isPending={isPending}
          isSuccess={isSuccess}
          {...formProps}
        />
      )}
    </Formik>
  );
}
