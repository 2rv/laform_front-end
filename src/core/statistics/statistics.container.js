import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { getQuery } from 'src/main/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { STATISTICS_STORE_NAME } from './statistics.constant';
import { StatisticstComponent } from './statistics.component';
import {
  getCountStatistics,
  getPriceStatistics,
  getGeneralStatistics,
  getUsersStatistics,
} from './statistics.action';
import { defaultData } from 'src/lib/common/block-chart/chart';

export function StatisticstContainer() {
  const activeTab = getQuery('type');
  const dispatch = useDispatch();
  const { generalState, priceState, countState, usersState, pageLoading } =
    useSelector((state) => ({
      generalState: state[STATISTICS_STORE_NAME].general,
      priceState: state[STATISTICS_STORE_NAME].price,
      countState: state[STATISTICS_STORE_NAME].count,
      usersState: state[STATISTICS_STORE_NAME].users,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }));
  //   const today = new Date();
  //   const to = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString();
  const from = new Date(2021, 1, 1).toISOString();
  const to = new Date(2022, 1, 1).toISOString();

  useEffect(() => {
    dispatch(getUsersStatistics({ from, to }));
    dispatch(getGeneralStatistics({ from, to, type: activeTab }));
    dispatch(getCountStatistics({ from, to, type: activeTab }));
    dispatch(getPriceStatistics({ from, to, type: activeTab }));
  }, [activeTab]);

  return (
    <StatisticstComponent
      activeTab={activeTab}
      pending={isRequestPending(
        generalState || priceState || countState || usersState,
      )}
      pageLoading={pageLoading}
      error={isRequestError(
        generalState || priceState || countState || usersState,
      )}
      errorMessage={getRequestErrorMessage(
        generalState || priceState || countState || usersState,
      )}
      general={getRequestData(generalState)}
      price={getRequestData(priceState, defaultData)}
      count={getRequestData(countState, defaultData)}
      users={getRequestData(usersState, defaultData)}
    />
  );
}
