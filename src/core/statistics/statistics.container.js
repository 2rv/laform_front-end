import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { getQuery } from 'src/main/navigation';
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
  const [value, setValue] = useState(0);
  function onChange(e) {
    setValue(e.currentTarget.value);
  }

  useEffect(() => {
    const period = {
      from: new Date(),
      to: new Date(),
    };
    period.from.setDate(period.from.getDate() - options[+value].value);
    dispatch(getUsersStatistics({ ...period }));
    dispatch(getGeneralStatistics({ ...period, type: activeTab }));
    dispatch(getCountStatistics({ ...period, type: activeTab }));
    dispatch(getPriceStatistics({ ...period, type: activeTab }));
  }, [activeTab, value]);

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
      onChange={onChange}
      value={value}
      options={options}
    />
  );
}
const options = [
  {
    id: 0,
    tid: 'День',
    value: 1,
  },
  {
    id: 1,
    tid: 'Неделя',
    value: 7,
  },
  {
    id: 2,
    tid: '2 Недели',
    value: 14,
  },
  {
    id: 3,
    tid: 'Месяц',
    value: 30,
  },
  {
    id: 4,
    tid: 'Квартал',
    value: 90,
  },
  {
    id: 5,
    tid: 'Пол года',
    value: 182,
  },
  {
    id: 6,
    tid: 'Год',
    value: 365,
  },
  {
    id: 7,
    tid: 'Всё время',
    value: 7300,
  },
];
