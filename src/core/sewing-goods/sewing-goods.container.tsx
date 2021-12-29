import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getProductsAction,
  paginateProductsAction,
} from './sewing-goods.action';
import { SewingGoodsComponent } from './sewing-goods.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  SEWING_GOODS_ACTION_TYPE,
  SewingGoodsStateType,
  SewingGoodsActionType,
} from './sewing-goods.type';
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
function SewingGoodsReducer(
  state: SewingGoodsStateType,
  action: SewingGoodsActionType,
) {
  switch (action.type) {
    case SEWING_GOODS_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case SEWING_GOODS_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case SEWING_GOODS_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case SEWING_GOODS_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case SEWING_GOODS_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case SEWING_GOODS_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case SEWING_GOODS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function SewingGoodsContainer() {
  const [state, setState] = useReducer(SewingGoodsReducer, initialState);
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
      lang: lang,
      isAuth: isAuth,
      ...query,
    })(setState);
  }, [query, lang]);

  const onPagination = () => {
    paginateProductsAction({
      lang: lang,
      isAuth: isAuth,
      page: state.page,
      ...query,
    })(setState);
  };

  return (
    <SewingGoodsComponent
      state={state}
      onFilter={onFilter}
      onPagination={onPagination}
      filterOptions={filterOptions}
    />
  );
}
export const filterOptions = [
  {
    id: 0,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.ALL',
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
