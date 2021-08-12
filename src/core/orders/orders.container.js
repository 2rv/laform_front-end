import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ordersUploadData } from './orders.action';
import { OrdersComponent } from './orders.component';
import {
  ORDERS_TEST_ITEMS,
  ORDERS_TEST_SUB_MENU_ITEMS,
  ORDERS_STORE_NAME,
} from './orders.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function OrdersContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[ORDERS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(ordersUploadData());
  // }, []);

  return (
    <OrdersComponent
      isPending={isRequestPending(state.orders)}
      isError={isRequestError(state.orders)}
      isSuccess={isRequestSuccess(state.orders)}
      errorMessage={getRequestErrorMessage(state.orders)}
      pageLoading={pageLoading}
      activePath={activePath}
      subMenu={ORDERS_TEST_SUB_MENU_ITEMS}
      ordersData={ORDERS_TEST_ITEMS}
    />
  );
}
