import { convertOptions } from 'src/lib/common/product-converters';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import {
  basketStateType,
  masterItemType,
  patternItemType,
  sewingItemType,
} from './basket.ts.type';

function getTotalPrice(
  optionPrice?: number,
  optionDiscount?: number,
  productPrice?: number,
  productDiscount?: number,
): number {
  const price = optionPrice || productPrice || 0;
  const discount = optionDiscount || productDiscount || 0;
  return price - price * (discount / 100);
}
function isCountUtil(props: any): boolean {
  const { options = [], option, count = 0 } = props;
  if (Boolean(options.length)) {
    if (option === '') return false;
    return Boolean(options[Number(option)].count);
  }
  return Boolean(count);
}
function isLengthUtil(props: any): boolean {
  const { options = [], option, length } = props;
  if (Boolean(options.length)) {
    if (option === '') return false;
    return Boolean(options[Number(option)].length);
  }
  return Boolean(length);
}

export function convertForTable(basketState: basketStateType[]) {
  return basketState.reduce(
    (acc: any, i) => {
      if (i.type === 0) {
        const item = masterItemConvert(i);
        acc.masterProducts.push(item);
        acc.basketPrice = acc.basketPrice + item.totalPrice;
      }
      if (i.type === 1 || i.type === 2) {
        const item = patternItemConvert(i);
        acc.patternProducts.push(item);
        acc.basketPrice = acc.basketPrice + item.totalPrice;
      }
      if (i.type === 3) {
        const item = sewingItemConvert(i);
        acc.sewingProducts.push(item);
        acc.basketPrice = acc.basketPrice + item.totalPrice;
      }
      return acc;
    },
    {
      masterProducts: [],
      patternProducts: [],
      sewingProducts: [],
      basketPrice: 0,
    },
  );
}
const masterItemConvert = (data: basketStateType): masterItemType => {
  const totalPrice = getTotalPrice(
    data.masterProduct.price,
    data.masterProduct.discount,
  );
  return {
    id: data.masterProduct.id,
    type: data.masterProduct.type,
    indexId: data.indexId,
    path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.masterProduct.id } },
    image: data.masterProduct.images[0].fileUrl,
    name: data.masterProduct.titleRu || data.masterProduct.titleEn,
    vendorCode: data.masterProduct.vendorCode,
    totalPrice: Number(totalPrice.toFixed(2)),
    params: {
      program: 'Удаленная',
      category: 'Поправить',
    },
  };
};
const patternItemConvert = (data: basketStateType): patternItemType => {
  const option = (data.patternProduct?.options || []).find(
    (i) => i.id === data.optionId,
  );
  const optionId = (data.patternProduct?.options || []).findIndex(
    (i) => i.id === data.optionId,
  );

  const totalPrice =
    getTotalPrice(
      option?.price,
      option?.discount,
      data.patternProduct.price,
      data.patternProduct.discount,
    ) * (data?.count || data?.length || 0);

  return {
    id: data.patternProduct.id,
    type: data.patternProduct.type,
    optionId: typeof optionId !== 'number' ? optionId : undefined,
    indexId: data.indexId,
    path: PATTERNS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.patternProduct.id } },
    image: data.patternProduct.images[0].fileUrl,
    name: data.patternProduct.titleRu || data.patternProduct.titleEn,
    vendorCode: option?.vendorCode || data.patternProduct.vendorCode,
    totalPrice: Number(totalPrice.toFixed(2)),
    sizes: convertOptions(
      data.patternProduct.options,
      data.patternProduct.optionType,
      2,
    ),
    count: data.count,
    maxCount: option?.count || data.patternProduct.count || 1,
    params: {
      size: option?.size,
      format:
        data.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
      complexity: data.patternProduct.complexity,
      category: data.patternProduct.categories[0]?.textRu,
    },
    isCount: data.isCount,
  };
};
const sewingItemConvert = (data: basketStateType): sewingItemType => {
  const option = data.sewingProduct.options.find((i) => i.id === data.optionId);
  const optionId = data.sewingProduct.options.findIndex(
    (i) => i.id === data.optionId,
  );
  const totalPrice =
    getTotalPrice(
      option?.price,
      option?.discount,
      data.sewingProduct.price,
      data.sewingProduct.discount,
    ) * (data?.count || data?.length || 0);

  return {
    id: data.sewingProduct.id,
    type: data.sewingProduct.type,
    optionId: typeof optionId === 'number' ? optionId : undefined,
    indexId: data.indexId,
    path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.sewingProduct.id } },
    image: data.sewingProduct.images[0].fileUrl,
    name: data.sewingProduct.titleRu,
    vendorCode: option?.vendorCode || data.sewingProduct.vendorCode,
    count: data.count,
    length: data.length,
    maxCount: option?.count || data.sewingProduct.count || 0,
    maxLength: option?.length || data.sewingProduct.length || 0,
    totalPrice: Number(totalPrice.toFixed(2)),
    params: {
      size: option?.size,
      color: option?.colorEn || option?.colorRu,
      category: data.sewingProduct.categories[0]?.textRu,
    },
    isCount: data.isCount,
    isLength: data.isLength,
    options: convertOptions(
      data.sewingProduct.options,
      data.sewingProduct.optionType,
      1,
    ),
    sizes: convertOptions(
      data.sewingProduct.options,
      data.sewingProduct.optionType,
      2,
    ),
    colors: convertOptions(
      data.sewingProduct.options,
      data.sewingProduct.optionType,
      3,
    ),
  };
};

export function convertAddToCart(product: any, data: any, index = 0) {
  if (data.type === 0) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      masterProduct: product,
      count: 1,
      isCount: false,
      isLength: false,
    };
  }
  if (product.type === 1) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      patternProduct: product,
      optionId: data.optionId,
      count: 1,
      isCount: false,
      isLength: false,
    };
  }
  if (product.type === 2) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      patternProduct: product,
      optionId: data.optionId,
      count: data.count || 0,
      isCount: isCountUtil({
        options: product?.options,
        option: (product?.options || []).findIndex(
          (i: any) => i.id === data.optionId,
        ),
        count: product?.count,
      }),
    };
  }
  if (product.type === 3) {
    return {
      id: product.id,
      type: product.type,
      indexId: product.id + index,
      sewingProduct: product,
      optionId: data.optionId,
      count: data.count || 0,
      length: data.length,
      isCount: isCountUtil({
        options: product?.options,
        option: (product?.options || []).findIndex(
          (i: any) => i.id === data.optionId,
        ),
        count: product?.count,
      }),
      isLength: isLengthUtil({
        options: product?.options,
        option: (product?.options || []).findIndex(
          (i: any) => i.id === data.optionId,
        ),
        length: product?.length,
      }),
    };
  }
}
export const convertCreateOrder = (
  data: any,
  bascketState: basketStateType[],
) => ({
  purchase: data,
  purchaseProducts: bascketState.map((item) => {
    return {
      masterClassId: item.type === 0 ? item.id : undefined,
      patternProductId:
        item.type === 1 || item.type === 2 ? item.id : undefined,
      sewingProductId: item.type === 3 ? item.id : undefined,
      type: item.type,
      optionId: item.optionId,
      totalCount: item.count,
    };
  }),
});
