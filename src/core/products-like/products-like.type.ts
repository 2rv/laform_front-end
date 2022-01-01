import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';
import { CardMultiType } from 'src/lib/element/card';

export enum PRODUCTS_LIKE_TAB_TYPES {
  'master-class',
  'pattern-electronic',
  'pattern-print',
  'sewing-good',
  'blog',
}
export enum PRODUCTS_LIKE_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',

  RELIKE = 'RELIKE',
}
export type ProductsLikeStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories: CategoryOptionType[];
  products: CardMultiType[];
  total: number;
  page: number;
};
export type ProductsLikeActionType = {
  type: PRODUCTS_LIKE_ACTION_TYPE;
  error?: string;
  products?: CardMultiType[];
  categories?: CategoryOptionType[];
  total?: number;
  id?: string;
};
export type ProductsLikeComponentProps = {
  state: ProductsLikeStateType;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  onRemoveLike: (id: string) => void;
  filterOptions: SortOptionType[];
  activePath: string;
};
