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
import { BASKET_STORE_NAME, SHIPPING_PRICE } from './basket.constant';
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
  BASKET_DATA_NAME,
} from './basket.type';

import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { addProduct, getBasket } from '../../lib/common/cart/cart.action';
import { convertBasketFormData } from './basket.convert';

export function BasketContainer() {
  const dispatch = useDispatch();
  const {
    state,
    pageLoading,
    userData,
    discount,
    token,

    addProductStore,
    basket,
    changeProduct,
    deleteProduct,
  } = useSelector((state) => ({
    state: state[BASKET_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: getRequestData(state[BASKET_STORE_NAME].basketLoadData),
    discount: getRequestData(state[BASKET_STORE_NAME].promoCode)[
      BASKET_DATA_KEY.DISCOUNT
    ],
    token: state[AUTH_STORE_NAME].token,

    addProductStore: state[CART_STORE_NAME].addProduct,
    basket: state[CART_STORE_NAME].getBasket,
    changeProduct: state[CART_STORE_NAME].changeProduct,
    deleteProduct: state[CART_STORE_NAME].deleteProduct,
  }));

  const sewingProducts = basket.data?.[BASKET_DATA_KEY.SEWING_PRODUCT] || [];
  const patternProducts = basket.data?.[BASKET_DATA_KEY.PATTERN_PRODUCT] || [];
  const masterClassProducts = basket.data?.[BASKET_DATA_KEY.MASTER_CLASS] || [];
  const purchaseProducts = [
    ...sewingProducts,
    ...patternProducts,
    ...masterClassProducts,
  ];
  const price = purchaseProducts.reduce((acc, cur) => acc + cur.price, 0);

  const cartPriceWithoutShipping = discount
    ? Math.round(price * ((100 - discount) / 100))
    : price;
  const shippingPrice = SHIPPING_PRICE;
  const cartPrice = cartPriceWithoutShipping + shippingPrice;

  const isEmpty = getRequestData(basket)?.isEmpty;

  const basketFormSendData = (values) => {
    const data = convertBasketFormData(
      values,
      basket.data,
      cartPrice,
      discount,
    );
    dispatch(basketUploadData(data));
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
    // dispatch(
    //   addProduct(
    //     {
    //       sewingProductId: '308e3808-3734-404a-9e78-dcf2b55d540a',
    //       color: 'Красный',
    //       size: 'Взрослый',
    //     },
    //     3,
    //     true,
    //   ),
    // );
  }, []);

  useEffect(() => {
    dispatch(getBasket());
  }, [changeProduct.success, deleteProduct.success, addProductStore.success]);

  return (
    <BasketComponent
      basketData={getRequestData(basket)}
      total={price}
      discount={discount}
      token={token}
      cartPriceWithoutShipping={cartPriceWithoutShipping}
      shippingPrice={shippingPrice}
      cartPrice={cartPrice}
      isEmpty={isEmpty}
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
