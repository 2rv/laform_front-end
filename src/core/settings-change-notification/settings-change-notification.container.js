import { SettingsFormChangeNotificationContainer } from './frames/settings-form-change-notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_NOTIFICATION_STORE_NAME } from './settings-change-notification.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_FORM_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_DATA_KEY,
} from './settings-change-notification.type';
import {
  settingsChangeNotificationFormUploadData,
  settingsChangeNotificationLoad,
} from './settings-change-notification.action';
import { convertSettingsChangeNotificationFormData } from './settings-change-notification.convert';

export function SettingsChangeNotificationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SETTINGS_CHANGE_NOTIFICATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const notification = getRequestData(state);

  const settingsChangeNotificationFormSendData = (values) => {
    const data = convertSettingsChangeNotificationFormData(values);
    dispatch(settingsChangeNotificationFormUploadData(data));
  };

  const settingsChangeNotificationFormGetInitialValue = () => ({
    [SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION]: notification,
  });

  // useEffect(() => {
  //   dispatch(settingsChangeNotificationLoad());
  // }, []);

  return (
    <SettingsFormChangeNotificationContainer
      isFormUploadPending={
        isRequestPending(state.settingsChangeNotificationUploadForm) || true
      }
      formUploadErrorMessage={
        getRequestErrorMessage(state.settingsChangeNotificationUploadForm) ||
        true
      }
      isFormUploadSuccess={
        isRequestSuccess(state.settingsChangeNotificationUploadForm) || true
      }
      isFormUploadError={
        isRequestError(state.settingsChangeNotificationUploadForm) || true
      }
      isNotificationLoadPending={
        isRequestPending(state.settingsChangeNotificationLoadNotification) ||
        true
      }
      pageLoading={pageLoading || true}
      initialValue={settingsChangeNotificationFormGetInitialValue()}
      onSubmitForm={settingsChangeNotificationFormSendData}
      fieldName={SETTINGS_CHANGE_NOTIFICATION_FORM_FIELD_NAME}
    />
  );
}
