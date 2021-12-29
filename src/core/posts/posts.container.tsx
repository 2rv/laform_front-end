import { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import {
  PostsStateType,
  PostsActionType,
  POSTS_ACTION_TYPE,
} from './posts.type';
import { getProductsAction, paginateProductsAction } from './posts.action';
import { PostsComponent } from './posts.component';

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
function PostsReducer(state: PostsStateType, action: PostsActionType) {
  switch (action.type) {
    case POSTS_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case POSTS_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case POSTS_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case POSTS_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case POSTS_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case POSTS_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case POSTS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}
export function PostsContainer() {
  const [state, setState] = useReducer(PostsReducer, initialState);
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
    <PostsComponent
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
    tid: 'ARTICLES.FILTER_OPTIONS.ALL',
  },
  {
    id: 1,
    tid: 'ARTICLES.FILTER_OPTIONS.NEW',
    sort: 'date',
    by: 'DESC',
  },
  {
    id: 2,
    tid: 'ARTICLES.FILTER_OPTIONS.OLD',
    sort: 'date',
    by: 'ASC',
  },
  {
    id: 3,
    tid: 'OTHER.CATEGORY_FILTER.FROM_A_TO_Z',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 4,
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
