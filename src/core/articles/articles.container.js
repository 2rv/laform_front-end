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
import { articlesUploadData, fetchCategories, fetchPostRemove } from './articles.action';
import { ARTICLES_STORE_NAME } from './articles.constant';
import { ArticlesComponent } from './articles.component';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';

export function ArticlesContainer() {
  const { articlesState, categories, pageLoading, currentLang, user, isAuth } = useSelector(
    (state) => ({
      articlesState: state[ARTICLES_STORE_NAME].articlesState,
      categories: state[ARTICLES_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }),
  );

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  const productCategories = [
    { id: -999, tid: 'Выберите категорию', hidden: true },
    ...getRequestData(categories, []),
  ];

  const handleFilter = ({ where, sort, by, category }) => {
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setFilter(copy);
    dispatch(articlesUploadData(isAuth, { currentLang, ...copy }));
  };
  useEffect(() => {
    dispatch(articlesUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 4));
  }, []);

  const onDeleteProduct = (id, body) => {
    dispatch(fetchPostRemove(isAuth, { currentLang }, id, body));
  };

  return (
    <ArticlesComponent
      listItems={getRequestData(articlesState, [])}
      filterOptions={filterOptionss}
      categories={productCategories}
      handleFilter={handleFilter}
      pageLoading={pageLoading}
      isPending={isRequestPending(articlesState)}
      isError={isRequestError(articlesState)}
      isSuccess={isRequestSuccess(articlesState)}
      errorMessage={getRequestErrorMessage(articlesState)}
      onDelete={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
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
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'ARTICLES.FILTER_OPTIONS.OLD',
    sort: 'date',
    by: 'DESC',
  },
  {
    id: 3,
    tid: 'По алфавиту от а до я',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 4,
    tid: 'По алфавиту от я до а',
    sort: 'title',
    by: 'DESC',
  },
];
