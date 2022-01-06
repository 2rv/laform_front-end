import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { CREATE_NOTIFICATION_STORE_NAME } from './create-notification.constant';
import { CREATE_NOTIFICATION_FIELD_NAME } from './create-notification.type';
import { CreateNotificationComponent } from './create-notification.component';
import { createNotificationUpload } from './create-notification.action';
import { validation } from './create-notification.validation';
import { convertCreateNotificationFormData } from './create-notification.convert';

export function CreateNotificationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_NOTIFICATION_STORE_NAME].createMasterClass,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (values) => {
    const data = convertCreateNotificationFormData(values);
    // dispatch(createNotificationUpload(data));
  };

  const initialValues = () => ({
    [CREATE_NOTIFICATION_FIELD_NAME.SUBJECT]: '',
  });

  return (
    <CreateNotificationComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={validation}
    />
  );
}
