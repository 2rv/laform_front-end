import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';
import { CardSewingGoodType } from 'src/lib/element/card';

export enum SEWING_GOODS_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type SewingGoodsStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories: CategoryOptionType[];
  products: CardSewingGoodType[];
  total: number;
  page: number;
};
export type SewingGoodsActionType = {
  type: SEWING_GOODS_ACTION_TYPE;
  error?: string;
  products?: CardSewingGoodType[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type SewingGoodsComponentProps = {
  state: SewingGoodsStateType;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
};
