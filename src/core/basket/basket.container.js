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
import { BASKET_STORE_NAME } from './basket.constant';
import { BasketComponent } from './basket.component';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { reduceBascketState } from './basket.convert';
import { changeItemAction } from './basket.action';

export function BasketContainer() {
  const dispatch = useDispatch();

  const { bascketState, pageLoading, isAuth } = useSelector((state) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const { itemsGoods, itemsMaster, itemsPatterns } =
    reduceBascketState(bascketState);
  const countMethods = useState({});

  const changeItem = (id, values) => {
    dispatch(changeItemAction(id, values, bascketState));
  };

  return (
    <BasketComponent
      changeItem={changeItem}
      pageLoading={pageLoading}
      //   isPending={isRequestPending(bascketState)}
      //   isError={isRequestError(bascketState)}
      //   isSuccess={isRequestSuccess(bascketState)}
      //   errorMessage={getRequestErrorMessage(bascketState)}
      backetData={bascketState}
      headersGoods={headersGoods}
      headersMaster={headersMaster}
      headersPatterns={headersPatterns}
      itemsGoods={itemsGoods}
      itemsMaster={itemsMaster}
      itemsPatterns={itemsPatterns}
      countMethods={countMethods}
    />
  );
}
const headersGoods = [
  'Товары для шитья',
  'Параметры',
  'Количество',
  'Итоговая цена',
];
const headersMaster = ['Мастер-классы', 'Параметры', 'Итоговая цена'];
const headersPatterns = ['Выкройки', 'Параметры', 'Итоговая цена'];
