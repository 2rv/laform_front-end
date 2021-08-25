import {
  FORMALIZATION_ORDERING_FIELD_NAME,
  BASKET_DATA_NAME,
  BASKET_DATA_KEY,
} from './basket.type';

export const convertBasketFormData = (data) => ({
  // [BASKET_DATA_NAME.FULLNAME]:
  //   data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL],
  // [BASKET_DATA_NAME.PASSWORD]:
  //   data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD],
});

export const convertPromoCodeData = (data) => ({
  [BASKET_DATA_NAME.PROMO_CODE]:
    data[FORMALIZATION_ORDERING_FIELD_NAME.PROMO_CODE],
});

export const performBasketLoadUserInfoData = (data) => ({
  [BASKET_DATA_KEY.FULLNAME]: data[BASKET_DATA_NAME.FULLNAME],
  [BASKET_DATA_KEY.DELIVERY_TYPE]: data[BASKET_DATA_NAME.DELIVERY_TYPE],
  [BASKET_DATA_KEY.LOCATION]: data[BASKET_DATA_NAME.LOCATION],
  [BASKET_DATA_KEY.PHONE]: data[BASKET_DATA_NAME.PHONE],
});

export const performPromoCodeData = (data) => ({
  [BASKET_DATA_KEY.DISCOUNT]: data[BASKET_DATA_NAME.DISCOUNT],
});
