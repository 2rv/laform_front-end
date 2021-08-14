import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { myPatternsUploadData } from './my-patterns.action';
import { MY_PATTERNS_STORE_NAME } from './my-patterns.constant';
import { MyPatternsComponent } from './my-patterns.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyPatternsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_PATTERNS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(myPatternsUploadData());
  // }, []);

  return (
    <MyPatternsComponent
      isPending={isRequestPending(state.myPatterns)}
      isError={isRequestError(state.myPatterns)}
      isSuccess={isRequestSuccess(state.myPatterns)}
      errorMessage={getRequestErrorMessage(state.myPatterns)}
      pageLoading={pageLoading}
    />
  );
}
