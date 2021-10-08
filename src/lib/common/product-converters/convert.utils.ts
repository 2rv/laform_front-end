import { OptionType } from '../../element/card';
import { BasicOptionType } from './convert.type';

export const convertOptions = (options: BasicOptionType[]): OptionType[] => {
  if (!options || options.length <= 0) return [];

  return options.map((item, index) => ({
    id: index,
    optionId: item.id,
    tid: getTidForSelect(Boolean(item.colorRu || item.colorEn)),
    tvalue: {
      color: item.colorRu || item.colorEn,
      size: item.size,
      price: Number(item.price || 0),
    },
    price: Number(item.price || 0),
    discount: Number(item.discount || 0),
    vendorCode: item.vendorCode,
  }));
};

function getTidForSelect(color: boolean): string {
  if (color) return 'OTHER.CARD.SIZE_COLOR_PRICE';
  return 'OTHER.CARD.SIZE_PRICE';
}

export function checkMinPriceAndDiscount(values: BasicOptionType[]) {
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
