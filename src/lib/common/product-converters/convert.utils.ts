import { OptionType } from '../../element/card';
import { BasicOptionType } from './convert.type';

export const convertOptions = (
  options: BasicOptionType[],
  type: number,
  selectedType: number,
): OptionType[] | undefined => {
  if (!options || options.length <= 0) return undefined;
  if (type === 0) {
    return undefined;
  } else if (type === 1 && selectedType === type) {
    return options.map((item, index) => ({
      id: index,
      optionId: item.id,

      vendorCode: item.vendorCode,
      tid: 'OTHER.CARD.SIZE_COLOR_PRICE',
      tvalue: {
        color: item.colorRu || item.colorEn,
        size: item.size,
        price: Number(
          (
            (item.price || 0) -
            (item.price || 0) * ((item.discount || 0) / 100)
          ).toFixed(2),
        ),
      },
      size: item.size,
      color: item.colorRu || item.colorEn,
      price: item.price,
      discount: item.discount || 0,
      count: item.count,
      length: item.length,
    }));
  } else if (type === 2 && selectedType === type) {
    return options.map((item, index) => ({
      id: index,
      optionId: item.id,
      vendorCode: item.vendorCode,
      tid: 'OTHER.CARD.SIZE_PRICE',
      tvalue: {
        size: item.size,
        price: Number(
          (
            (item.price || 0) -
            (item.price || 0) * ((item.discount || 0) / 100)
          ).toFixed(2),
        ),
      },
      size: item.size,
      price: item.price,
      discount: item.discount || 0,
      count: item.count,
      length: item.length,
    }));
  } else if (type === 3 && selectedType === type) {
    return options.map((item, index) => ({
      id: index,
      optionId: item.id,
      vendorCode: item.vendorCode,
      tid: 'OTHER.CARD.COLOR_PRICE',
      tvalue: {
        color: item.colorRu || item.colorEn,
        price: Number(
          (
            (item.price || 0) -
            (item.price || 0) * ((item.discount || 0) / 100)
          ).toFixed(2),
        ),
      },
      color: item.colorRu || item.colorEn,
      price: item.price,
      discount: item.discount || 0,
      count: item.count,
      length: item.length,
    }));
  }
};

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
