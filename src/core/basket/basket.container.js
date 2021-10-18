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
import { convertForTable } from './basket.util';

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

  const { masterProducts, patternProducts, sewingProducts, basketPrice } =
    convertForTable(bascketState);
  const changeItem = (values) => {
    dispatch(changeItemAction(values, bascketState));
  };
  const deleteItem = (indexId, id) => {
    dispatch(deleteItemAction(indexId, bascketState));
  };
  const checkPromoCode = (promocode) => {
    dispatch(checkPromoCodeAction(promocode));
  };
  const onSubmit = (values) => {
    dispatch(basketUploadData(values, bascketState, isAuth));
  };

  const initialValues = () => {
    return {
      [ORDER_FIELD_NAME.EMAIL]: Boolean(email) ? email.toString() : '',
      [ORDER_FIELD_NAME.FULL_NAME]: userInfo[ORDER_FIELD_NAME.FULL_NAME] || '',
      [ORDER_FIELD_NAME.CITY]: userInfo[ORDER_FIELD_NAME.CITY] || '',
      [ORDER_FIELD_NAME.PHONE]: userInfo[ORDER_FIELD_NAME.PHONE] || '',
      [ORDER_FIELD_NAME.PAYMENT_METHOD]:
        userInfo[ORDER_FIELD_NAME.PAYMENT_METHOD] || 0,
      [ORDER_FIELD_NAME.DELIVERY_METHOD]:
        userInfo[ORDER_FIELD_NAME.DELIVERY_METHOD] || 0,
      [ORDER_FIELD_NAME.DESCRIPTION]: '',
      [ORDER_FIELD_NAME.PRICE]: 0,
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,
      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.DILIVERY_PRICE]: 0,
      [ORDER_FIELD_NAME.SAVE_USER_INFO]: false,
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
      price={basketPrice.toFixed(2)}
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
      sewingProducts={sewingProducts}
      masterProducts={masterProducts}
      patternProducts={patternProducts}
    />
  );
}
const headersGoods = [
  'BASKET.HEADERS_GOODS.SEWING_GOODS',
  'BASKET.HEADERS_GOODS.PARAMETERS',
  'BASKET.HEADERS_GOODS.QUANTITY',
  'BASKET.HEADERS_GOODS.TOTAL_PRICE',
];
const headersMaster = [
  'BASKET.HEADERS_MASTER.MASTER_CLASSES',
  'BASKET.HEADERS_MASTER.PARAMETERS',
  'BASKET.HEADERS_MASTER.TOTAL_PRICE',
];
const headersPatterns = [
  'BASKET.HEADERS_PATTERNS.PATTERNS',
  'BASKET.HEADERS_PATTERNS.PARAMETERS',
  'BASKET.HEADERS_GOODS.QUANTITY',
  'BASKET.HEADERS_PATTERNS.TOTAL_PRICE',
];
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
