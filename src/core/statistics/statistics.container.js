import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { STATISTICS_STORE_NAME } from './statistics.constant';
import { StatisticstComponent } from './statistics.component';
import { LoadDataAction } from './statistics.action';
import { getQuery } from 'src/main/navigation';

export function StatisticstContainer() {
  const activeTab = getQuery('type');
  const dispatch = useDispatch();
  const { statistics, pageLoading } = useSelector((state) => ({
    statistics: state[STATISTICS_STORE_NAME].statistics,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => dispatch(LoadDataAction()), []);

  return (
    <StatisticstComponent
      activeTab={activeTab}
      pending={isRequestPending(statistics)}
      success={isRequestSuccess(statistics)}
      error={isRequestError(statistics)}
      errorMessage={getRequestErrorMessage(statistics)}
      statistics={getRequestData(statistics)}
      pageLoading={pageLoading}
    />
  );
}
