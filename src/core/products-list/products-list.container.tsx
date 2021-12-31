import { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';

import { ProductsListComponent } from './products-list.component';
import {
  ProductsListActionType,
  ProductsListStateType,
  PRODUCTS_LIST_ACTION_TYPE,
  PRODUCTS_LIST_TAB_TYPES,
} from './products-list.type';
import {
  disableProductAction,
  getProductsAction,
  paginateProductsAction,
} from './products-list.action';

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

function ProductsListReducer(
  state: ProductsListStateType,
  action: ProductsListActionType,
) {
  switch (action.type) {
    case PRODUCTS_LIST_ACTION_TYPE.RESET:
      return initialState;

    case PRODUCTS_LIST_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case PRODUCTS_LIST_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case PRODUCTS_LIST_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case PRODUCTS_LIST_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case PRODUCTS_LIST_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case PRODUCTS_LIST_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case PRODUCTS_LIST_ACTION_TYPE.DISABLE_PENDING:
      return {
        ...state,
        disablePending: true,
        disableError: '',
      };
    case PRODUCTS_LIST_ACTION_TYPE.DISABLE_SUCCESS:
      return {
        ...state,
        disablePending: false,
        products: state.products.map((product) => {
          if (product.id === action.id) {
            product.deleted = action.deleted;
          }
          return product;
        }),
      };
    case PRODUCTS_LIST_ACTION_TYPE.DISABLE_ERROR:
      return {
        ...state,
        disablePending: false,
        disableError: action.error,
      };

    default:
      return state;
  }
}

export function ProductsListContainer() {
  const activePath: any = (getQuery('type') || PRODUCTS_LIST_TAB_TYPES)[0];

  const { lang, isAdmin } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAdmin: state[AUTH_STORE_NAME].user?.role === USER_ROLE.ADMIN,
  }));

  const [state, setState] = useReducer(ProductsListReducer, initialState);
  const [query, setQuery] = useState<SearchBlockFilterValues>();

  useEffect(() => {
    getProductsAction(activePath, { lang, ...query })(setState);
  }, [activePath, lang, query]);

  const onPagination = () => {
    paginateProductsAction(activePath, { lang, page: state.page, ...query })(
      setState,
    );
  };
  const onDisable = (id: string, deleted: boolean) => {
    disableProductAction(activePath, id, deleted)(setState);
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

  return (
    <ProductsListComponent
      state={state}
      activePath={activePath}
      isAdmin={isAdmin}
      onFilter={onFilter}
      onPagination={onPagination}
      onDisable={onDisable}
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
