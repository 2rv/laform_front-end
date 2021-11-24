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
import { convertForTable } from './basket.util';
import {
  getUserInfoAction,
  getDeliveryInfoAction,
  sendEmailCodeAction,
  confirmEmailCodeAction,
  confirmPromoCodeAction,
  createOrderAction,
  updateUserInfoAction,
  changeItemAction,
  deleteItemAction,
  createPaymentAction,
} from './basket.action';

export function BasketContainer() {
  const dispatch = useDispatch();

  const {
    bascketState,
    promoCodeState,
    orderState,
    userInfoState,
    deliveryTypes,
    sendEmailCodeState,
    confirmEmailForOrderState,
    pageLoading,
    isAuth,
    email,
  } = useSelector((state) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    promoCodeState: state[BASKET_STORE_NAME].promoCode,
    orderState: state[BASKET_STORE_NAME].order,
    userInfoState: state[BASKET_STORE_NAME].userInfo,
    deliveryTypes: state[BASKET_STORE_NAME].deliveryTypes,
    sendEmailCodeState: state[BASKET_STORE_NAME].sendEmailCode,
    confirmEmailForOrderState: state[BASKET_STORE_NAME].confirmEmailForOrder,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
    email: state[AUTH_STORE_NAME].user?.email,
  }));

  const userInfo = getRequestData(userInfoState, false);
  const deliveryTypeOptions = getRequestData(deliveryTypes, []);

  useEffect(() => {
    if (isAuth) dispatch(getUserInfoAction());
    dispatch(getDeliveryInfoAction());
  }, []);

  const { masterProducts, patternProducts, sewingProducts, basketPrice } =
    convertForTable(bascketState);

  const changeItem = (values) => {
    dispatch(changeItemAction(values, bascketState));
  };
  const deleteItem = (indexId, id) => {
    dispatch(deleteItemAction(indexId, bascketState));
  };

  const handleConfirmPromoCode = (promocode) => {
    dispatch(confirmPromoCodeAction(promocode));
  };
  const handleSendEmailCode = (value) => {
    dispatch(sendEmailCodeAction(value));
  };
  const handleConfirmEmailCode = (value) => {
    dispatch(confirmEmailCodeAction(value));
  };

  const onSubmit = (values) => {
    dispatch(createOrderAction(values, bascketState, isAuth));
  };
  const createPayment = () => {
    dispatch(createPaymentAction());
  };

  const initialValues = () => {
    return {
      [ORDER_FIELD_NAME.EMAIL]: Boolean(email) ? email.toString() : '',
      [ORDER_FIELD_NAME.FULL_NAME]: userInfo[ORDER_FIELD_NAME.FULL_NAME] || '',
      [ORDER_FIELD_NAME.PHONE]: userInfo[ORDER_FIELD_NAME.PHONE] || '',
      [ORDER_FIELD_NAME.COUNTRY]: '',
      [ORDER_FIELD_NAME.CITY]: '',
      [ORDER_FIELD_NAME.STREET]: '',
      [ORDER_FIELD_NAME.HOUSE]: '',
      [ORDER_FIELD_NAME.POSTAL_CODE]: '',
      [ORDER_FIELD_NAME.FULL_ADRESS]: {},
      [ORDER_FIELD_NAME.DESCRIPTION]: '',
      [ORDER_FIELD_NAME.PRICE]: 0,
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,
      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.SAVE_USER_INFO]: false,
      [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: '',
    };
  };

  const { promocode, discount } = getRequestData(promoCodeState, {
    promocode: '',
    discount: 0,
  });
  return (
    <BasketComponent
      isAuth={isAuth}
      emailConfirmed={getRequestData(confirmEmailForOrderState, isAuth)}
      promocode={promocode}
      discount={discount}
      price={parseFloat(basketPrice.toFixed(2))}
      //--------------
      onSubmit={onSubmit}
      initialValues={initialValues()}
      validation={formValidation}
      //--------------
      pageLoading={pageLoading}
      //--------------
      diliveryOptions={deliveryTypeOptions}
      paymentMethodOptions={paymentMethodOptions}
      //--------------
      userInfoError={isRequestError(userInfoState)}
      userInfoErrorMessage={getRequestErrorMessage(userInfoState)}
      userInfoSuccess={isRequestSuccess(userInfoState)}
      userInfoPending={isRequestPending(userInfoState)}
      //--------------
      orderError={isRequestError(orderState)}
      orderErrorMessage={getRequestErrorMessage(orderState)}
      orderSuccess={isRequestSuccess(orderState)}
      orderPending={isRequestPending(orderState)}
      //--------------
      handleConfirmPromoCode={handleConfirmPromoCode}
      promoCodeError={isRequestError(promoCodeState)}
      promoCodeErrorMessage={getRequestErrorMessage(promoCodeState)}
      promoCodeSuccess={isRequestSuccess(promoCodeState)}
      promoCodePending={isRequestPending(promoCodeState)}
      //--------------
      handleSendEmailCode={handleSendEmailCode}
      sendEmailCodeError={isRequestError(sendEmailCodeState)}
      sendEmailCodeErrorMessage={getRequestErrorMessage(sendEmailCodeState)}
      sendEmailCodeSuccess={isRequestSuccess(sendEmailCodeState)}
      sendEmailCodePending={isRequestPending(sendEmailCodeState)}
      //--------------
      handleConfirmEmailCode={handleConfirmEmailCode}
      confirmEmailCodeError={isRequestError(confirmEmailForOrderState)}
      confirmEmailCodeErrorMessage={getRequestErrorMessage(
        confirmEmailForOrderState,
      )}
      confirmEmailCodeSuccess={isRequestSuccess(confirmEmailForOrderState)}
      confirmEmailCodePending={isRequestPending(confirmEmailForOrderState)}
      isEmpty={!Boolean(bascketState.length)}
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
      createPayment={createPayment}
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
const paymentMethodOptions = [
  {
    id: 1,
    tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_PAYMENT_METHOD.ONLINE',
  },
];
