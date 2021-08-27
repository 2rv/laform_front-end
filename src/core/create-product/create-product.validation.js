import { validate } from '../../main/validate/validate.core';
import {
  required,
  number,
  minLength,
  numberPositive,
  numberPositiveMin,
  numberPositiveMax,
} from '../../main/validate/validate.service';

import { PRODUCT_FIELD_NAME } from './create-product.type';
const validationByType = {
  1: {
    [PRODUCT_FIELD_NAME.COMPLEXITY]: [],
    [PRODUCT_FIELD_NAME.MATERIAL]: [required],
    [PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_PRICE]: [
      required,
      number,
      numberPositive,
      numberPositiveMin(0),
    ],
    [PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_FILE]: [required],
  },
  2: {
    [PRODUCT_FIELD_NAME.COMPLEXITY]: [],
    [PRODUCT_FIELD_NAME.MATERIAL]: [required],
  },
  3: {
    [PRODUCT_FIELD_NAME.COUNT]: [
      required,
      number,
      numberPositive,
      numberPositiveMin(0),
    ],
  },
};

const config = (productType) => ({
  [PRODUCT_FIELD_NAME.NAME]: [required, minLength(3)],
  [PRODUCT_FIELD_NAME.MODIFIER]: [],
  [PRODUCT_FIELD_NAME.CATEGORIES]: [],
  [PRODUCT_FIELD_NAME.DESCRIPTION]: [required],
  // рекомендации
  [PRODUCT_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,

    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  ...validationByType[productType],
});
const fieldArrayValidation = (values, type = 0) => {
  const errors = {};
  const isErrorIndicator = [];
  const isError = () => isErrorIndicator.push(true);
  if (type === 0) {
    errors[PRODUCT_FIELD_NAME.PROGRAMS] = constructiorValidation({
      isError: isError,
      values: values[PRODUCT_FIELD_NAME.PROGRAMS],
      fieldName: PRODUCT_FIELD_NAME.PROGRAM_NAME,
      fieldPrice: PRODUCT_FIELD_NAME.PROGRAM_PRICE,
    });
  }
  if (type === 2) {
    errors[PRODUCT_FIELD_NAME.SIZES] = constructiorValidation({
      isError: isError,
      values: values[PRODUCT_FIELD_NAME.SIZES],
      fieldName: PRODUCT_FIELD_NAME.SIZE_NAME,
      fieldPrice: PRODUCT_FIELD_NAME.SIZE_PRICE,
    });
  }
  if (type === 3) {
    errors[PRODUCT_FIELD_NAME.SIZES] = constructiorValidation({
      isError: isError,
      values: values[PRODUCT_FIELD_NAME.SIZES],
      fieldName: PRODUCT_FIELD_NAME.SIZE_NAME,
      fieldPrice: PRODUCT_FIELD_NAME.SIZE_PRICE,
    });
    errors[PRODUCT_FIELD_NAME.COLORS] = constructiorValidation({
      isError: isError,
      values: values[PRODUCT_FIELD_NAME.COLORS],
      fieldName: PRODUCT_FIELD_NAME.COLOR_NAME,
      fieldPrice: PRODUCT_FIELD_NAME.COLOR_PRICE,
    });
  }
  if (isErrorIndicator.length !== 0) return errors;
  return {};
};

export const createProuctValidation = (values) => {
  const productType = Number(values[PRODUCT_FIELD_NAME.TYPE]);
  const errors = fieldArrayValidation(values, productType);
  const validErrors = validate(values, config(productType));
  return {
    ...errors,
    ...validErrors,
  };
};

const constructiorValidation = (props) => {
  const { values, fieldName, fieldPrice, isError } = props;
  return values.map((item, index) => {
    const validName = required(item[fieldName]);
    const validPrice =
      required(item[fieldPrice]) ||
      number(item[fieldPrice]) ||
      numberPositive(item[fieldPrice]) ||
      numberPositiveMin(0)(item[fieldPrice]);
    if (validName || validPrice) {
      isError();
      return {
        [fieldName]: validName,
        [fieldPrice]: validPrice,
      };
    }
  });
};
