import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { orderNumberUploadData } from './order-number.action';
import { ORDER_NUMBER_STORE_NAME } from './order-number.constant';
import { OrderNumberComponent } from './order-number.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function OrderNumberContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ORDER_NUMBER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(orderNumberUploadData());
  // }, []);

  return (
    <OrderNumberComponent
      isPending={isRequestPending(state.orders)}
      isError={isRequestError(state.orders)}
      isSuccess={isRequestSuccess(state.orders)}
      errorMessage={getRequestErrorMessage(state.orders)}
      pageLoading={pageLoading}
    />
  );
}
