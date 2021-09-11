import {
  MASTER_CLASS_KEY,
  PATTERN_PRODUCT_KEY,
  SEWING_PRODUCT_KEY,
  ADD_PRODUCT_KEY_AUTHTORIZED,
  PRODUCT_TYPE,
} from './cart.type';

export const convertAuthtorizedCartData = (data, type) => {
  switch (type) {
    case PRODUCT_TYPE.MASTER_CLASS:
      return {
        [ADD_PRODUCT_KEY_AUTHTORIZED.MASTER_CLASS_ID]:
          data[MASTER_CLASS_KEY.MASTER_CLASS_ID],
        [ADD_PRODUCT_KEY_AUTHTORIZED.PROGRAM]: data[MASTER_CLASS_KEY.PROGRAMM],
      };

    case PRODUCT_TYPE.PATTERN_PRODUCT:
      return {
        [ADD_PRODUCT_KEY_AUTHTORIZED.PATTERN_PRODUCT_ID]:
          data[PATTERN_PRODUCT_KEY.PATTERN_PRODUCT_ID],
        [ADD_PRODUCT_KEY_AUTHTORIZED.FORMAT]: data[PATTERN_PRODUCT_KEY.FORMAT],
        [ADD_PRODUCT_KEY_AUTHTORIZED.SIZE]: data[PATTERN_PRODUCT_KEY.SIZE],
      };

    case PRODUCT_TYPE.SEWING_PRODUCT:
      return {
        [ADD_PRODUCT_KEY_AUTHTORIZED.SEWING_PRODUCT_ID]:
          data[SEWING_PRODUCT_KEY.SEWING_PRODUCT_ID],
        [ADD_PRODUCT_KEY_AUTHTORIZED.SIZE]: data[SEWING_PRODUCT_KEY.SIZE],
        [ADD_PRODUCT_KEY_AUTHTORIZED.COLOR]: data[SEWING_PRODUCT_KEY.COLOR],
      };

    default:
      break;
  }
};
