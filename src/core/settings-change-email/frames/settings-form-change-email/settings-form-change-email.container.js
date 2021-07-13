import { Formik } from 'formik';

import { SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY } from './settings-form-change-email.type';
import { SettingsFormChangeEmailComponent } from './settings-form-change-email.component';

export function SettingsFormChangeEmailContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const EMAIL_NAME = fieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.EMAIL];
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
          fieldEmail={EMAIL_NAME}
          fieldPassword={PASSWORD_NAME}
          dataPending={dataPending}
          formPending={formPending}
          formSuccess={formSuccess}
          formError={formError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
