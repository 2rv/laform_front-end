import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { getQuery } from 'src/main/navigation';
import { ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';
import { AboutAccountComponent } from './about-account.component';
import { userLoadData } from './about-account.action';

export function AboutAccountContainer() {
  const userId = getQuery('id');
  const dispatch = useDispatch();
  const { userData, pageLoading } = useSelector((state) => ({
    userData: state[ABOUT_ACCOUNT_STORE_NAME].data,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    if (userId) {
      dispatch(userLoadData(userId));
    }
  }, []);

  return (
    <AboutAccountComponent
      isPending={isRequestPending(userData)}
      userData={getRequestData(userData, {})}
      pageLoading={pageLoading}
    />
  );
}
