import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { settingsUserInfoValidation } from './settings-user-info.validation';
import { SettingsUserInfoComponent } from './setting-user-unfo.component';
import { SETTINGS_USER_INFO_STORE_NAME } from './settings-user-info.constant';
import { SETTINGS_USER_INFO_FIELD_NAME } from './settings-user-info.type';
import {
  settingsSaveUserInfoAction,
  settingsLoadUserInfoAction,
} from './settings-user-info.action';

export function SettingsUserInfoContainer() {
  const dispatch = useDispatch();
  const { saveState, dataState } = useSelector((state) => ({
    saveState: state[SETTINGS_USER_INFO_STORE_NAME].save,
    dataState: state[SETTINGS_USER_INFO_STORE_NAME].data,
  }));

  const onSubmit = (values) => {
    dispatch(settingsSaveUserInfoAction(values));
  };

  const initialValues = () => {
    return getRequestData(dataState, {
      [SETTINGS_USER_INFO_FIELD_NAME.FULLNAME]: '',
      [SETTINGS_USER_INFO_FIELD_NAME.PHONE]: '',
    });
  };

  useEffect(() => {
    dispatch(settingsLoadUserInfoAction());
  }, []);

  return (
    <SettingsUserInfoComponent
      saveSuccess={isRequestSuccess(saveState)}
      isPending={isRequestPending(saveState || dataState)}
      error={isRequestError(saveState || dataState)}
      errorMessage={getRequestErrorMessage(saveState || dataState)}
      initialValues={initialValues()}
      validation={settingsUserInfoValidation}
      onSubmit={onSubmit}
    />
  );
}
