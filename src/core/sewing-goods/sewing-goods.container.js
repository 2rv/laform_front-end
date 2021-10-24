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
import {
  sewingGoodsUploadData,
  sewingGoodsUpdateData,
  fetchCategories,
} from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

const PRODUCT_CATEGORY_FIRST_OPTION = 'Все';

export function SewingGoodsContainer() {
  const { sewingGoodsState, categories, pageLoading, currentLang, user, isAuth } =
    useSelector((state) => ({
      sewingGoodsState: state[SEWING_GOODS_STORE_NAME].sewingGoodsState,
      categories: state[SEWING_GOODS_STORE_NAME].categories,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
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
    dispatch(sewingGoodsUploadData(isAuth, { currentLang, ...filter }));
    dispatch(fetchCategories(currentLang, 3));
  }, []);

  const handleFilter = ({ where, sort, by, category }) => {
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category === PRODUCT_CATEGORY_FIRST_OPTION ? '' : category;
    setFilter(copy);
    dispatch(sewingGoodsUploadData(isAuth, { currentLang, ...copy }));
  };
  const onDeleteProduct = (id, body) => {
    dispatch(sewingGoodsUpdateData(isAuth, { currentLang }, id, body));
  };
  const addToCart = (values) => dispatch(addToBasket(values, currentLang));

  return (
    <SewingGoodsComponent
      listItems={getRequestData(sewingGoodsState, [])}
      addToCart={addToCart}
      handleFilter={handleFilter}
      filterOptions={filterOptionss}
      categories={productCategories}
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
      pageLoading={pageLoading}
      isPending={isRequestPending(sewingGoodsState)}
      isError={isRequestError(sewingGoodsState)}
      isSuccess={isRequestSuccess(sewingGoodsState)}
      errorMessage={getRequestErrorMessage(sewingGoodsState)}
    />
  );
}

export const filterOptionss = [
  {
    id: 0,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.ALL',
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
