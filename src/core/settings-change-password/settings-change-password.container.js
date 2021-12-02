import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SettingsFormChangePasswordContainer } from './frames/settings-form-change-password';
import { SETTINGS_CHANGE_PASSWORD_STORE_NAME } from './settings-change-password.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  SETTINGS_CHANGE_PASSWORD_FIELD_NAME,
  SETTINGS_CHANGE_PASSWORD_FORM_FIELD_NAME,
} from './settings-change-password.type';
import { settingsChangePasswordFormUploadData } from './settings-change-password.action';
import { settingsChangePasswordFormValidation } from './settings-change-password.validation';
import { convertSettingsChangePasswordFormData } from './settings-change-password.convert';
import { SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME } from '../settings-change-delivery-info';

export function SettingsChangePasswordContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, userInfo } = useSelector((state) => ({
    state: state[SETTINGS_CHANGE_PASSWORD_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userInfo:
      state[SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME].changeDeliveryInfo,
  }));

  const userInfoData = getRequestData(userInfo);

  const settingsChangePasswordFormSendData = (values, { setSubmitting }) => {
    const data = convertSettingsChangePasswordFormData(values);

    dispatch(settingsChangePasswordFormUploadData(data, setSubmitting));
  };

  const settingsChangePasswordFormGetInitialValue = () => ({
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]: '',
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: '',
    [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: '',
  });

  //   if (Boolean(userInfoData?.googleId) || Boolean(userInfoData?.facebookId) || Boolean(userInfoData?.appleId)) {
  //     return null;
  //   }

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
      pageLoading={pageLoading}
    />
  );
}
