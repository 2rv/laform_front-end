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
import { useDebounce } from '../../lib/common/hooks';
import { ordersLoadData } from './orders.action';
import { OrdersComponent } from './orders.component';
import { ORDERS_STORE_NAME } from './orders.constant';

export function OrdersContainer() {
  const dispatch = useDispatch();
  const { ordersState, pageLoading } = useSelector((state) => ({
    ordersState: state[ORDERS_STORE_NAME].orders,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  // всё что выше оставить всё что ниже можно удалить по усмотрению делающего
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const debounce = useDebounce(inputValue, 500);
  const orders = getRequestData(ordersState);
  const itemsPerPage = 5;

  useEffect(() => {
    // dispatch(
    //   ordersLoadData(
    //     inputValue.toLowerCase().trim(),
    //     itemsPerPage,
    //     currentPage,
    //   ),
    // );
  }, [debounce, currentPage]);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <OrdersComponent
      isPending={isRequestPending(ordersState)}
      isError={isRequestError(ordersState)}
      isSuccess={isRequestSuccess(ordersState)}
      errorMessage={getRequestErrorMessage(ordersState)}
      pageLoading={pageLoading}
      headersTable={headersTable}
      // всё что выше оставить всё что ниже можно удалить по усмотрению делающего
      products={orders.purchases}
      totalPages={orders.totalPages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      onChange={onChange}
      inputValue={inputValue}
    />
  );
}

const headersTable = [
  'ORDERS.TABLE.HEADER.ORDER_NUMBER',
  'ORDERS.TABLE.HEADER.ORDER_DETAILS',
  'ORDERS.TABLE.HEADER.DELIVERY_DATA',
  'ORDERS.TABLE.HEADER.PRODUCT_PRICE',
  'ORDERS.TABLE.HEADER.STATE',
];
