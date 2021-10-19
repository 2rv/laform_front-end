import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { updateNotificationEmailStatus, getUserNotificationEmailStatus } from './notification.action';
import { NOTIFICATION_STORE_NAME } from './notification.constant';
import { NotificationComponent } from './notification.component';

export function NotificationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, user, isAuth } = useSelector((state) => ({
    state: state[NOTIFICATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const notificationEmailStatus = getRequestData(state.notificationStatus);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserNotificationEmailStatus());
    }
  }, []);

  const updateNotificationEmailStatusHandler = () => {
    dispatch(updateNotificationEmailStatus(
      user.id,
      { notificationEmail: Boolean(notificationEmailStatus.notificationEmail === true) ? false : true },
    ));
  };

  return (
    <NotificationComponent
      isNotificationChangePending={isRequestPending(state.notificationChange)}
      isNotificationStatusPending={isRequestPending(state.notificationStatus)}
      notificationEmailStatus={notificationEmailStatus.notificationEmail}
      updateNotificationEmailStatusHandler={updateNotificationEmailStatusHandler}
      pageLoading={pageLoading}
      isAuth={isAuth}
    />
  );
}
