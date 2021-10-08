import { SyntheticEvent } from 'react';
import {
  required,
  number,
  numberPositive,
  numberPositiveMin,
  numberPositiveMax,
} from '../../../main/validate/validate.service';

export function numberValue(e: SyntheticEvent<HTMLInputElement>) {
  const value = Number(e.currentTarget.value);
  if (isNaN(value)) return 0;
  return value;
}
interface optionType {
  price: number;
  discount: number;
  size: string;
  colorRu?: string;
  filePdf?: File;
}
interface validateOption {
  IsColor?: boolean;
  isFilePdf?: boolean;
}
export function findMinPriceAndDiscount(values: optionType[]) {
  return values.reduce(
    (acc, item) => {
      if (acc.price > item.price) {
        acc.price = item.price;
        acc.discount = item.discount;
      }
      return acc;
    },
    { price: values[0].price, discount: values[0].discount },
  );
}

export function productOptionValidation(validateOption: validateOption = {}) {
  return (values: optionType[]) => {
    const { isFilePdf, IsColor } = validateOption;
    const result = values.reduce((acc: { [key: number]: any }, item, index) => {
      const size = required(item.size);
      const colorRu = IsColor ? required(item.colorRu) : false;
      const filePdf = isFilePdf ? required(item.filePdf) : false;
      const price =
        required(item.price) ||
        number(item.price) ||
        numberPositive(item.price) ||
        numberPositiveMin(0)(item.price);
      const discount =
        number(item.discount) ||
        numberPositive(item.discount) ||
        numberPositiveMin(0)(item.discount) ||
        numberPositiveMax(100)(item.discount);
      if (size || colorRu || filePdf || price || discount) {
        acc[index] = {};
        if (size) acc[index].size = size;
        if (colorRu) acc[index].colorRu = colorRu;
        if (filePdf) acc[index].filePdf = filePdf;
        if (price) acc[index].price = price;
        if (discount) acc[index].discount = discount;
      }
      return acc;
    }, {});
    if (Object.keys(result).length == 0) return null;
    return result;
  };
}
