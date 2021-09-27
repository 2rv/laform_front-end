import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';
import { AboutAccountComponent } from './about-account.component';

import {
  userLoadData,
  purchasesLoadData,
  likesLoadData,
  commentsLoadData,
} from './about-account.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from 'src/main/navigation';

export function AboutAccountContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ABOUT_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const userId = getQuery('id');

  useEffect(() => {
    dispatch(userLoadData(userId));
  }, []);

  return (
    <AboutAccountComponent
      isPending={isRequestPending(state.user)}
      user={getRequestData(state.user)}
      pageLoading={pageLoading}
    />
  );
}
