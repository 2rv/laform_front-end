import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  patternsUploadData,
  patternsUpdateData,
  fetchCategories,
} from './patterns.action';
import { PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { redirect } from 'src/main/navigation';
import { PATTERNS_ROUTE_PATH } from '.';
import { useRouter } from 'next/router';
import { PATTERNS_ACTION_TYPE } from './patterns.type';

const PRODUCT_CATEGORY_FIRST_OPTION = 'Все';

export function PatternsContainer() {
  const patternType = useRouter().pathname.split('/')?.[2];
  const { patternsState, categories, pageLoading, currentLang, user, isAuth } =
    useSelector((state) => ({
      patternsState: state[PATTERNS_STORE_NAME].patternsState,
      categories: state[PATTERNS_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }));
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    where: null,
    sort: null,
    by: null,
    type: patternType,
  });

  const productCategories = [
    { id: 0, tid: PRODUCT_CATEGORY_FIRST_OPTION },
    ...getRequestData(categories, []),
  ];

  useEffect(() => {
    dispatch(patternsUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 2));
  }, []);

  const handleFilter = ({ where, sort, by, category }) => {
    dispatch({ type: PATTERNS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category === PRODUCT_CATEGORY_FIRST_OPTION ? '' : category;
    setFilter(copy);
    dispatch(patternsUploadData(isAuth, { currentLang, ...copy }));
  };
  const onDeleteProduct = (id, body) => {
    dispatch(patternsUpdateData(isAuth, { currentLang }, id, body));
  };
  const setActiveTab = (value) => {
    dispatch({ type: PATTERNS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter, type: value };
    setFilter(copy);
    dispatch(patternsUploadData(isAuth, { currentLang, ...copy }));
    if (value) {
      redirect(PATTERNS_ROUTE_PATH + value);
    } else {
      redirect(PATTERNS_ROUTE_PATH);
    }
  };

  return (
    <PatternsComponent
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
      listItems={getRequestData(patternsState, {}).products}
      filterOptions={filterOptionss}
      categories={productCategories}
      handleFilter={handleFilter}
      fetchData={() =>
        dispatch(
          patternsUploadData(isAuth, {
            currentLang,
            ...filter,
            page: patternsState.data?.currentPage,
          }),
        )
      }
      hasMore={
        Number(patternsState.data?.products?.length) <
        Number(patternsState.data?.totalRecords)
      }
      activeTab={patternType}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      pageLoading={pageLoading}
      isPending={isRequestPending(patternsState)}
      isError={isRequestError(patternsState)}
      isSuccess={isRequestSuccess(patternsState)}
      errorMessage={getRequestErrorMessage(patternsState)}
    />
  );
}

export const tabItems = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', type: null },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED', type: 'printed' },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC', type: 'electronic' },
];
export const filterOptionss = [
  {
    id: 0,
    tid: 'PATTERNS.FILTER_OPTIONS.ALL',
  },
  {
    id: 1,
    tid: 'По алфавиту от а до я',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'По алфавиту от я до а',
    sort: 'title',
    by: 'DESC',
  },
];
