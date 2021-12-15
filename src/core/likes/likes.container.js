import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { getQuery } from 'src/main/navigation';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import { getProductsByType, paginateProductsByType } from './likes.action';
import { ALL_LIKES_STORE_NAME, ALL_LIKES_TAB_TYPES } from './likes.constant';
import { LikesComponent } from './likes.component';
// import { LIKE_STORE_NAME } from '../block-like';

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

//   activeTabText={activeTabText}
//   activeTab={activeTab}
//   setActiveTab={setActiveTab}
//   tabItems={tabs}
//   listItems={getRequestData(likes, {}).products}
//   pageLoading={pageLoading}
//   isPending={isRequestPending(likes)}
//   fetchData={fetchData}
//   hasMore={
//     Number(likes.data?.products?.length) < Number(likes.data?.totalRecords)
//   }
// const { likes, pageLoading, currentLang, user, isAuth, updated } =
// useSelector((state) => ({
//   likes: state[ALL_LIKES_STORE_NAME].likes,
//   pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
//   currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
//   updated: state[LIKE_STORE_NAME].like.success,
// }));

// const [activeTab, setActiveTab] = useState(3);
// const [activeTabText, setActiveTabText] = useState('');

// useEffect(() => {
// dispatch({ type: LIKES_ACTION_TYPE.RESET_PRODUCTS_STATE });
// if (activeTab === 3) {
//   dispatch(likeSewingProductUploadData(currentLang));
//   setActiveTabText('ALL_LIKES.TABS.SEWING_PRODUCT');
// } else if (activeTab === 2) {
//   dispatch(likeMasterClassUploadData(currentLang));
//   setActiveTabText('ALL_LIKES.TABS.MASTER_CLASS');
// } else if (activeTab === 1) {
//   dispatch(likePatternProductUploadData(currentLang));
//   setActiveTabText('ALL_LIKES.TABS.PATTERN_PRODUCT');
// } else if (activeTab === 0) {
//   dispatch(likePostUploadData(currentLang));
//   setActiveTabText('ALL_LIKES.TABS.POST');
// }
// }, [activeTab, updated]);

// const fetchData = () => {
// if (activeTab === 3) {
//   dispatch(
//     likeSewingProductUploadData(currentLang, likes.data.currentPage),
//   );
// } else if (activeTab === 2) {
//   dispatch(likeMasterClassUploadData(currentLang, likes.data.currentPage));
// } else if (activeTab === 1) {
//   dispatch(
//     likePatternProductUploadData(currentLang, likes.data.currentPage),
//   );
// } else if (activeTab === 0) {
//   dispatch(likePostUploadData(currentLang, likes.data.currentPage));
// }
// };

// export const tabs = [
//   { name: 'ALL_LIKES.TABS.SEWING_PRODUCT', type: 3 },
//   { name: 'ALL_LIKES.TABS.MASTER_CLASS', type: 2 },
//   { name: 'ALL_LIKES.TABS.PATTERN_PRODUCT', type: 1 },
//   { name: 'ALL_LIKES.TABS.POST', type: 0 },
// ];
