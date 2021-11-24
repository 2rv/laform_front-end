import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import {
  masterClassesUploadData,
  masterClassesUpdateData,
  fetchCategories,
} from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

const PRODUCT_CATEGORY_FIRST_OPTION = 'OTHER.CATEGORY_FILTER.ALL';

export function MasterClassesContainer() {
  const {
    masterClassState,
    categories,
    pageLoading,
    currentLang,
    user,
    isAuth,
  } = useSelector((state) => ({
    masterClassState: state[MASTER_CLASSES_STORE_NAME].masterClassState,
    categories: state[MASTER_CLASSES_STORE_NAME].categories,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  const productCategories = [
    { id: 0, tid: PRODUCT_CATEGORY_FIRST_OPTION },
    ...getRequestData(categories, []),
  ];

  useEffect(() => {
    dispatch({ type: MASTER_CLASSES_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(masterClassesUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 0));
  }, []);

  const handleFilter = ({ where, sort, by, category }) => {
    dispatch({ type: MASTER_CLASSES_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category === PRODUCT_CATEGORY_FIRST_OPTION ? '' : category;
    setFilter(copy);
    dispatch(masterClassesUploadData(isAuth, { currentLang, ...copy }));
  };

  const onDeleteProduct = (id, body) => {
    dispatch({ type: MASTER_CLASSES_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(masterClassesUpdateData(isAuth, { currentLang }, id, body));
  };

  return (
    <MasterClassesComponent
      listItems={getRequestData(masterClassState, {}).products}
      onDeleteProduct={onDeleteProduct}
      filterOptions={filterOptions}
      categories={productCategories}
      handleFilter={handleFilter}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
      fetchData={() =>
        dispatch(
          masterClassesUploadData(isAuth, {
            currentLang,
            ...filter,
            page: masterClassState.data?.currentPage,
          }),
        )
      }
      hasMore={
        Number(masterClassState.data?.products?.length) <
        Number(masterClassState.data?.totalRecords)
      }
    />
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.ALL',
    sort: null,
    by: null,
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
