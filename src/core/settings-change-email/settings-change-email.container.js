import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import {
  settingsUpateEmailAction,
  settingsLoadEmailAction,
} from './settings-change-email.action';
import { validation } from './settings-change-email.validation';
import { SETTINGS_CHANGE_EMAIL_STORE_NAME } from './settings-change-email.constant';
import { SettingsChangeEmailComponent } from './settings-change-email.component';
import { SETTINGS_CHANGE_EMAIL_FIELD_NAME } from './settings-change-email.type';

export function SettingsChangeEmailContainer() {
  const dispatch = useDispatch();
  const { save, email, pageLoading } = useSelector((state) => ({
    save: state[SETTINGS_CHANGE_EMAIL_STORE_NAME].save,
    email: state[SETTINGS_CHANGE_EMAIL_STORE_NAME].email,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (values) => {
    dispatch(settingsUpateEmailAction(values));
  };

  const initialValues = () => ({
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: getRequestData(email, ''),
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: '',
    [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: '',
  });

  useEffect(() => {
    dispatch(settingsLoadEmailAction());
  }, []);

  return (
    <SettingsChangeEmailComponent
      savePending={isRequestPending(save)}
      saveErrorMessage={getRequestErrorMessage(save)}
      saveSuccess={isRequestSuccess(save)}
      saveError={isRequestError(save)}
      loadPending={isRequestPending(email)}
      pageLoading={pageLoading}
      initialValues={initialValues()}
      validation={validation}
      onSubmit={onSubmit}
    />
  );
}
