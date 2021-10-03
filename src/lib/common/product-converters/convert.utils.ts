import { ParamsType } from '../../element/card';
import {
  BasicProgram,
  BasicSize,
  BasicColor,
  BasicBasketType,
} from './convert.type';

export function checkMinPrice(params: BasicProgram[] | BasicSize[]): number {
  if (!params || params.length <= 0) return 0;

  //@ts-ignore я не понимаю почему оно выдает ошибку
  return params.reduce((acc: number, item: BasicProgram | BasicSize) => {
    if (acc > item.price) acc = item.price;
    return acc;
  }, params[0].price);
}

export const convertParams = (
  params: BasicProgram[] | BasicSize[] | BasicColor[],
): ParamsType[] => {
  if (!params || params.length <= 0) return [];

  return params.map((item: any) => ({
    id: item.id,
    tid: item.programNameRu || item.programNameEn || item.size || item.color,
    price: item.price,
    vendorCode: item.vendorCode,
  }));
};

export const checkInCart = (
  id: string,
  basket: BasicBasketType[],
): BasicBasketType[] | undefined => {
  if (!basket || basket.length <= 0) return undefined;
  const result = basket.filter((bItem: any) => bItem?.id === id);
  if (!result) return undefined;
  return result.map((item) => ({
    id: item.id,
    color: item.color,
    size: item.size,
    program: item.program,
    count: item.count,
  }));
};
