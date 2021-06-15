import { Formik } from 'formik';

import { AUTH_FORM_CHANGE_PASSWORD_FIELD_KEY } from './auth-form-change-password.type';
import { AuthFormChangePasswordComponent } from './auth-form-change-password.component';

export function AuthFormChangePasswordContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const PASSWORD_NAME = fieldName[AUTH_FORM_CHANGE_PASSWORD_FIELD_KEY.PASSWORD];
  const PASSWORD_REPEAT_NAME =
    fieldName[AUTH_FORM_CHANGE_PASSWORD_FIELD_KEY.PASSWORD_REPEAT];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <AuthFormChangePasswordComponent
          fieldPassword={PASSWORD_NAME}
          fieldPasswordRepeat={PASSWORD_REPEAT_NAME}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
