import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { getQuery } from 'src/main/navigation';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import {
  clearLikesStoreAction,
  getProductsByType,
  paginateProductsByType,
} from './likes.action';
import { ALL_LIKES_STORE_NAME, ALL_LIKES_TAB_TYPES } from './likes.constant';
import { LikesComponent } from './likes.component';

export function LikesContainer() {
  const activePath = (getQuery('type') || ALL_LIKES_TAB_TYPES)[0];
  const dispatch = useDispatch();

  const {
    page,
    total,
    products,
    pagination,
    categories,
    pageLoading,
    currentLang,
  } = useSelector((state) => ({
    page: state[ALL_LIKES_STORE_NAME].page,
    total: state[ALL_LIKES_STORE_NAME].total,
    products: state[ALL_LIKES_STORE_NAME].products,
    pagination: state[ALL_LIKES_STORE_NAME].pagination,
    categories: state[ALL_LIKES_STORE_NAME].categories,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));
  const [query, setQuery] = useState({
    where: null,
    sort: null,
    by: null,
    category: null,
  });
  useEffect(() => {
    dispatch(getProductsByType(activePath, currentLang, query));
    return () => {
      dispatch(clearLikesStoreAction);
    };
  }, [activePath, query]);

  const onFilter = (props) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };
  const onPagination = () => {
    dispatch(paginateProductsByType(activePath, currentLang, page, query));
  };

  return (
    <LikesComponent
      activePath={activePath}
      pageLoading={pageLoading}
      total={total}
      products={getRequestData(products, [])}
      categories={getRequestData(categories, [])}
      isPending={isRequestPending(products)}
      isPagination={isRequestPending(pagination)}
      onFilter={onFilter}
      onPagination={onPagination}
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
