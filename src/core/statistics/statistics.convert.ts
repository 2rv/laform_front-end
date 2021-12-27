import { ChartDataType } from 'src/lib/common/block-chart';
import {
  BasicStatisticsCount,
  BasicStatisticsPrice,
  BasicStatisticsUsers,
} from './statistics.type';

export const convertPrice = (data: BasicStatisticsPrice[]): ChartDataType => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Всего рублей Продано предметов',
        data: data.map((e) => e.price),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

export const convertCount = (data: BasicStatisticsCount[]): ChartDataType => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Продано предметов',
        data: data.map((e) => e.count),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

export const convertUsers = (data: BasicStatisticsUsers[]): ChartDataType => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Новых пользователей',
        data: data.map((e) => e.users),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};
