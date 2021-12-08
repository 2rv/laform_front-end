import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { useState } from 'react';
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
import { getQuery } from 'src/main/navigation';

export function StatisticstContainer() {
  const activePath = getQuery('type')?.[0];
  const dispatch = useDispatch();
  const { generalState, priceState, countState, usersState, pageLoading } =
    useSelector((state) => ({
      generalState: state[STATISTICS_STORE_NAME].general,
      priceState: state[STATISTICS_STORE_NAME].price,
      countState: state[STATISTICS_STORE_NAME].count,
      usersState: state[STATISTICS_STORE_NAME].users,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }));
  const [value, setValue] = useState(0);
  function onChange(e) {
    setValue(e.currentTarget.value);
  }
  useEffect(() => {
    dispatch(getUsersStatistics({ value }));
    dispatch(getGeneralStatistics({ value, type: activePath }));
    dispatch(getCountStatistics({ value, type: activePath }));
    dispatch(getPriceStatistics({ value, type: activePath }));
  }, [activePath, value]);

  return (
    <StatisticstComponent
      activePath={activePath}
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
      onChange={onChange}
      value={value}
    />
  );
}
