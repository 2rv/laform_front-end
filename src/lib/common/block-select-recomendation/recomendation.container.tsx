import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchBlockFilterValues } from '../block-search';
import { LANG_STORE_NAME } from '../lang';
import {
  getProductsByType,
  paginateProductsByType,
} from './recomendation.action';
import { RecommendationComponent } from './recomendation.component';
import {
  RecomendationContainerProps,
  RECOMENDATION_ACTION_TYPE,
  RecommendationActionType,
  RecommendationStateType,
} from './recomendation.type';

const initialState = {
  getPending: false,
  getError: '',

  paginatePending: false,
  paginateError: '',

  categories: [],
  products: [],

  total: 0,
  page: 1,
};

function RecommendationReducer(
  state: RecommendationStateType,
  action: RecommendationActionType,
) {
  switch (action.type) {
    case RECOMENDATION_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case RECOMENDATION_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
      };
    case RECOMENDATION_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case RECOMENDATION_ACTION_TYPE.PAGINATE_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case RECOMENDATION_ACTION_TYPE.PAGINATE_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case RECOMENDATION_ACTION_TYPE.PAGINATE_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case RECOMENDATION_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function RecomendationContainer(props: RecomendationContainerProps) {
  const { value, name, setFieldValue } = props;
  const [state, setState] = useReducer(RecommendationReducer, initialState);

  const { lang } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const typeHandler = useState<any>(0);
  const [type] = typeHandler;
  const [query, setQuery] = useState<SearchBlockFilterValues>();

  useEffect(() => {
    getProductsByType({ type, lang, ...query })(setState);
  }, [type, query, lang]);

  const onFilter = (props: SearchBlockFilterValues) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };

  const onPagination = () => {
    paginateProductsByType(state.page, { type, lang, ...query })(setState);
  };

  const onSelect = (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => {
    if (status) {
      if (value.length >= 3 && status) {
        alert('Максимум 3 рекомендации');
        return false;
      }
      const isExist = value.find((item) => {
        if (type === 0) return item.masterClassId?.id === id;
        if (type === 1) return item.patternProductId?.id === id;
        if (type === 2) return item.patternProductId?.id === id;
        if (type === 3) return item.sewingProductId?.id === id;
        if (type === 4) return item.postId?.id === id;
      });
      if (isExist) return true;
      const product = state.products.find((item) => {
        if (item?.type === 0) return item?.id === id;
        if (item?.type === 1) return item?.id === id;
        if (item?.type === 2) return item?.id === id;
        if (item?.type === 3) return item?.id === id;
        if (item?.type === 4) return item?.id === id;
      });
      if (!product) return false;

      const recommend: any = {};

      if (type === 0) {
        recommend.masterClassId = product;
      }
      if (type === 1 || type === 2) {
        recommend.patternProductId = product;
      }
      if (type === 3) {
        recommend.sewingProductId = product;
      }
      if (type === 4) {
        recommend.postId = product;
      }

      value.push(recommend);
      setFieldValue(name, value);
    } else onRemove(id);
    return true;
  };

  const onRemove = (id: string) => {
    const result = value.filter((item) => {
      if (item.masterClassId) return item.masterClassId.id !== id;
      if (item.patternProductId) return item.patternProductId.id !== id;
      if (item.sewingProductId) return item.sewingProductId.id !== id;
      if (item.postId) return item.postId.id !== id;
      return true;
    });
    setFieldValue(name, result);
  };

  return (
    <RecommendationComponent
      state={state}
      value={value}
      onSelect={onSelect}
      onRemove={onRemove}
      onFilter={onFilter}
      onPagination={onPagination}
      filterOptions={filterOptions}
      typeHandler={typeHandler}
    />
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'OTHER.CATEGORY_FILTER.ALL',
  },
  {
    id: 1,
    tid: 'OTHER.CATEGORY_FILTER.FROM_A_TO_Z',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'OTHER.CATEGORY_FILTER.FROM_Z_TO_A',
    sort: 'title',
    by: 'DESC',
  },
  {
    id: 3,
    tid: 'По популярности',
    sort: 'clicks',
    by: 'DESC',
  },
];
