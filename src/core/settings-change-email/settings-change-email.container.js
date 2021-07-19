import { SettingsFormChangeEmailContainer } from './frames/settings-form-change-email';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_EMAIL_STORE_NAME } from './settings-change-email.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  SETTINGS_CHANGE_EMAIL_FIELD_NAME,
  SETTINGS_CHANGE_PASSWORD_FORM_FIELD_NAME,
  SETTINGS_CHANGE_EMAIL_DATA_KEY,
} from './settings-change-email.type';
import {
  settingsChangeEmailFormUploadData,
  settingsChangeEmailLoadEmail,
} from './settings-change-email.action';
import { settingsChangeEmailFormValidation } from './settings-change-email.validation';
import { convertSettingsChangeEmailFormData } from './settings-change-email.convert';

export function SettingsChangeEmailContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, email } = useSelector((state) => ({
    state: state[SETTINGS_CHANGE_EMAIL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    email:
      state[SETTINGS_CHANGE_EMAIL_STORE_NAME].settingsChangeEmailLoadEmail
        .data?.[SETTINGS_CHANGE_EMAIL_DATA_KEY.EMAIL],
  }));

  const settingsChangeEmailFormSendData = (values) => {
    const data = convertSettingsChangeEmailFormData(values);
    dispatch(settingsChangeEmailFormUploadData(data));
  };

  const settingsChangeEmailFormGetInitialValue = () => ({
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: email ? email : '',
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: '',
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: '',
  });

  useEffect(() => {
    dispatch(settingsChangeEmailLoadEmail());
  }, []);

  return (
    <SettingsFormChangeEmailContainer
      isFormUploadPending={isRequestPending(
        state.settingsChangeEmailUploadForm,
      )}
      formUploadErrorMessage={getRequestErrorMessage(
        state.settingsChangeEmailUploadForm,
      )}
      isFormUploadSuccess={isRequestSuccess(
        state.settingsChangeEmailUploadForm,
      )}
      isFormUploadError={isRequestError(state.settingsChangeEmailUploadForm)}
      isEmailLoadPending={isRequestPending(state.settingsChangeEmailLoadEmail)}
      pageLoading={pageLoading}
      initialValue={settingsChangeEmailFormGetInitialValue()}
      validation={settingsChangeEmailFormValidation}
      onSubmitForm={settingsChangeEmailFormSendData}
      fieldName={SETTINGS_CHANGE_PASSWORD_FORM_FIELD_NAME}
    />
  );
}