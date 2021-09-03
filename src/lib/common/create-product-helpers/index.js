import {
  required,
  number,
  numberPositive,
  numberPositiveMin,
} from '../../../main/validate/validate.service';

export const numberValue = (e) => {
  // конвертирует string "1000" в number 1000
  const value = Number(e.currentTarget.value);
  if (isNaN(value)) return 0;
  return value;
};

export const dynamicFieldsMinPrice = (values, priceField) => {
  //метод определяет минимальное значение цены в массиве параметра
  return values.reduce((acc, item) => {
    if (acc > item[priceField]) acc = item[priceField];
    return acc;
  }, values[0][priceField]);
};

export const dynamicFieldsValidation = (
  // ищет обязательные параметры если они будут вернётся обьект с ошибками в этом параметре
  values, // это values конкретного массива динамических филдов
  nameArray, // назавание этого массива
  nameField, // филд в котором указывается название параметра
  priceField, // филд в котором указывается цена параметра
) =>
  values.reduce((acc, item, index) => {
    const name = required(item[nameField]);
    const price =
      required(item[priceField]) ||
      number(item[priceField]) ||
      numberPositive(item[priceField]) ||
      numberPositiveMin(0)(item[priceField]);

    if (name || price) {
      acc[nameArray] = {
        ...acc[nameArray],
        [index]: (() => {
          const obj = {};
          if (name) obj[nameField] = name;
          if (price) obj[priceField] = price;
          return obj;
        })(),
      };
    }
    return acc;
  }, {});
