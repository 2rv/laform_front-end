import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { articlesUploadData, fetchCategories } from './articles.action';
import { ARTICLES_STORE_NAME } from './articles.constant';
import { ArticlesComponent } from './articles.component';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { ARTICLES_ACTION_TYPE } from './articles.type';

export function ArticlesContainer() {
  const { articlesState, categories, pageLoading, currentLang, isAuth } =
    useSelector((state) => ({
      articlesState: state[ARTICLES_STORE_NAME].articlesState,
      categories: state[ARTICLES_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      isAuth: state[AUTH_STORE_NAME].logged,
    }));

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });
  const handleFilter = ({ where, sort, by, category }) => {
    dispatch({ type: ARTICLES_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setFilter(copy);
    dispatch(articlesUploadData(isAuth, { currentLang, ...copy }));
  };
  useEffect(() => {
    dispatch({ type: ARTICLES_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(articlesUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 4));
  }, []);

  const onPaginationList = () => {
    dispatch(
      articlesUploadData(isAuth, {
        currentLang,
        ...filter,
        page: articlesState.data?.currentPage,
      }),
    );
  };

  return (
    <ArticlesComponent
      listItems={getRequestData(articlesState, {}).products}
      filterOptions={filterOptionss}
      categories={getRequestData(categories, [])}
      handleFilter={handleFilter}
      pageLoading={pageLoading}
      isPending={isRequestPending(articlesState)}
      isError={isRequestError(articlesState)}
      isSuccess={isRequestSuccess(articlesState)}
      errorMessage={getRequestErrorMessage(articlesState)}
      fetchData={onPaginationList}
      hasMore={
        Number(articlesState.data?.products?.length) <
        Number(articlesState.data?.totalRecords)
      }
    />
  );
}
export const filterOptionss = [
  {
    id: 0,
    tid: 'ARTICLES.FILTER_OPTIONS.ALL',
    sort: null,
    by: null,
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
