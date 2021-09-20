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
} from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods.type';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { sorterItemsByParams } from '../../lib/common/filter-list-card';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

export function SewingGoodsContainer() {
  const dispatch = useDispatch();
  const { sewingGoodsState, pageLoading, currentLang, user } = useSelector(
    (state) => ({
      sewingGoodsState: state[SEWING_GOODS_STORE_NAME].sewingGoodsState,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
    }),
  );
  useEffect(() => dispatch(sewingGoodsUploadData(currentLang)), []);
  const filterInitialValue = () => ({
    [SEWING_GOODS_FIELD_NAME.FILTER]: 0,
    [SEWING_GOODS_FIELD_NAME.FIND]: '',
  });
  const [filter, setFilter] = useState(filterInitialValue());

  const onDeleteProduct = (id, body) => {
    dispatch(sewingGoodsUpdateData(currentLang, id, body));
  };

  const addToCart = (id, type, inCart) => {
    if (inCart) return dispatch(addToBasket({ id, type }, currentLang));
  };

  return (
    <SewingGoodsComponent
      listItems={sorterItemsByParams(
        getRequestData(sewingGoodsState, []),
        filter[SEWING_GOODS_FIELD_NAME.FIND],
        Number(filter[SEWING_GOODS_FIELD_NAME.FILTER]),
      )}
      addToCart={addToCart}
      //-----
      setFilter={setFilter}
      initialValue={filterInitialValue()}
      filterOptions={filterOptionss}
      filterSelectName={SEWING_GOODS_FIELD_NAME.FILTER}
      findFieldName={SEWING_GOODS_FIELD_NAME.FIND}
      //-----
      pageLoading={pageLoading}
      isPending={isRequestPending(sewingGoodsState)}
      isError={isRequestError(sewingGoodsState)}
      isSuccess={isRequestSuccess(sewingGoodsState)}
      errorMessage={getRequestErrorMessage(sewingGoodsState)}
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
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
    tid: 'SEWING_GOODS.FILTER_OPTIONS.STOCK',
  },
  {
    id: 2,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.HIT',
  },
  {
    id: 3,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.ASCENDING',
  },
  {
    id: 4,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.DESCENDING',
  },
];
