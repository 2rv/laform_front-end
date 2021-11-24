import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ordersLoadData } from './orders.action';
import { OrdersComponent } from './orders.component';
import { ORDERS_STORE_NAME } from './orders.constant';
import { ORDERS_ACTION_TYPE } from './orders.type';

export function OrdersContainer() {
  const dispatch = useDispatch();
  const { ordersState, pageLoading } = useSelector((state) => ({
    ordersState: state[ORDERS_STORE_NAME].orders,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch({ type: ORDERS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(ordersLoadData());
  }, []);

  return (
    <OrdersComponent
      isPending={isRequestPending(ordersState)}
      isError={isRequestError(ordersState)}
      isSuccess={isRequestSuccess(ordersState)}
      errorMessage={getRequestErrorMessage(ordersState)}
      pageLoading={pageLoading}
      headersTable={headersTable}
      products={getRequestData(ordersState, {}).orders}
      fetchData={() => dispatch(ordersLoadData(ordersState.data.currentPage))}
      hasMore={
        Number(ordersState.data?.orders?.length) <
        Number(ordersState.data?.totalRecords)
      }
    />
  );
}

const headersTable = [
  'ORDERS.TABLE.HEADER.ORDER',
  'ORDERS.TABLE.HEADER.DETAILS',
  'ORDERS.TABLE.HEADER.DELIVERY_DATA',
  'ORDERS.TABLE.HEADER.TOTAL',
  'ORDERS.TABLE.HEADER.STATE',
];
