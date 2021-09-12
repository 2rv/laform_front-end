export const convertBasketFormData = (data) => ({
  // [BASKET_DATA_NAME.FULLNAME]:
  //   data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL],
  // [BASKET_DATA_NAME.PASSWORD]:
  //   data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD],
});

export const performBasketLoadUserInfoData = (data) => ({
  //   [BASKET_DATA_KEY.FULLNAME]: data[BASKET_DATA_NAME.FULLNAME],
  //   [BASKET_DATA_KEY.DELIVERY_TYPE]: data[BASKET_DATA_NAME.DELIVERY_TYPE],
  //   [BASKET_DATA_KEY.LOCATION]: data[BASKET_DATA_NAME.LOCATION],
  //   [BASKET_DATA_KEY.PHONE]: data[BASKET_DATA_NAME.PHONE],
});

export function convertAddToCart(product, data) {
  if (data.type === 0) {
    return {
      masterClass: product,
      type: data.type,
      program: data.program ?? null,
    };
  }
  if (data.type === 1) {
    return {
      patternProduct: product,
      type: data.type,
    };
  }
  if (data.type === 2) {
    return {
      patternProduct: product,
      type: data.type,
      size: data.size ?? null,
    };
  }
  if (data.type === 3) {
    return {
      sewingProduct: product,
      type: data.type,
      size: data.size ?? null,
      color: data.color ?? null,
      count: data.count ?? 0,
    };
  }
}
export function reduceBascketState(bascketState) {
  return bascketState.reduce(
    (acc, i) => {
      if (i.type === 0) {
        const item = constructorMasterClassItem(i);
        acc.itemsMaster.push(item);
      }
      if (i.type === 1) {
        const item = constructorElectronicPatternItem(i);
        acc.itemsPatterns.push(item);
      }
      if (i.type === 2) {
        const item = constructorPrintPatternItem(i);
        acc.itemsPatterns.push(item);
      }
      if (i.type === 3) {
        const item = constructorSewingGoodsItem(i);
        acc.itemsGoods.push(item);
      }
      return acc;
    },
    { itemsGoods: [], itemsMaster: [], itemsPatterns: [] },
  );
}

const constructorMasterClassItem = (data) => {
  const program =
    data.masterClass.programs.find(({ id }) => id === data.program) ??
    data.masterClass.programs[0];

  const totalPrice =
    program.price - program.price * (data.masterClass.discount / 100);
  return {
    id: data.masterClass.id,
    image: data.masterClass.images[0].fileUrl,
    name: data.masterClass.titleRu,
    params: {
      program: program.programNameRu,
      category: data.masterClass.categories[0].textRu,
    },
    programsOptions: data.masterClass.programs.map((item) => ({
      id: item.id,
      tid: item.programNameRu,
      price: item.price,
    })),
    totalPrice: totalPrice,
  };
};
const constructorSewingGoodsItem = (data) => {
  const size =
    data.sewingProduct.sizes.find(({ id }) => id === data.size) ??
    data.sewingProduct.sizes[0];
  const color =
    data.sewingProduct.colors.find(({ id }) => id === data.color) ??
    data.sewingProduct.colors[0];

  const totalPrice =
    size.price +
    color.price -
    (size.price + color.price) * (data.sewingProduct.discount / 100);

  return {
    id: data.sewingProduct.id,
    image: data.sewingProduct.images[0].fileUrl,
    name: data.sewingProduct.titleRu,
    params: {
      size: size.size,
      color: color.color,
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
    count: data.count ?? 0,
    maxCount: data.sewingProduct.count,
    totalPrice: totalPrice,
  };
};
const constructorElectronicPatternItem = (data) => {
  const totalPrice =
    data.patternProduct.price -
    data.patternProduct.price * (data.patternProduct.discount / 100);

  return {
    id: data.patternProduct.id,
    image: data.patternProduct.images[0].fileUrl,
    name: data.patternProduct.titleRu,
    params: {
      format: 'электронный',
      complexity: data.patternProduct.complexity,
      category: data.patternProduct.categories[0].textRu,
    },
    totalPrice: totalPrice,
  };
};
const constructorPrintPatternItem = (data) => {
  const size =
    data.patternProduct.sizes.find(({ id }) => id === data.size) ??
    data.patternProduct.sizes[0];
  const totalPrice =
    size.price - size.price * (data.patternProduct.discount / 100);

  return {
    id: data.patternProduct.id,
    image: data.patternProduct.images[0].fileUrl,
    name: data.patternProduct.titleRu,
    params: {
      size: size.size,
      format: 'печатный',
      complexity: data.patternProduct.complexity,
      category: data.patternProduct.categories[0].textRu,
    },
    sizesOptions: data.patternProduct.sizes.map((item) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
    })),
    totalPrice: totalPrice,
  };
};
