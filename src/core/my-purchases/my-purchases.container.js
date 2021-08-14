import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { myPurchasesUploadData } from './my-purchases.action';
import { MY_PURCHASES_STORE_NAME } from './my-purchases.constant';
import { MyPurchasesComponent } from './my-purchases.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyPurchasesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_PURCHASES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(myPurchasesUploadData());
  // }, []);

  return (
    <MyPurchasesComponent
      isPending={isRequestPending(state.myPurchases)}
      isError={isRequestError(state.myPurchases)}
      isSuccess={isRequestSuccess(state.myPurchases)}
      errorMessage={getRequestErrorMessage(state.myPurchases)}
      pageLoading={pageLoading}
    />
  );
}
