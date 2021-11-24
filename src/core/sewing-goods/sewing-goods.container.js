import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { sewingGoodsUploadData, fetchCategories } from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

export function SewingGoodsContainer() {
  const { sewingGoodsState, categories, pageLoading, currentLang, isAuth } =
    useSelector((state) => ({
      sewingGoodsState: state[SEWING_GOODS_STORE_NAME].sewingGoodsState,
      categories: state[SEWING_GOODS_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      isAuth: state[AUTH_STORE_NAME].logged,
    }));

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  const productCategories = [
    { id: 0, tid: PRODUCT_CATEGORY_FIRST_OPTION },
    ...getRequestData(categories, []),
  ];

  useEffect(() => {
    dispatch({ type: SEWING_GOODS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(sewingGoodsUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 3));
  }, []);

  const handleFilter = ({ where, sort, by, category }) => {
    dispatch({ type: SEWING_GOODS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category === PRODUCT_CATEGORY_FIRST_OPTION ? '' : category;
    setFilter(copy);
    dispatch(sewingGoodsUploadData(isAuth, { currentLang, ...copy }));
  };
  const onPaginationList = () => {
    dispatch(
      sewingGoodsUploadData(isAuth, {
        currentLang,
        ...filter,
        page: sewingGoodsState.data?.currentPage,
      }),
    );
  };
  return (
    <SewingGoodsComponent
      listItems={getRequestData(sewingGoodsState, {}).products}
      handleFilter={handleFilter}
      filterOptions={filterOptionss}
      categories={productCategories}
      pageLoading={pageLoading}
      isPending={isRequestPending(sewingGoodsState)}
      isError={isRequestError(sewingGoodsState)}
      isSuccess={isRequestSuccess(sewingGoodsState)}
      errorMessage={getRequestErrorMessage(sewingGoodsState)}
      fetchData={onPaginationList}
      hasMore={
        Number(sewingGoodsState.data?.products?.length) <
        Number(sewingGoodsState.data?.totalRecords)
      }
    />
  );
}
const PRODUCT_CATEGORY_FIRST_OPTION = 'OTHER.CATEGORY_FILTER.ALL';
export const filterOptionss = [
  {
    id: 0,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.ALL',
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
