import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import {
  NOTIFICATION_FIELD_NAME,
  NOTIFICATION_FORM_FIELD_NAME,
  NOTIFICATION_DATA_KEY,
} from './notification.type';
import { NOTIFICATION_STORE_NAME } from './notification.constant';
import { NotificationComponent } from './notification.component';
import { notificationFormValidation } from './notification.validation';
import { convertNotificationFormData } from './notification.convert';
import {
  notificationFormUploadData,
  notificationLoadEmail,
} from './notification.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

export function NotificationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, email } = useSelector((state) => ({
    state: state[NOTIFICATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    email:
      state[NOTIFICATION_STORE_NAME].notificationLoadEmail.data?.[
        NOTIFICATION_DATA_KEY.EMAIL
      ],
  }));

  const notificationFormSendData = (values) => {
    const data = convertNotificationFormData(values);
    dispatch(notificationFormUploadData(data));
  };

  const notificationFormGetInitialValue = () => ({
    [NOTIFICATION_FIELD_NAME.EMAIL]: email ? email : '',
  });

  useEffect(() => {
    dispatch(notificationLoadEmail());
  }, []);

  return (
    <NotificationComponent
      isFormPending={isRequestPending(state.notificationForm)}
      isFormSuccess={isRequestSuccess(state.notificationForm)}
      isFormError={isRequestError(state.notificationForm)}
      formErrorMessage={getRequestErrorMessage(state.notificationForm)}
      loadEmailPending={isRequestPending(state.notificationLoadEmail)}
      pageLoading={pageLoading}
      initialValue={notificationFormGetInitialValue()}
      validation={notificationFormValidation}
      onSubmitForm={notificationFormSendData}
      fieldName={NOTIFICATION_FORM_FIELD_NAME}
    />
  );
}
