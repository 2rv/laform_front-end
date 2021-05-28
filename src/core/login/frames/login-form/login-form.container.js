import { Formik } from 'formik';

import { LOGIN_FORM_FIELD_KEY } from './login-form.type';
import { LoginFormComponent } from './login-form.component';

export function LoginFormContainer(props) {
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

  const LOGIN_NAME = fieldName[LOGIN_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = fieldName[LOGIN_FORM_FIELD_KEY.PASSWORD];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <LoginFormComponent
          fieldLogin={LOGIN_NAME}
          fieldPassword={PASSWORD_NAME}
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
