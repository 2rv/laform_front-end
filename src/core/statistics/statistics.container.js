import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { STATISTICS_STORE_NAME } from './statistics.constant';
import { StatisticstComponent } from './statistics.component';
import { fetchOrdersCount, fetchPrice } from './statistics.action';
import { getQuery } from 'src/main/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function StatisticstContainer() {
  const activeTab = getQuery('type');
  const dispatch = useDispatch();
  const { ordersCountState, priceState, pageLoading } = useSelector((state) => ({
    ordersCountState: state[STATISTICS_STORE_NAME].ordersCount,
    priceState: state[STATISTICS_STORE_NAME].price,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const today = new Date();
  const from = new Date(2021, 1, 1).toISOString();
  const to = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString();

  useEffect(() => {
    if (activeTab === null) {
      dispatch(fetchOrdersCount({ type: 9, from, to }));
      dispatch(fetchPrice({ type: 9, from, to }));
    } else if (activeTab === 'master-class') {
      dispatch(fetchOrdersCount({ type: 0, from, to }));
      dispatch(fetchPrice({ type: 0, from, to }));
    } else if (activeTab === 'pattern-electronic') {
      dispatch(fetchOrdersCount({ type: 1, from, to }));
      dispatch(fetchPrice({ type: 1, from, to }));
    } else if (activeTab === 'pattern-print') {
      dispatch(fetchOrdersCount({ type: 2, from, to }));
      dispatch(fetchPrice({ type: 2, from, to }));
    } else if (activeTab === 'sewing-good') {
      dispatch(fetchOrdersCount({ type: 3, from, to }));
      dispatch(fetchPrice({ type: 3, from, to }));
    }
  }, [activeTab]);

  return (
    <StatisticstComponent
      activeTab={activeTab}
      pending={isRequestPending(ordersCountState)}
      success={isRequestSuccess(ordersCountState)}
      error={isRequestError(ordersCountState)}
      errorMessage={getRequestErrorMessage(ordersCountState)}
      ordersCount={getRequestData(ordersCountState)}
      price={getRequestData(priceState)}
      statistics={getRequestData(ordersCountState)}
      pageLoading={pageLoading}
    />
  );
}
