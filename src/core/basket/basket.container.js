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
import { ORDER_FIELD_NAME } from './basket.type';
import { formValidation } from './basket.validation';
import {
  changeItemAction,
  deleteItemAction,
  checkPromoCodeAction,
  LoadUserInfoAction,
  basketUploadData,
} from './basket.action';

export function BasketContainer() {
  const dispatch = useDispatch();

  const {
    bascketState,
    promoCodeState,
    orderState,
    userInfoState,
    pageLoading,
    isAuth,
    email,
  } = useSelector((state) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    promoCodeState: state[BASKET_STORE_NAME].promoCode,
    orderState: state[BASKET_STORE_NAME].order,
    userInfoState: state[BASKET_STORE_NAME].userInfo,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
    email: state[AUTH_STORE_NAME].user?.email,
  }));

  const isEmpty = bascketState ? bascketState.length === 0 : true;

  const userInfo = getRequestData(userInfoState, false);

  useEffect(() => isAuth && dispatch(LoadUserInfoAction()), []);

  const { itemsGoods, itemsMaster, itemsPatterns, price } =
    reduceBascketState(bascketState);

  const changeItem = (id, values) => {
    dispatch(changeItemAction(id, values, bascketState));
  };

  const deleteItem = (id) => {
    dispatch(deleteItemAction(id, bascketState));
  };

  const checkPromoCode = (promocode) => {
    dispatch(checkPromoCodeAction(promocode));
  };

  const onSubmit = (values) => {
    dispatch(basketUploadData(values, bascketState, isAuth));
  };

  const initialValues = () => {
    return {
      [ORDER_FIELD_NAME.EMAIL]: email ? email : '',
      [ORDER_FIELD_NAME.FULL_NAME]: userInfo
        ? userInfo[ORDER_FIELD_NAME.FULL_NAME]
        : '',
      [ORDER_FIELD_NAME.CITY]: userInfo ? userInfo[ORDER_FIELD_NAME.CITY] : '',
      [ORDER_FIELD_NAME.PHONE]: userInfo
        ? userInfo[ORDER_FIELD_NAME.PHONE]
        : '',
      [ORDER_FIELD_NAME.PAYMENT_METHOD]: userInfo
        ? userInfo[ORDER_FIELD_NAME.PAYMENT_METHOD]
        : 0,
      [ORDER_FIELD_NAME.DELIVERY_METHOD]: userInfo
        ? userInfo[ORDER_FIELD_NAME.DELIVERY_METHOD]
        : 0,
      [ORDER_FIELD_NAME.DESCRIPTION]: '',
      [ORDER_FIELD_NAME.PRICE]: 0,
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,
      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.DILIVERY_PRICE]: 0,
    };
  };

  const { promocode, discount } = getRequestData(promoCodeState, {
    promocode: '',
    discount: 0,
  });

  return (
    <BasketComponent
      pageLoading={pageLoading}
      IsEmpty={isEmpty}
      isAuth={isAuth}
      //-----------------
      promocode={promocode}
      discount={discount}
      price={price}
      //-----------------
      checkPromoCode={checkPromoCode}
      //-----------------
      promoCodeErrorMessage={getRequestErrorMessage(promoCodeState)}
      promoCodeError={isRequestError(promoCodeState)}
      promoCodePending={isRequestPending(promoCodeState)}
      promoCodeSuccess={isRequestSuccess(promoCodeState)}
      //-----------------
      userInfoErrorMessage={getRequestErrorMessage(userInfoState)}
      userInfoError={isRequestError(userInfoState)}
      userInfoPending={isRequestPending(userInfoState)}
      userInfoSuccess={isRequestSuccess(userInfoState)}
      //-----------------
      orderErrorMessage={getRequestErrorMessage(orderState)}
      orderError={isRequestError(orderState)}
      orderPending={isRequestPending(orderState)}
      orderSuccess={isRequestSuccess(orderState)}
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
