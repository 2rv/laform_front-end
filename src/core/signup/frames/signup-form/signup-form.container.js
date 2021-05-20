import { Formik } from 'formik';

import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';

export function SignupFormContainer(props) {
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

  const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const EMAIL_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.EMAIL];
  const PASSWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];
  const PASSWORD_REPEAT_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD_REPEAT];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <SignupFormComponent
          fieldLogin={LOGIN_NAME}
          fieldEmail={EMAIL_NAME}
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
