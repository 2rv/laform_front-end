import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SettingsFormChangePasswordContainer } from './frames/settings-form-change-password';
import { SETTINGS_CHANGE_PASSWORD_STORE_NAME } from './settings-change-password.constant';
import {
  SETTINGS_CHANGE_PASSWORD_FIELD_NAME,
  SETTINGS_CHANGE_PASSWORD_FORM_FIELD_NAME,
} from './settings-change-password.type';
import { settingsChangePasswordFormUploadData } from './settings-change-password.action';
import { settingsChangePasswordFormValidation } from './settings-change-password.validation';
import { convertSettingsChangePasswordFormData } from './settings-change-password.convert';

export function SettingsChangePasswordContainer() {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state[SETTINGS_CHANGE_PASSWORD_STORE_NAME],
  );

  const settingsChangePasswordFormSendData = (values) => {
    const data = convertSettingsChangePasswordFormData(values);

    dispatch(settingsChangePasswordFormUploadData(data));
  };

  const settingsChangePasswordFormGetInitialValue = () => ({
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]: '',
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: '',
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: '',
  });

  return (
    <SettingsFormChangePasswordContainer
      isPending={isRequestPending(state.settingsChangePasswordForm)}
      errorMessage={getRequestErrorMessage(state.settingsChangePasswordForm)}
      isSuccess={isRequestSuccess(state.settingsChangePasswordForm)}
      isError={isRequestError(state.settingsChangePasswordForm)}
      initialValue={settingsChangePasswordFormGetInitialValue()}
      validation={settingsChangePasswordFormValidation}
      onSubmitForm={settingsChangePasswordFormSendData}
      fieldName={SETTINGS_CHANGE_PASSWORD_FORM_FIELD_NAME}
    />
  );
}
