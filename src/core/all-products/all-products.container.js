import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from 'src/main/store/store.service';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import {
  getProductsByType,
  paginateProductsByType,
  disableProduct,
} from './all-products.action';
import { AllProductsComponent } from './all-products.component';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';
import {
  ALL_PRODUCTS_STORE_NAME,
  ALL_PRODUCTS_TAB_TYPES,
} from './all-products.constant';

export function AllProductsContainer() {
  const activePath = (getQuery('type') || ALL_PRODUCTS_TAB_TYPES)[0];
  const dispatch = useDispatch();
  const {
    page,
    total,
    products,
    categories,
    pageLoading,
    currentLang,
    isAdmin,
  } = useSelector((state) => ({
    page: state[ALL_PRODUCTS_STORE_NAME].page,
    total: state[ALL_PRODUCTS_STORE_NAME].total,
    products: state[ALL_PRODUCTS_STORE_NAME].products,
    categories: state[ALL_PRODUCTS_STORE_NAME].categories,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAdmin: state[AUTH_STORE_NAME].user?.role === USER_ROLE.ADMIN,
  }));

  const [query, setQuery] = useState({
    where: null,
    sort: null,
    by: null,
    category: null,
  });

  useEffect(() => {
    dispatch(getProductsByType(activePath, currentLang, query));
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
  const onDisable = (id, deleted) => {
    dispatch(disableProduct(activePath, id, deleted));
  };

  return (
    <AllProductsComponent
      isAdmin={isAdmin}
      activePath={activePath}
      pageLoading={pageLoading}
      total={total}
      products={getRequestData(products, [])}
      categories={getRequestData(categories, [])}
      isPending={isRequestPending(products)}
      onFilter={onFilter}
      onDisable={onDisable}
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
];
