import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  GeneralStatsType,
  QueryType,
  StatisticsActionType,
  STATISTICS_ACTION_TYPE,
} from './statistics.type';
import { convertUsers, convertCount, convertPrice } from './statistics.convert';
import { ChartDataType } from 'src/lib/common/block-chart';

async function getPriceStatistics(query: QueryType): Promise<ChartDataType> {
  const response = await httpRequest({
    method: 'GET',
    url: '/statistics/price/get',
    params: {
      from: query.from,
      to: query.to,
      type: query.type,
    },
  });
  return convertPrice(response.data);
}
async function getCountStatistics(query: QueryType): Promise<ChartDataType> {
  const response = await httpRequest({
    method: 'GET',
    url: '/statistics/count/get',
    params: {
      from: query.from,
      to: query.to,
      type: query.type,
    },
  });
  return convertCount(response.data);
}
async function getUsersStatistics(query: QueryType): Promise<ChartDataType> {
  const response = await httpRequest({
    method: 'GET',
    url: '/statistics/user/get',
    params: {
      from: query.from,
      to: query.to,
      type: query.type,
    },
  });
  return convertUsers(response.data);
}
async function getGeneralStatistics(
  query: QueryType,
): Promise<GeneralStatsType> {
  const response = await httpRequest({
    method: 'GET',
    url: '/statistics/general/get',
    params: {
      from: query.from,
      to: query.to,
      type: query.type,
    },
  });
  return response.data;
}

export function getStatisticsAction(query: QueryType) {
  return async (dispatch: Dispatch<StatisticsActionType>) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.PENDING,
    });

    try {
      const priceData = await getPriceStatistics(query);
      const countData = await getCountStatistics(query);
      const usersData = await getUsersStatistics(query);
      const generalData = await getGeneralStatistics(query);

      dispatch({
        type: STATISTICS_ACTION_TYPE.SUCCESS,
        generalData,
        usersData,
        countData,
        priceData,
      });
    } catch (err: any) {
      console.log(err);

      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
