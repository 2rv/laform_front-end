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
import { changeItemAction, deleteItemAction } from './basket.action';
import { ORDER_FIELD_NAME } from './basket.type';
import { formValidation } from './basket.validation';

export function BasketContainer() {
  const dispatch = useDispatch();

  const { bascketState, pageLoading, isAuth } = useSelector((state) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const { itemsGoods, itemsMaster, itemsPatterns, price } =
    reduceBascketState(bascketState);

  const changeItem = (id, values) => {
    dispatch(changeItemAction(id, values, bascketState));
  };
  const deleteItem = (id) => {
    dispatch(deleteItemAction(id, bascketState));
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const initialValues = () => ({
    [ORDER_FIELD_NAME.FULL_NAME]: '',
    [ORDER_FIELD_NAME.CITY]: '',
    [ORDER_FIELD_NAME.PHONE]: '',
    [ORDER_FIELD_NAME.DESCRIPTION]: '',
    [ORDER_FIELD_NAME.PAYMENT_METHOD]: 0,
    [ORDER_FIELD_NAME.DELIVERY_METHOD]: 0,
    [ORDER_FIELD_NAME.PROMO_CODE]: '',
    [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,
    [ORDER_FIELD_NAME.PRICE]: price,
    [ORDER_FIELD_NAME.DILIVERY_PRICE]: 0,
  });
  return (
    <BasketComponent
      pageLoading={pageLoading}
      IsEmpty={bascketState && bascketState.length === 0}
      isAuth={isAuth}
      //--------------
      onSubmit={onSubmit}
      initialValues={initialValues()}
      validation={formValidation}
      diliveryOptions={diliveryOptions}
      paymentMethodOptions={paymentMethodOptions}
      //--------------
      changeItem={changeItem}
      deleteItem={deleteItem}
      //--------------
      headersGoods={headersGoods}
      headersMaster={headersMaster}
      headersPatterns={headersPatterns}
      //--------------
      itemsGoods={itemsGoods}
      itemsMaster={itemsMaster}
      itemsPatterns={itemsPatterns}
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
const diliveryOptions = [
  {
    id: 1,
    tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_DELIVERY_METHOD.MAIL',
  },
];
const paymentMethodOptions = [
  {
    id: 1,
    tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_PAYMENT_METHOD.ONLINE',
  },
];
