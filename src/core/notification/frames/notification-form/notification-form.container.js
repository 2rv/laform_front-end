import { Formik } from 'formik';
import { NotificationFormComponent } from './notification-form.component';
import { NOTIFICATION_FORM_FIELD_KEY } from './notification-form.type';

export function NotificationFormContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    pageLoading,
    isFormPending,
    isFormSuccess,
    isFormError,
    formErrorMessage,
    loadEmailPending,
  } = props;

  const EMAIL_NAME = fieldName[NOTIFICATION_FORM_FIELD_KEY.EMAIL];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <NotificationFormComponent
          fieldEmail={EMAIL_NAME}
          isFormPending={isFormPending}
          isFormSuccess={isFormSuccess}
          isFormError={isFormError}
          formErrorMessage={formErrorMessage}
          loadEmailPending={loadEmailPending}
          pageLoading={pageLoading}
          {...formProps}
        />
      )}
    </Formik>
  );
}
