import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { getQuery } from 'src/main/navigation';
import { ProductsLikeComponent } from './products-like.component';
import {
  getProductsAction,
  paginateProductsAction,
} from './products-like.action';
import {
  PRODUCTS_LIKE_TAB_TYPES,
  PRODUCTS_LIKE_ACTION_TYPE,
  ProductsLikeStateType,
  ProductsLikeActionType,
} from './products-like.type';

const initialState = {
  getPending: false,
  getError: '',

  paginatePending: false,
  paginateError: '',

  disablePending: false,
  disableError: '',

  categories: [],
  products: [],

  total: 0,
  page: 1,
};

function ProductsLikeReducer(
  state: ProductsLikeStateType,
  action: ProductsLikeActionType,
) {
  switch (action.type) {
    case PRODUCTS_LIKE_ACTION_TYPE.RESET:
      return initialState;

    case PRODUCTS_LIKE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case PRODUCTS_LIKE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case PRODUCTS_LIKE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case PRODUCTS_LIKE_ACTION_TYPE.RELIKE:
      return {
        ...state,
        disablePending: false,
        products: state.products.filter((product) => product.id !== action.id),
        total: state.total - 1,
      };

    default:
      return state;
  }
}

export function ProductsLikeContainer() {
  const activePath: any = (getQuery('type') || PRODUCTS_LIKE_TAB_TYPES)[0];

  const { lang } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));
  const [state, setState] = useReducer(ProductsLikeReducer, initialState);
  const [query, setQuery] = useState<SearchBlockFilterValues>();

  useEffect(() => {
    getProductsAction(activePath, { lang, ...query })(setState);
  }, [activePath, lang, query]);

  const onPagination = () => {
    paginateProductsAction(activePath, { lang, page: state.page, ...query })(
      setState,
    );
  };
  const onFilter = (props: SearchBlockFilterValues) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };
  const onRemoveLike = (id: string) => {
    setState({ type: PRODUCTS_LIKE_ACTION_TYPE.RELIKE, id: id });
  };

  return (
    <ProductsLikeComponent
      state={state}
      activePath={activePath}
      onFilter={onFilter}
      onPagination={onPagination}
      onRemoveLike={onRemoveLike}
      filterOptions={filterOptions}
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
