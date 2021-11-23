import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  fetchSewingGoods,
  fetchMasterClasses,
  fetchPatternProducts,
  fetchPosts,
  fetchCategories,
  disableProduct,
} from './all-products.action';
import { ALL_PRODUCTS_STORE_NAME } from './all-products.constant';
import { AllProductsComponent } from './all-products.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { addToBasket } from '../basket';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { PATTERNS_STORE_NAME } from '../patterns';

export function AllProductsContainer() {
  const dispatch = useDispatch();
  const { products, categories, pageLoading, currentLang, user } = useSelector(
    (state) => ({
      products: state[ALL_PRODUCTS_STORE_NAME].products,
      categories: state[ALL_PRODUCTS_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
    }),
  );

  const [activeTab, setActiveTab] = useState(SEWING_GOOD_TYPE);
  const [activeTabText, setActiveTabText] = useState(
    'ALL_PRODUCTS.TABS.SEWING_PRODUCT',
  );
  const [filter, setFilter] = useState({
    where: null,
    sort: null,
    by: null,
    category: null,
  });

  const productCategories = [
    { id: 0, tid: PRODUCT_CATEGORY_FIRST_OPTION },
    ...getRequestData(categories, []),
  ];

  useEffect(() => {
    dispatch({ type: ALL_PRODUCTS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    if (activeTab === SEWING_GOOD_TYPE) {
      dispatch(fetchSewingGoods({ currentLang }));
      dispatch(fetchCategories(currentLang, SEWING_GOOD_TYPE));
      setActiveTabText('ALL_PRODUCTS.TABS.SEWING_PRODUCT');
    } else if (activeTab === MASTER_CLASS_TYPE) {
      dispatch(fetchMasterClasses({ currentLang }));
      dispatch(fetchCategories(currentLang, MASTER_CLASS_TYPE));
      setActiveTabText('ALL_PRODUCTS.TABS.MASTER_CLASS');
    } else if (activeTab === ELECTRONIC_PATTERN_TYPE) {
      dispatch(fetchPatternProducts({ currentLang, type: 'electronic' }));
      dispatch(fetchCategories(currentLang, PRINTED_PATTERN_TYPE));
      setActiveTabText('ALL_PRODUCTS.TABS.ELECTRONIC_PATTERN_PRODUCT');
    } else if (activeTab === PRINTED_PATTERN_TYPE) {
      dispatch(fetchPatternProducts({ currentLang, type: 'printed' }));
      dispatch(fetchCategories(currentLang, PRINTED_PATTERN_TYPE));
      setActiveTabText('ALL_PRODUCTS.TABS.PRINTED_PATTERN_PRODUCT');
    } else if (activeTab === POST_TYPE) {
      dispatch(fetchPosts({ currentLang }));
      dispatch(fetchCategories(currentLang, POST_TYPE));
      setActiveTabText('ALL_PRODUCTS.TABS.POST');
    }
  }, [activeTab]);

  const fetchData = () => {
    if (activeTab === SEWING_GOOD_TYPE) {
      dispatch(
        fetchSewingGoods({
          currentLang,
          ...filter,
          page: products.data.currentPage,
        }),
      );
    } else if (activeTab === MASTER_CLASS_TYPE) {
      dispatch(
        fetchMasterClasses({
          currentLang,
          ...filter,
          page: products.data.currentPage,
        }),
      );
    } else if (activeTab === ELECTRONIC_PATTERN_TYPE) {
      dispatch(
        fetchPatternProducts({
          currentLang,
          ...filter,
          page: products.data.currentPage,
          type: 'electronic',
        }),
      );
    } else if (activeTab === PRINTED_PATTERN_TYPE) {
      dispatch(
        fetchPatternProducts({
          currentLang,
          ...filter,
          page: products.data.currentPage,
          type: 'printed',
        }),
      );
    } else if (activeTab === POST_TYPE) {
      dispatch(
        fetchPosts({ currentLang, ...filter, page: products.data.currentPage }),
      );
    }
  };

  const onDeleteProduct = (id, deleted) => {
    if (activeTab === SEWING_GOOD_TYPE) {
      dispatch(disableProduct(currentLang, '/sewing-product', id, deleted));
    } else if (activeTab === MASTER_CLASS_TYPE) {
      dispatch(disableProduct(currentLang, '/master-class', id, deleted));
    } else if (activeTab === ELECTRONIC_PATTERN_TYPE) {
      dispatch(disableProduct(currentLang, '/pattern-product', id, deleted));
    } else if (activeTab === PRINTED_PATTERN_TYPE) {
      dispatch(disableProduct(currentLang, '/pattern-product', id, deleted));
    } else if (activeTab === POST_TYPE) {
      dispatch(disableProduct(currentLang, '/post', id, deleted));
    }
  };

  const handleFilter = ({ where, sort, by, category }) => {
    dispatch({ type: ALL_PRODUCTS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category === PRODUCT_CATEGORY_FIRST_OPTION ? '' : category;
    setFilter(copy);
    if (activeTab === SEWING_GOOD_TYPE) {
      dispatch(fetchSewingGoods({ currentLang, ...copy }));
    } else if (activeTab === MASTER_CLASS_TYPE) {
      dispatch(fetchMasterClasses({ currentLang, ...copy }));
    } else if (activeTab === ELECTRONIC_PATTERN_TYPE) {
      dispatch(fetchPatternProducts({ currentLang, ...copy }));
    } else if (activeTab === PRINTED_PATTERN_TYPE) {
      dispatch(fetchPatternProducts({ currentLang, ...copy }));
    } else if (activeTab === POST_TYPE) {
      dispatch(fetchPosts({ currentLang, ...copy }));
    }
  };

  return (
    <AllProductsComponent
      activeTabText={activeTabText}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabs}
      products={getRequestData(products, {}).products}
      pageLoading={pageLoading}
      isPending={isRequestPending(products)}
      filterOptions={filterOptionss}
      categories={productCategories}
      handleFilter={handleFilter}
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
      fetchData={fetchData}
      hasMore={
        Number(products.data?.products?.length) <
        Number(products.data?.totalRecords)
      }
    />
  );
}

const MASTER_CLASS_TYPE = 0;
const ELECTRONIC_PATTERN_TYPE = 1;
const PRINTED_PATTERN_TYPE = 2;
const SEWING_GOOD_TYPE = 3;
const POST_TYPE = 4;

const PRODUCT_CATEGORY_FIRST_OPTION = 'ALL_PRODUCTS.SELECT_CATEGORY_ALL';

export const tabs = [
  { name: 'ALL_PRODUCTS.TABS.SEWING_PRODUCT', type: SEWING_GOOD_TYPE },
  { name: 'ALL_PRODUCTS.TABS.MASTER_CLASS', type: MASTER_CLASS_TYPE },
  {
    name: 'ALL_PRODUCTS.TABS.ELECTRONIC_PATTERN_PRODUCT',
    type: ELECTRONIC_PATTERN_TYPE,
  },
  {
    name: 'ALL_PRODUCTS.TABS.PRINTED_PATTERN_PRODUCT',
    type: PRINTED_PATTERN_TYPE,
  },
  { name: 'ALL_PRODUCTS.TABS.POST', type: POST_TYPE },
];

export const filterOptionss = [
  {
    id: 0,
    tid: 'OTHERRS.CATEGORY_FILTER.ALL',
  },
  {
    id: 1,
    tid: 'OTHERRS.CATEGORY_FILTER.FROM_A_TO_Z',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'OTHERRS.CATEGORY_FILTER.FROM_Z_TO_A',
    sort: 'title',
    by: 'DESC',
  },
];
