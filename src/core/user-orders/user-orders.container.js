import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { fetchUserOrders } from './user-orders.action';
import { UserOrdersComponent } from './user-orders.component';
import { USER_ORDERS_STORE_NAME } from './user-orders.constant';

export function UserOrdersContainer() {
  const dispatch = useDispatch();
  const { userOrdersState, pageLoading } = useSelector((state) => ({
    userOrdersState: state[USER_ORDERS_STORE_NAME].userOrders,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, []);

  return (
    <UserOrdersComponent
      isPending={isRequestPending(userOrdersState)}
      isError={isRequestError(userOrdersState)}
      isSuccess={isRequestSuccess(userOrdersState)}
      errorMessage={getRequestErrorMessage(userOrdersState)}
      pageLoading={pageLoading}
      headersTable={headersTable}
      products={getRequestData(userOrdersState, {}).userOrders}
      fetchData={() => dispatch(fetchUserOrders(userOrdersState.data.currentPage))}
      hasMore={Number(userOrdersState.data.userOrders.length) < Number(userOrdersState.data.totalRecords)}
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
