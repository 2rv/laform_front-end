import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import { TableItemData } from 'src/lib/common/block-table';

export enum USER_ORDERS_ACTION_TYPE {
  RESET = 'RESET',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type UserOrdersActionType = {
  type: USER_ORDERS_ACTION_TYPE;
  error?: string;
  orders?: TableItemData[];
  total?: number;
};
export type UserOrdersStateType = {
  total: number;
  page: number;

  pending: boolean;
  error?: string;
  orders: TableItemData[];
};

export type UserOrdersComponentProps = {
  state: UserOrdersStateType;
  onPagination: () => void;
  onFilter: (val: UserOrdersFilterValues) => void;
};
export type QueryType = {
  page: number;
  orderNumber?: string;
  status?: keyof typeof PURCHASE_STATUS_INFO;
  from: Date;
  to: Date;
};
export interface UserOrdersFilterValues extends SearchBlockFilterValues {
  from?: Date;
  to?: Date;
}
