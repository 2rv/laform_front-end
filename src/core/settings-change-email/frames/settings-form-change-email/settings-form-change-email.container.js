import { Formik } from 'formik';

import { SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY } from './settings-form-change-email.type';
import { SettingsFormChangeEmailComponent } from './settings-form-change-email.component';

export function SettingsFormChangeEmailContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isFormUploadPending,
    isFormUploadSuccess,
    isFormUploadError,
    formUploadErrorMessage,
    isEmailLoadPending,
    pageLoading,
  } = props;

  const OLD_EMAIL_NAME =
    fieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.OLD_EMAIL];
  const NEW_EMAIL_NAME =
    fieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.NEW_EMAIL];
  const PASSWORD_NAME =
    fieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.PASSWORD];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <SettingsFormChangeEmailComponent
          fieldOldEmail={OLD_EMAIL_NAME}
          fieldNewEmail={NEW_EMAIL_NAME}
          fieldPassword={PASSWORD_NAME}
          isFormUploadPending={isFormUploadPending}
          isFormUploadSuccess={isFormUploadSuccess}
          isFormUploadError={isFormUploadError}
          formUploadErrorMessage={formUploadErrorMessage}
          isEmailLoadPending={isEmailLoadPending}
          pageLoading={pageLoading}
          {...formProps}
        />
      )}
    </Formik>
  );
}
