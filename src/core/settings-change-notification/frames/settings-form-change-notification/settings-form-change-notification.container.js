import { Formik } from 'formik';
import { SETTINGS_FORM_CHANGE_NOTIFICATION_FIELD_KEY } from './settings-form-change-notification.type';
import { SettingsFormChangeNotificationComponent } from './settings-form-change-notification.component';

export function SettingsFormChangeNotificationContainer(props) {
  const {
    fieldName,
    initialValue,
    onSubmitForm,
    isFormUploadPending,
    isFormUploadSuccess,
    isFormUploadError,
    formUploadErrorMessage,
    isEmailLoadPending,
    pageLoading,
  } = props;

  const NOTIFICATION_NAME =
    fieldName[SETTINGS_FORM_CHANGE_NOTIFICATION_FIELD_KEY.NOTIFICATION];

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <SettingsFormChangeNotificationComponent
          fieldNotification={NOTIFICATION_NAME}
          isFormUploadPending={isFormUploadPending}
          isFormUploadSuccess={isFormUploadSuccess}
          isFormUploadError={isFormUploadError}
          formUploadErrorMessage={formUploadErrorMessage}
          isNotificationLoadPending={isEmailLoadPending}
          pageLoading={pageLoading}
          {...formProps}
        />
      )}
    </Formik>
  );
}
