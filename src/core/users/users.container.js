import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { usersLoadData } from './users.action';
import { UsersComponent } from './users.component';
import { USERS_STORE_NAME } from './users.constant';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function UsersContainer() {
  const dispatch = useDispatch();
  const { usersState, pageLoading } = useSelector((state) => ({
    usersState: state[USERS_STORE_NAME].users,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(usersLoadData());
  }, []);

  return (
    <UsersComponent
      isPending={isRequestPending(usersState)}
      isError={isRequestError(usersState)}
      isSuccess={isRequestSuccess(usersState)}
      errorMessage={getRequestErrorMessage(usersState)}
      users={getRequestData(usersState, [])}
      pageLoading={pageLoading}
    />
  );
}
