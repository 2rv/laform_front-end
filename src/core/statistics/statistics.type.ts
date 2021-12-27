import { ChartDataType } from 'src/lib/common/block-chart';

export type QueryType = {
  from: Date;
  to: Date;
  type: 0 | 1 | 2 | 3 | 4 | 9;
};

export enum STATISTICS_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type StatisticsStateType = {
  pending: boolean;
  error?: string;
  priceData?: ChartDataType;
  countData?: ChartDataType;
  usersData?: ChartDataType;
  generalData?: GeneralStatsType;
};
export type StatisticsActionType = {
  type: STATISTICS_ACTION_TYPE;
  error?: string;
  priceData?: ChartDataType;
  countData?: ChartDataType;
  usersData?: ChartDataType;
  generalData?: GeneralStatsType;
};
export enum STATISTICS_TYPE {
  'master-class' = 0,
  'pattern-electronic' = 1,
  'pattern-print' = 2,
  'sewing-good' = 3,
  'undefined' = 9,
}
export type StatisticsComponentProps = {
  activePath: keyof typeof STATISTICS_TYPE;
  setRange: (val: { from: Date; to: Date }) => void;
  state: StatisticsStateType;
};

export type StatsCardProps = {
  title: string;
  value: number;
  valutTid: string;
};
export type TotalStatsProps = {
  general?: GeneralStatsType;
  activePath: boolean;
};
export type GeneralStatsType = {
  totalCount: number;
  totalOrders: number;
  printCount: number;
  electronicCount: number;
  totalPrice: number;
  averagePrice: number;
};
export type BasicStatisticsPrice = {
  date: Date;
  price: number;
};
export type BasicStatisticsCount = {
  date: Date;
  count: number;
};
export type BasicStatisticsUsers = {
  date: Date;
  users: number;
};
