import { BasicFileType } from 'src/lib/basic-types';
import { CardMultiType } from 'src/lib/element/card';
import {
  SortOptionType,
  CategoryOptionType,
  SearchBlockHandleFilterType,
} from '../block-search';

export type RecommendationType = {
  id?: string;
  recommendationProducts: RecommendationProducType[];
};
export type RecommendationProducType = {
  id?: string;
  masterClassId?: {
    id: string;
    images: BasicFileType[];
    titleRu: string;
    type: 0;
  };
  patternProductId?: {
    id: string;
    images: BasicFileType[];
    titleRu: string;
    type: 1 | 2;
  };
  sewingProductId?: {
    id: string;
    images: BasicFileType[];
    titleRu: string;
    type: 3;
  };
  postId?: { id: string; image: BasicFileType; titleRu: string; type: 4 };
};

export interface RecomendationContainerProps {
  values: RecommendationType;
  name: string;
  setFieldValue: (name: string, value: RecommendationType) => void;
}
export interface RecommendationComponentProps {
  values: RecommendationType;
  state: RecommendationStateType;
  onPagination: () => void;
  filterOptions: SortOptionType[];
  onFilter: SearchBlockHandleFilterType;
  typeHandler: [number, (val: number) => void];
  handleChange: (
    id: string,
    type: 0 | 1 | 2 | 3 | 4,
    status: boolean,
  ) => boolean;
}
export interface RecommendationListProps {
  handleChange: (
    id: string,
    type: 0 | 1 | 2 | 3 | 4,
    status: boolean,
  ) => boolean;
  values: RecommendationType;
}

export type prodResType = {
  data: CardMultiType[];
  total: number;
};
export type QueryType = {
  lang: string;
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
  page?: number;
  type: number;
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
