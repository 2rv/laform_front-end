import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';

export enum PRODUCTS_LIST_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  DISABLE_PENDING = 'DISABLE_PENDING',
  DISABLE_SUCCESS = 'DISABLE_SUCCESS',
  DISABLE_ERROR = 'DISABLE_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type ProductsListStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  disablePending: boolean;
  disableError?: string;

  categories: CategoryOptionType[];
  products: any[];
  total: number;
  page: number;
};
export type ProductsListActionType = {
  type: PRODUCTS_LIST_ACTION_TYPE;
  error?: string;
  id?: string;
  deleted?: boolean;
  products?: any[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type ProductsListComponentProps = {
  state: ProductsListStateType;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
  activePath: string;
  isAdmin: boolean;
  onDisable: (id: string, deleted: boolean) => void;
};
export enum PRODUCTS_LIST_TAB_TYPES {
  'master-class',
  'pattern-electronic',
  'pattern-print',
  'sewing-good',
  'blog',
}
