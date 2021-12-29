import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';
import { CardMasterClassType } from 'src/lib/element/card';

export enum MASTER_CLASSES_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type MasterClassesStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories: CategoryOptionType[];
  products: CardMasterClassType[];
  total: number;
  page: number;
};
export type MasterClassesActionType = {
  type: MASTER_CLASSES_ACTION_TYPE;
  error?: string;
  products?: CardMasterClassType[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type MasterClassesComponentProps = {
  state: MasterClassesStateType;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
};
