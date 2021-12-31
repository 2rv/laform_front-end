import { CardMultiType, CardProductLinkType } from 'src/lib/element/card';
import {
  SortOptionType,
  CategoryOptionType,
  SearchBlockHandleFilterType,
} from '../block-search';

export type RecomendationContainerProps = {
  value: CardProductLinkType[];
  name: string;
  setFieldValue: (name: string, value: CardProductLinkType[]) => void;
};
export type RecommendationComponentProps = {
  value: CardProductLinkType[];
  state: RecommendationStateType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
  onFilter: SearchBlockHandleFilterType;
  typeHandler: [number, (val: number) => void];
  onSelect: (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => boolean;
  onRemove: (id: string) => void;
};
export type RecommendationListProps = {
  value: CardProductLinkType[];
  onSelect: (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => boolean;
};

export enum RECOMENDATION_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  PAGINATE_PENDING = 'PAGINATE_PENDING',
  PAGINATE_SUCCESS = 'PAGINATE_SUCCESS',
  PAGINATE_ERROR = 'PAGINATE_ERROR',
}
export type RecommendationStateType = {
  getPending: boolean;
  getError?: string;

  paginatePending: boolean;
  paginateError?: string;

  categories?: CategoryOptionType[];
  products: CardMultiType[] | [];
  total: number;
  page: number;
};
export type RecommendationActionType = {
  type: RECOMENDATION_ACTION_TYPE;
  error?: string;
  products?: CardMultiType[];
  categories?: CategoryOptionType[];
  total?: number;
};
export type RecommendationType = {
  id?: string;
  recommendationProducts: CardProductLinkType[];
};
