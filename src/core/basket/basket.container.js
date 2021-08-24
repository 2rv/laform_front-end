import { useEffect } from 'react';
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
import { convertPromoCodeData } from './basket.convert';
import { CART_STORE_NAME } from '../../lib/common/cart';
import {
  basketUploadData,
  basketLoadUserInfoData,
  checkPromoCode,
} from './basket.action';
import { BasketComponent } from './basket.component';
import { basketFormValidation, promoCodeValidation } from './basket.validation';
import {
  FORMALIZATION_ORDERING_FIELD_NAME,
  FORMALIZATION_ORDERING_FORM_FIELD_NAME,
  BASKET_DATA_KEY,
} from './basket.type';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import {
  addPatternProduct,
  addSewingProduct,
  addMasterClass,
  incrementPatternProduct,
  decrementPatternProduct,
  deletePatternProduct,
  purgeCart,
  changePatternProductParametrs,
  PATTER_PRODUCT_FORMAT,
} from '../../lib/common/cart';
import { rehidrate } from '../../lib/common/cart/cart.action';

export function BasketContainer() {
  const dispatch = useDispatch();
  const {
    state,
    pageLoading,
    userData,
    discount,
    sewingProducts,
    patternProduct,
    masterClass,
    total,
    token,
  } = useSelector((state) => ({
    state: state[BASKET_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: getRequestData(state[BASKET_STORE_NAME].basketLoadData),
    sewingProducts: state[CART_STORE_NAME].sewingProduct,
    patternProduct: state[CART_STORE_NAME].patternProduct,
    masterClass: state[CART_STORE_NAME].masterClass,
    total: state[CART_STORE_NAME].total,
    discount: getRequestData(state[BASKET_STORE_NAME].promoCode)[
      BASKET_DATA_KEY.DISCOUNT
    ],
    token: state[AUTH_STORE_NAME].token,
  }));
  const cartPriceWithoutShipping = discount
    ? Math.round(total * ((100 - discount) / 100))
    : total;
  const shippingPrice = 250;
  const cartPrice = cartPriceWithoutShipping + shippingPrice;

  const isNotEmpty =
    sewingProducts.length || patternProduct.length || masterClass.length;

  const basketFormSendData = (values) => {
    // const data = convertSettingsChangeEmailFormData(values);
    // dispatch(basketUploadData(data));
  };

  const basketCheckPromoCode = async (values) => {
    const data = convertPromoCodeData(values);
    dispatch(checkPromoCode(data));
  };

  const basketFormGetInitialValue = () => ({
    [FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME]: userData[
      BASKET_DATA_KEY.FULLNAME
    ]
      ? userData[BASKET_DATA_KEY.FULLNAME]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: userData[
      BASKET_DATA_KEY.DELIVERY_TYPE
    ]
      ? userData[BASKET_DATA_KEY.DELIVERY_TYPE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY]: userData[
      BASKET_DATA_KEY.LOCATION
    ]
      ? userData[BASKET_DATA_KEY.LOCATION]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER]: userData[
      BASKET_DATA_KEY.PHONE
    ]
      ? userData[BASKET_DATA_KEY.PHONE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: 0,
    [FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE]: '',
  });

  const promoCodeInitialValue = () => ({
    [FORMALIZATION_ORDERING_FIELD_NAME.PROMO_CODE]: '',
  });

  useEffect(() => {
    token && dispatch(basketLoadUserInfoData());
    dispatch(rehidrate());
    // dispatch(
    //   changePatternProductParametrs(0, 'DIFFERENT SIZE', 'DIFFERENT FORMAT'),
    // );
    // dispatch(purgeCart());
    // dispatch(
    //   addPatternProduct({
    //     id: 2,
    //     image: 'https://via.placeholder.com/1',
    //     name: 'NAME',
    //     price: 10000,
    //     limit: 20,
    //     size: 'SIZE',
    //     sizeEnum: ['SIZE1', 'SIZE2', 'SIZE3', 'SIZE4'],
    //     format: PATTER_PRODUCT_FORMAT.PRINT,
    //     formatEnum: ['FORMAT1', 'FORMAT2', 'FORMAT3', 'FORMAT4'],
    //   }),
    // );
    // dispatch(
    //   addSewingProduct({
    //     id: 1,
    //     image: 'https://via.placeholder.com/1',
    //     name: 'SEWINGNAME',
    //     quantity: 1,
    //     price: 5000,
    //     limit: 4,
    //     size: 'SIZE1',
    //     category: 'CATEGORY1',
    //     sizeEnum: ['SIZE1', 'SIZE2', 'SIZE3', 'SIZE4'],
    //     color: 'COLOR1',
    //     colorEnum: ['COLOR1', 'COLOR2', 'COLOR3', 'COLOR4'],
    //   }),
    // );
    // dispatch(
    //   addMasterClass({
    //     id: 1,
    //     image: 'https://via.placeholder.com/1',
    //     name: 'SEWINGNAME',
    //     quantity: 1,
    //     price: 5000,
    //     limit: 4,
    //     programm: 'PROGRAMM1',
    //   }),
    // );
    // );
    // dispatch(decrementPatternProduct(1, 1));
    // dispatch(deletePatternProduct(0));
  }, []);

  return (
    <BasketComponent
      total={total}
      discount={discount}
      token={token}
      cartPriceWithoutShipping={cartPriceWithoutShipping}
      shippingPrice={shippingPrice}
      cartPrice={cartPrice}
      isNotEmpty={isNotEmpty}
      isPending={isRequestPending(state.basket)}
      isError={isRequestError(state.basket)}
      isSuccess={isRequestSuccess(state.basket)}
      isPromoCodePending={isRequestPending(state.promoCode)}
      isPromoCodeError={isRequestError(state.promoCode)}
      isPromoCodeSuccess={isRequestSuccess(state.promoCode)}
      promoCodeErrorMessage={getRequestErrorMessage(state.promoCode)}
      errorMessage={getRequestErrorMessage(state.basket)}
      isUserInfoLoadPending={isRequestPending(state.basketLoadData)}
      pageLoading={pageLoading}
      initialValue={basketFormGetInitialValue()}
      validation={basketFormValidation}
      onSubmitForm={basketFormSendData}
      fieldName={FORMALIZATION_ORDERING_FORM_FIELD_NAME}
      headersGoods={headersGoods}
      headersMaster={headersMaster}
      headersPatterns={headersPatterns}
      sewingProduct={sewingProducts}
      patternProduct={patternProduct}
      masterClass={masterClass}
      promoCodeInitialValue={promoCodeInitialValue()}
      onSubmitPromoCode={basketCheckPromoCode}
      validationPromoCode={promoCodeValidation}
    />
  );
}

const headersMaster = ['Мастер-классы', 'Параметры', 'Итоговая цена'];
const headersPatterns = [
  'Выкройки',
  'Параметры',
  'Количество',
  'Итоговая цена',
];
const headersGoods = [
  'Товары для шитья',
  'Параметры',
  'Количество',
  'Итоговая цена',
];
