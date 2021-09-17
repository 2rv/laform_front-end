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

  const { bascketState, promoCodeState, pageLoading, isAuth, email } =
    useSelector((state) => ({
      bascketState: state[BASKET_STORE_NAME].basket,
      promoCodeState: state[BASKET_STORE_NAME].promoCode,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      isAuth: state[AUTH_STORE_NAME].logged,
      email: state[AUTH_STORE_NAME].user?.email,
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
    dispatch(basketUploadData(values, bascketState, isAuth));
  };

  useEffect(() => {
    // dispatch(LoadUserInfoAction());
  }, []);

  const checkPromoCode = (promocode) => {
    dispatch(checkPromoCodeAction(promocode));
  };

  const initialValues = () => {
    const { promocode, discount } = getRequestData(promoCodeState, {
      promocode: '',
      discount: 0,
    });
    return {
      [ORDER_FIELD_NAME.EMAIL]: email ? email : '',
      [ORDER_FIELD_NAME.FULL_NAME]: '',
      [ORDER_FIELD_NAME.CITY]: '',
      [ORDER_FIELD_NAME.PHONE]: '',
      [ORDER_FIELD_NAME.PAYMENT_METHOD]: 0,
      [ORDER_FIELD_NAME.DELIVERY_METHOD]: 0,
      [ORDER_FIELD_NAME.DESCRIPTION]: '',
      [ORDER_FIELD_NAME.PRICE]: price,
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: discount,
      [ORDER_FIELD_NAME.PROMO_CODE]: promocode,
      [ORDER_FIELD_NAME.DILIVERY_PRICE]: 0,
    };
  };
  return (
    <BasketComponent
      pageLoading={pageLoading}
      IsEmpty={bascketState && bascketState.length === 0}
      isAuth={isAuth}
      //-----------------
      promoCodeErrorMessage={getRequestErrorMessage(promoCodeState)}
      promoCodeError={isRequestError(promoCodeState)}
      promoCodePending={isRequestPending(promoCodeState)}
      promoCodeSuccess={isRequestSuccess(promoCodeState)}
      //--------------
      onSubmit={onSubmit}
      initialValues={initialValues()}
      validation={formValidation}
      diliveryOptions={diliveryOptions}
      paymentMethodOptions={paymentMethodOptions}
      //--------------
      changeItem={changeItem}
      deleteItem={deleteItem}
      checkPromoCode={checkPromoCode}
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
