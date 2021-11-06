import { OptionType } from '../../element/card';
import { BasicOptionType } from 'src/lib/basic-types';

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
        price: getPrice({ price: item.price, discount: item.discount }),
      },
      size: item.size,
      color: item.colorRu || item.colorEn,
      price: getPrice({ price: item.price, discount: item.discount }),
      discount: item.discount || 0,
      count: item.count,
      length: getPrice({ price: item.length }),
    }));
  } else if (type === 2 && selectedType === type) {
    return options.map((item, index) => ({
      id: index,
      optionId: item.id,
      vendorCode: item.vendorCode,
      tid: 'OTHER.CARD.SIZE_PRICE',
      tvalue: {
        size: item.size,
        price: getPrice({ price: item.price, discount: item.discount }),
      },
      size: item.size,
      price: getPrice({ price: item.price, discount: item.discount }),
      discount: item.discount || 0,
      count: item.count,
      length: getPrice({ price: item.length }),
    }));
  } else if (type === 3 && selectedType === type) {
    return options.map((item, index) => ({
      id: index,
      optionId: item.id,
      vendorCode: item.vendorCode,
      tid: 'OTHER.CARD.COLOR_PRICE',
      tvalue: {
        color: item.colorRu || item.colorEn,
        price: getPrice({ price: item.price, discount: item.discount }),
      },
      color: item.colorRu || item.colorEn,
      price: getPrice({ price: item.price, discount: item.discount }),
      discount: item.discount || 0,
      count: item.count,
      length: getPrice({ price: item.length }),
    }));
  }
};

export function checkMinPriceAndDiscount(
  values: BasicOptionType[],
  price?: string,
  discount?: number,
): { price: number; discount?: number } {
  if (!values || values.length === 0) {
    return { price: getPrice({ price: price }), discount: discount };
  }

  const result = values.reduce(
    (acc, item) => {
      const dPrice = getPrice({ price: item.price });
      if (acc.price > dPrice) {
        acc.price = dPrice;
        acc.discount = item.discount ?? 0;
      }
      return acc;
    },
    {
      price: 0,
      discount: 0,
    },
  );
  return {
    price: result.price,
    discount: result.discount,
  };
}

interface getPriceProps {
  price?: string;
  discount?: number;
  count?: number;
  length?: string;
  shippingPrice?: string;
}
export function getPrice(props: getPriceProps): number {
  const {
    price = '0',
    discount = 0,
    count = 1,
    length = false,
    shippingPrice = '0',
  } = props;
  const dPrice: number = parseFloat(price);
  const dLength: number = Number(length);
  const dShippingPrice = parseFloat(shippingPrice);
  const result =
    (dPrice - dPrice * (discount / 100)) * (dLength || count) + dShippingPrice;
  return parseFloat(result.toFixed(2));
}
