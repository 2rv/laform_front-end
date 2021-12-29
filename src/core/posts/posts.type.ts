import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';
import { CardArticleType } from 'src/lib/element/card';

export enum POSTS_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type PostsStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories: CategoryOptionType[];
  products: CardArticleType[];
  total: number;
  page: number;
};
export type PostsActionType = {
  type: POSTS_ACTION_TYPE;
  error?: string;
  products?: CardArticleType[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type PostsComponentProps = {
  state: PostsStateType;
  onFilter: SearchBlockHandleFilterType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
};
