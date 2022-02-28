import { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { getQuery } from 'src/main/navigation';
import { getProductsAction, paginateProductsAction } from './patterns.action';
import { PatternsComponent } from './patterns.component';
import {
  PatternsActionType,
  PatternsStateType,
  PATTERNS_ACTION_TYPE,
} from './patterns.type';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';

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

function PatternsReducer(state: PatternsStateType, action: PatternsActionType) {
  switch (action.type) {
    case PATTERNS_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case PATTERNS_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case PATTERNS_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case PATTERNS_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case PATTERNS_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case PATTERNS_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case PATTERNS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function PatternsContainer() {
  const activePath = getQuery('type')?.[0];
  const [state, setState] = useReducer(PatternsReducer, initialState);
  const [query, setQuery] = useState<SearchBlockFilterValues>();
  const { lang, isAuth } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const onFilter = (props: SearchBlockFilterValues) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };
  useEffect(() => {
    getProductsAction({
      type: activePath,
      lang: lang,
      isAuth: isAuth,
      ...query,
    })(setState);
  }, [activePath, query, lang]);

  const onPagination = () => {
    paginateProductsAction({
      type: activePath,
      lang: lang,
      isAuth: isAuth,
      page: state.page,
      ...query,
    })(setState);
  };

  return (
    <PatternsComponent
      state={state}
      activePath={activePath}
      onFilter={onFilter}
      onPagination={onPagination}
      filterOptions={filterOptions}
    />
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'OTHER.FILTER.ALL',
  },
  {
    id: 1,
    tid: 'OTHER.FILTER.FROM_A_TO_Z',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'OTHER.FILTER.FROM_Z_TO_A',
    sort: 'title',
    by: 'DESC',
  },
  {
    id: 3,
    tid: 'OTHER.FILTER.BY_POPULARITY',
    sort: 'clicks',
    by: 'DESC',
  },
];
