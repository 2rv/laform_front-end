import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import { TableItemType } from 'src/lib/common/block-table/table.type';

export enum USER_ORDERS_ACTION_TYPE {
  RESET = 'RESET',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type UserOrdersActionType = {
  type: USER_ORDERS_ACTION_TYPE;
  error?: string;
  orders?: TableItemType[];
  total?: number;
};
export type UserOrdersStateType = {
  total: number;
  page: number;

  pending: boolean;
  error?: string;
  orders: TableItemType[];
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
