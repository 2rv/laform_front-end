import { Formik } from 'formik';
import { LoginFormComponent } from './login-form.component';

export function LoginFormContainer(props) {
  const {
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;
  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <LoginFormComponent
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
