import {
  ORDER_DATA_NAME,
  ORDER_FIELD_NAME,
  USER_INFO_DATA_NAME,
} from './basket.type';

export const convertForCreateOrder = (data, bascketState) => ({
  purchase: data,
  purchaseProducts: bascketState.map((item) => {
    return {
      masterClassId: item.type === 0 ? item.id : undefined,
      patternProductId:
        item.type === 1 || item.type === 2 ? item.id : undefined,
      sewingProductId: item.type === 3 ? item.id : undefined,
      type: item.type,
      color: item.color,
      size: item.size,
      program: item.program,
      totalCount: item.count ?? 1,
    };
  }),
});

export const performUserInfoData = (rowData) => ({
  [ORDER_FIELD_NAME.FULL_NAME]: rowData[USER_INFO_DATA_NAME.FULL_NAME],
  [ORDER_FIELD_NAME.CITY]: rowData[USER_INFO_DATA_NAME.CITY],
  [ORDER_FIELD_NAME.DELIVERY_METHOD]:
    rowData[USER_INFO_DATA_NAME.DELIVERY_METHOD],
  [ORDER_FIELD_NAME.PAYMENT_METHOD]:
    rowData[USER_INFO_DATA_NAME.PAYMENT_METHOD],
  [ORDER_FIELD_NAME.PHONE]: rowData[USER_INFO_DATA_NAME.PHONE],
});

export const convertPromoCodeForCheck = (promocode) => ({
  [ORDER_DATA_NAME.PROMO_CODE]: promocode,
});

export function convertAddToCart(product, data) {
  if (data.type === 0) {
    return {
      id: product.id,
      type: data.type,
      masterClass: product,
      program: data.program ? data.program : product.programs[0].id,
    };
  }
  if (data.type === 1 || data.type === 2) {
    return {
      id: product.id,
      type: data.type,
      patternProduct: product,
      size: data.size ? data.size : product.sizes[0].id,
    };
  }
  if (data.type === 3) {
    return {
      id: product.id,
      type: data.type,
      sewingProduct: product,
      size: data.size ? data.size : product.sizes[0].id,
      color: data.color ? data.color : product.colors[0].id,
      count: data.count ?? 1,
    };
  }
}

export function reduceBascketState(bascketState) {
  return bascketState.reduce(
    (acc, i) => {
      if (i.type === 0) {
        const item = constructorMasterClassItem(i);
        acc.itemsMaster.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      if (i.type === 1 || i.type === 2) {
        const item = constructorPatternItem(i);
        acc.itemsPatterns.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      if (i.type === 3) {
        const item = constructorSewingGoodsItem(i);
        acc.itemsGoods.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      return acc;
    },
    { itemsGoods: [], itemsMaster: [], itemsPatterns: [], price: 0 },
  );
}

const constructorMasterClassItem = (data) => {
  const program =
    data.masterClass.programs.find(({ id }) => id === data.program) ??
    data.masterClass.programs[0];
  const totalPrice = calcTotalPrice(program.price, data.masterClass.discount);
  return {
    id: data.masterClass.id,
    image: data.masterClass.images[0].fileUrl,
    name: data.masterClass.titleRu,
    vendorCode: program.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: { id: program.id, value: program.programNameRu },
      category: data.masterClass.categories[0].textRu,
    },
    programsOptions: data.masterClass.programs.map((item) => ({
      id: item.id,
      tid: item.programNameRu,
    })),
  };
};

const constructorSewingGoodsItem = (data) => {
  const count = data.count ?? 1;
  const size =
    data.sewingProduct.sizes.find(({ id }) => id === data.size) ??
    data.sewingProduct.sizes[0];
  const color =
    data.sewingProduct.colors.find(({ id }) => id === data.color) ??
    data.sewingProduct.colors[0];

  const totalPrice =
    calcTotalPrice(size.price, data.sewingProduct.discount) * count;

  return {
    id: data.sewingProduct.id,
    image: data.sewingProduct.images[0].fileUrl,
    name: data.sewingProduct.titleRu,
    vendorCode: size.vendorCode,
    count: count,
    maxCount: size.count,
    totalPrice: totalPrice,
    params: {
      size: { id: size.id, value: size.size },
      color: { id: color.id, value: color.color },
      category: data.sewingProduct.categories[0].textRu,
    },
    sizesOptions: data.sewingProduct.sizes.map((item) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
    })),
    colorsOptions: data.sewingProduct.colors.map((item) => ({
      id: item.id,
      tid: item.color,
      price: item.price,
    })),
  };
};

const constructorPatternItem = (data) => {
  const size =
    data.patternProduct.sizes.find(({ id }) => id === data.size) ??
    data.patternProduct.sizes[0];

  const totalPrice = calcTotalPrice(size.price, data.patternProduct.discount);

  return {
    id: data.patternProduct.id,
    image: data.patternProduct.images[0].fileUrl,
    name: data.patternProduct.titleRu,
    vendorCode: size.vendorCode,
    totalPrice: totalPrice,
    params: {
      size: { id: size.id, value: size.size },
      format:
        data.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
      complexity: data.patternProduct.complexity,
      category: data.patternProduct.categories[0].textRu,
    },
    sizesOptions: data.patternProduct.sizes.map((item) => ({
      id: item.id,
      tid: item.size,
    })),
  };
};

// вспомогательное
const calcTotalPrice = (price, discount) => price - price * (discount / 100);
