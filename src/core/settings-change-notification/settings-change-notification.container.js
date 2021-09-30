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
import { SETTINGS_CHANGE_EMAIL_STORE_NAME } from '../settings-change-email';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_FORM_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_DATA_KEY,
  SETTINGS_CHANGE_NOTIFICATION_DATA_NAME,
} from './settings-change-notification.type';
import {
  settingsChangeNotificationFormUploadData,
  settingsChangeNotificationLoad,
} from './settings-change-notification.action';
import { convertSettingsChangeNotificationFormData } from './settings-change-notification.convert';

export function SettingsChangeNotificationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, changeEmailSuccess } = useSelector((state) => ({
    state: state[SETTINGS_CHANGE_NOTIFICATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    changeEmailSuccess:
      state[SETTINGS_CHANGE_EMAIL_STORE_NAME].settingsChangeEmailUploadForm
        .success,
  }));
  const notificationData = getRequestData(
    state.settingsChangeNotificationLoadNotification,
  );

  const settingsChangeNotificationFormSendData = (
    values,
    { setSubmitting },
  ) => {
    const data = convertSettingsChangeNotificationFormData(values);
    dispatch(settingsChangeNotificationFormUploadData(data, setSubmitting));
  };

  const settingsChangeNotificationFormGetInitialValue = () => ({
    [SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION]:
      notificationData[SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION] ||
      false,
  });

  useEffect(() => {
    dispatch(settingsChangeNotificationLoad());
  }, [changeEmailSuccess]);

  return (
    <SettingsFormChangeNotificationContainer
      isFormUploadPending={isRequestPending(
        state.settingsChangeNotificationUploadForm,
      )}
      formUploadErrorMessage={getRequestErrorMessage(
        state.settingsChangeNotificationUploadForm,
      )}
      isFormUploadSuccess={isRequestSuccess(
        state.settingsChangeNotificationUploadForm,
      )}
      isFormUploadError={isRequestError(
        state.settingsChangeNotificationUploadForm,
      )}
      isNotificationLoadPending={isRequestPending(
        state.settingsChangeNotificationLoadNotification,
      )}
      pageLoading={pageLoading}
      initialValue={settingsChangeNotificationFormGetInitialValue()}
      onSubmitForm={settingsChangeNotificationFormSendData}
      fieldName={SETTINGS_CHANGE_NOTIFICATION_FORM_FIELD_NAME}
      notificationData={notificationData}
    />
  );
}
