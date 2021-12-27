import { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { StatisticsComponent } from './statistics.component';
import { getQuery } from 'src/main/navigation';
import {
  QueryType,
  StatisticsActionType,
  StatisticsStateType,
  STATISTICS_ACTION_TYPE,
  STATISTICS_TYPE,
} from './statistics.type';
import { getStatisticsAction } from './statistics.action';

const initialState = {
  pending: false,
  error: '',
  priceData: undefined,
  countData: undefined,
  usersData: undefined,
  generalData: undefined,
};

function statisticsReducer(
  state: StatisticsStateType,
  action: StatisticsActionType,
) {
  switch (action.type) {
    case STATISTICS_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case STATISTICS_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        priceData: action.priceData,
        countData: action.countData,
        usersData: action.usersData,
        generalData: action.generalData,
      };
    case STATISTICS_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function StatisticsContainer() {
  const path: any = getQuery('type');
  const activePath: keyof typeof STATISTICS_TYPE = path?.[0] || 'undefined';
  const [state, setState] = useReducer(statisticsReducer, initialState);
  const [range, setRange] = useState<{ from: Date; to: Date }>();

  useEffect(() => {
    if (range?.to && range?.from) {
      const query: QueryType = {
        from: range.from,
        to: range.to,
        type: STATISTICS_TYPE[activePath],
      };
      getStatisticsAction(query)(setState);
    }
  }, [activePath, range]);

  return (
    <StatisticsComponent
      activePath={activePath}
      setRange={setRange}
      state={state}
    />
  );
}
