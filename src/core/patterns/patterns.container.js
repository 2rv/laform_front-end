import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { getQuery } from 'src/main/navigation';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import {
  getProductsAction,
  paginateProductsAction,
  getCategoriesAction,
} from './patterns.action';
import { PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';

export function PatternsContainer() {
  const activePath = getQuery('type')?.[0];
  const dispatch = useDispatch();
  const {
    page,
    total,
    products,
    categories,
    pageLoading,
    currentLang,
    isAuth,
  } = useSelector((state) => ({
    page: state[PATTERNS_STORE_NAME].page,
    total: state[PATTERNS_STORE_NAME].total,
    products: state[PATTERNS_STORE_NAME].products,
    categories: state[PATTERNS_STORE_NAME].categories,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const [query, setQuery] = useState({
    where: null,
    sort: null,
    by: null,
    category: null,
  });
  const onFilter = (props) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };
  useEffect(() => {
    dispatch(getCategoriesAction(currentLang, activePath));
    dispatch(getProductsAction(activePath, currentLang, isAuth, query));
  }, [activePath, query]);
  const onPagination = () => {
    dispatch(
      paginateProductsAction(activePath, currentLang, isAuth, page, query),
    );
  };

  return (
    <PatternsComponent
      activePath={activePath}
      pageLoading={pageLoading}
      total={total}
      products={getRequestData(products, [])}
      categories={getRequestData(categories, [])}
      isPending={isRequestPending(products)}
      onFilter={onFilter}
      onPagination={onPagination}
      filterOptions={filterOptions}
    />
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'PATTERNS.FILTER_OPTIONS.ALL',
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
