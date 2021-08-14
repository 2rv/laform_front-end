import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { aboutAccountUploadData } from './about-account.action';
import { AboutAccountComponent } from './about-account.component';
import { ABOUT_ACCOUNT_TEST_ITEMS, ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AboutAccountContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ABOUT_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(aboutAccountUploadData());
  // }, []);

  return (
    <AboutAccountComponent
      isPending={isRequestPending(state.aboutAccount)}
      isError={isRequestError(state.aboutAccount)}
      isSuccess={isRequestSuccess(state.aboutAccount)}
      errorMessage={getRequestErrorMessage(state.aboutAccount)}
      pageLoading={pageLoading}
      activityData={ABOUT_ACCOUNT_TEST_ITEMS}
    />
  );
}
