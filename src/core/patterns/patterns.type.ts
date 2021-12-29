import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';
import { CardPatternType } from 'src/lib/element/card';

export enum PATTERNS_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type PatternsStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories: CategoryOptionType[];
  products: CardPatternType[];
  total: number;
  page: number;
};
export type PatternsActionType = {
  type: PATTERNS_ACTION_TYPE;
  error?: string;
  products?: CardPatternType[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type PatternsComponentProps = {
  state: PatternsStateType;
  activePath: any;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
};
