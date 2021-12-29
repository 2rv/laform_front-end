import { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { MasterClassesComponent } from './master-classes.component';
import {
  MASTER_CLASSES_ACTION_TYPE,
  MasterClassesStateType,
  MasterClassesActionType,
} from './master-classes.type';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import {
  getProductsAction,
  paginateProductsAction,
} from './master-classes.action';

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
function MasterClassesReducer(
  state: MasterClassesStateType,
  action: MasterClassesActionType,
) {
  switch (action.type) {
    case MASTER_CLASSES_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case MASTER_CLASSES_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case MASTER_CLASSES_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case MASTER_CLASSES_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case MASTER_CLASSES_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case MASTER_CLASSES_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case MASTER_CLASSES_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function MasterClassesContainer() {
  const [state, setState] = useReducer(MasterClassesReducer, initialState);
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
    <MasterClassesComponent
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
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.ALL',
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
