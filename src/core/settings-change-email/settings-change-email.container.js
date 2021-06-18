import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SettingsFormChangeEmailContainer } from './frames/settings-form-change-email';
import { SETTINGS_CHANGE_EMAIL_STORE_NAME } from './settings-change-email.constant';
import {
  SETTINGS_CHANGE_EMAIL_FIELD_NAME,
  SETTINGS_CHANGE_EMAIL_FORM_FIELD_NAME,
} from './settings-change-email.type';
import {
  settingsChangeEmailFormUploadData,
  settingsChangeEmailLoadData,
} from './settings-change-email.action';
import { settingsChangeEmailFormValidation } from './settings-change-email.validation';
import {
  convertSettingsChangeEmailFormData,
  performSettingsChangeEmailFormData,
} from './settings-change-email.convert';

export function SettingsChangeEmailContainer() {
  const dispatch = useDispatch();
  const { changeEmail, formChangeEmail } = useSelector((state) => ({
    changeEmail: state[SETTINGS_CHANGE_EMAIL_STORE_NAME].changeEmail,
    formChangeEmail: state[SETTINGS_CHANGE_EMAIL_STORE_NAME].formChangeEmail,
  }));

  const settingsChangeEmailFormSendData = (values) => {
    const data = convertSettingsChangeEmailFormData(values);

    dispatch(settingsChangeEmailFormUploadData(data));
  };

  const settingsChangeEmailFormGetInitialValue = () => {
    const rawData = getRequestData(changeEmail, null);
    if (!rawData) {
      return {
        [SETTINGS_CHANGE_EMAIL_FIELD_NAME.EMAIL]: '',
        [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: '',
      };
    }

    return {
      ...performSettingsChangeEmailFormData(rawData),
      [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: '',
    };
  };

  useEffect(() => dispatch(settingsChangeEmailLoadData()), []);

  return (
    <SettingsFormChangeEmailContainer
      dataPending={isRequestPending(changeEmail)}
      formPending={isRequestPending(formChangeEmail)}
      formSuccess={isRequestSuccess(formChangeEmail)}
      formError={isRequestError(formChangeEmail)}
      errorMessage={getRequestErrorMessage(formChangeEmail)}
      initialValue={settingsChangeEmailFormGetInitialValue()}
      validation={settingsChangeEmailFormValidation}
      onSubmitForm={settingsChangeEmailFormSendData}
      fieldName={SETTINGS_CHANGE_EMAIL_FORM_FIELD_NAME}
    />
  );
}
