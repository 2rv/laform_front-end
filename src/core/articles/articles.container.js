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
import { articlesUploadData, articlesPaginationData } from './articles.action';
import { ARTICLES_STORE_NAME } from './articles.constant';
import { ArticlesComponent } from './articles.component';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function ArticlesContainer() {
  const { articlesState, pageLoading, currentLang, isAuth } = useSelector(
    (state) => ({
      articlesState: state[ARTICLES_STORE_NAME].articlesState,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      isAuth: state[AUTH_STORE_NAME].logged,
    }),
  );

  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [currentPage, setPage] = useState(1);
  let isPagination = false;
  const isPending = isRequestPending(articlesState);
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  useEffect(() => {
    if (!isPending) isPagination = false;
  }, [isPending]);

  const togglePagination = () => {
    const total = articlesState?.additional?.totalCount || 0;
    const current = articlesState?.additional?.currentCount || 0;
    if (
      containerRef.current.getBoundingClientRect().bottom <
        window.innerHeight &&
      !isPending &&
      total > current &&
      !isPagination
    ) {
      isPagination = true;
      dispatch(
        articlesPaginationData(
          currentLang,
          isAuth,
          currentPage + 1,
          filter.where,
          filter.sort,
          filter.by,
        ),
      );
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(articlesUploadData(currentLang, isAuth));
    document.addEventListener('scroll', togglePagination);
    return () => document.removeEventListener('scroll', togglePagination);
  }, []);

  const handleFilter = ({ where, sort, by }) => {
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    setFilter(copy);

    dispatch(
      articlesUploadData(currentLang, isAuth, copy.where, copy.sort, copy.by),
    );
  };

  return (
    <div ref={containerRef}>
      <ArticlesComponent
        listItems={getRequestData(articlesState, [])}
        //-----
        filterOptions={filterOptionss}
        handleFilter={handleFilter}
        //-----
        pageLoading={pageLoading}
        isPending={isRequestPending(articlesState)}
        isError={isRequestError(articlesState)}
        isSuccess={isRequestSuccess(articlesState)}
        errorMessage={getRequestErrorMessage(articlesState)}
      />
    </div>
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
