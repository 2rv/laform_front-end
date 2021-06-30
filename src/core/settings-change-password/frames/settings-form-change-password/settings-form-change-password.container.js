import { Formik } from 'formik';

import { SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY } from './settings-form-change-password.type';
import { SettingsFormChangePasswordComponent } from './settings-form-change-password.component';

export function SettingsFormChangePasswordContainer(props) {
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

  const OLD_PASSWORD_NAME =
    fieldName[SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.OLD_PASSWORD];
  const PASSWORD_NAME =
    fieldName[SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.PASSWORD];
  const PASSWORD_REPEAT_NAME =
    fieldName[SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.PASSWORD_REPEAT];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <SettingsFormChangePasswordComponent
          fieldOldPassword={OLD_PASSWORD_NAME}
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
