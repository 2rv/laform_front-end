import { ChangeEvent } from 'react';
import { CardMultiType } from 'src/lib/element/card';

export type prodResType = {
  data: CardMultiType[];
  total: number;
};
export type QueryType = {
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
  page?: number;
  type: number;
};
export enum PRODUCT_SEARCH_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATE_PENDING = 'PAGINATE_PENDING',
  PAGINATE_SUCCESS = 'PAGINATE_SUCCESS',
  PAGINATE_ERROR = 'PAGINATE_ERROR',
}
export type ProductSearchActionType = {
  type: PRODUCT_SEARCH_ACTION_TYPE;
  error?: string;
  products?: CardMultiType[];
  total?: number;
};
export type ProductSearcStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  products: CardMultiType[] | [];
  total: number;
  page: number;
};
export interface ProductSearchComponentProps {
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  state: ProductSearcStateType;
  onPagination: () => void;
  onFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  where: string;
}
