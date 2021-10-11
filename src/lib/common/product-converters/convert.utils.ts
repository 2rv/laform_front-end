import { OptionType } from '../../element/card';
import { BasicOptionType } from './convert.type';

export const convertOptions = (options: BasicOptionType[]): OptionType[] => {
  if (!options || options.length <= 0) return [];

  return options.map((item, index) => ({
    id: index,
    optionId: item.id,

    vendorCode: item.vendorCode,
    tid: getTidForSelect(item.colorRu || item.colorEn, item.size),
    tvalue: {
      color: item.colorRu || item.colorEn,
      size: item.size,
      price:
        (item.price ?? 0) - (item.price ?? 0) * ((item.discount ?? 0) / 100),
    },
    size: item.size,
    color: item.colorRu || item.colorEn,
    price: item.price,
    discount: item.discount,
  }));
};

function getTidForSelect(color: any, size: any): string {
  if (Boolean(color) && Boolean(size)) return 'OTHER.CARD.SIZE_COLOR_PRICE';
  else if (Boolean(color)) return 'OTHER.CARD.COLOR_PRICE';
  else if (Boolean(size)) return 'OTHER.CARD.SIZE_PRICE';
  else return 'OTHER.CARD.SIZE_COLOR_PRICE';
}

export function checkMinPriceAndDiscount(
  values: BasicOptionType[],
  price?: number,
  discount?: number,
) {
  if (!values || values.length === 0) {
    return { price: price, discount: discount };
  }

  return values.reduce(
    (acc, item) => {
      if (acc.price > (item.price ?? 0)) {
        acc.price = item.price ?? 0;
        acc.discount = item.discount ?? 0;
      }
      return acc;
    },
    {
      price: values[0]?.price || 0,
      discount: values[0]?.discount || 0,
    },
  );
}
