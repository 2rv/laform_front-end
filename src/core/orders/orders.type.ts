import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import { TableItemData } from 'src/lib/common/block-table';

export enum ORDERS_ACTION_TYPE {
  RESET = 'RESET',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type OrdersActionType = {
  type: ORDERS_ACTION_TYPE;
  error?: string;
  orders?: TableItemData[];
  total?: number;
};
export type OrdersStateType = {
  total: number;
  page: number;

  pending: boolean;
  error?: string;
  orders: TableItemData[];
};

export type OrdersComponentProps = {
  state: OrdersStateType;
  onPagination: () => void;
  onFilter: (val: OrdersFilterValues) => void;
};
export type QueryType = {
  page: number;
  orderNumber?: string;
  status?: keyof typeof PURCHASE_STATUS_INFO;
  from: Date;
  to: Date;
};
export interface OrdersFilterValues extends SearchBlockFilterValues {
  from?: Date;
  to?: Date;
}
