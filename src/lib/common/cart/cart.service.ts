import {
  PRODUCT_KEY,
  SEWING_PRODUCT_KEY,
  PATTERN_PRODUCT_KEY,
  MASTER_CLASS_KEY,
  SewingProductPropType,
  PatternProductPropType,
  MasterClassPropType,
} from './cart.type';

export const initialCartState = {
  sewingProduct: [],
  patternProduct: [],
  masterClass: [],
  total: 0,
  quantity: 0,
};

export const incrementProduct = (
  state: any,
  category: string,
  id: number | string,
) => {
  switch (category) {
    case 'sewingProduct':
      const sewingProduct = state.sewingProduct.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (sewingProduct.quantity + 1 <= sewingProduct.limit) {
        state.total = state.total + sewingProduct[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity + 1;
      }

      state.sewingProduct = state.sewingProduct.map((p: any) =>
        p.id === id && p.quantity + 1 <= p.limit
          ? { ...p, quantity: p.quantity + 1 }
          : { ...p },
      );
      return state;
    case 'patternProduct':
      const patternProduct = state.patternProduct.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (patternProduct.quantity + 1 <= patternProduct.limit) {
        state.total = state.total + patternProduct[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity + 1;
      }

      state.patternProduct = state.patternProduct.map((p: any) => {
        return p.id === id && p.quantity + 1 <= p.limit
          ? { ...p, quantity: p.quantity + 1 }
          : { ...p };
      });
      return state;
    case 'masterClass':
      const masterClass = state.masterClass.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (masterClass.quantity + 1 <= masterClass.limit) {
        state.total = state.total + masterClass[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity + 1;
      }

      state.masterClass = state.masterClass.map((p: any) =>
        p.id === id && p.quantity + 1 <= p.limit
          ? { ...p, quantity: p.quantity + 1 }
          : { ...p },
      );
      return state;

    default:
      return state;
  }
};
export const decrementProduct = (
  state: any,
  category: string,
  id: number | string,
) => {
  switch (category) {
    case 'sewingProduct':
      const sewingProduct = state.sewingProduct.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (sewingProduct.quantity - 1 >= 1) {
        state.total = state.total - sewingProduct[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity - 1;
      }

      state.sewingProduct = state.sewingProduct.map((p: any) =>
        p.id === id && p.quantity - 1 >= 1
          ? { ...p, quantity: p.quantity - 1 }
          : { ...p },
      );
      return state;
    case 'patternProduct':
      const patternProduct = state.patternProduct.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (patternProduct.quantity - 1 >= 1) {
        state.total = state.total - patternProduct[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity - 1;
      }

      state.patternProduct = state.patternProduct.map((p: any) =>
        p.id === id && p.quantity - 1 >= 1
          ? { ...p, quantity: p.quantity - 1 }
          : { ...p },
      );
      return state;
    case 'masterClass':
      const masterClass = state.masterClass.find(
        (p: any) => p[PRODUCT_KEY.ID] === id,
      );
      if (masterClass.quantity - 1 >= 1) {
        state.total = state.total - masterClass[PRODUCT_KEY.PRICE];
        state.quantity = state.quantity - 1;
      }

      state.masterClass = state.masterClass.map((p: any) =>
        p.id === id && p.quantity - 1 >= 1
          ? { ...p, quantity: p.quantity - 1 }
          : { ...p },
      );
      return state;

    default:
      return state;
  }
};
export const changeSewingProductParametrs = (
  state: any,
  id: number | string,
  size: string,
  color: string,
) => {
  state.sewingProduct = state.sewingProduct.map((p: any) =>
    p.id === id ? { ...p, size, color } : { ...p },
  );
  return state;
};
export const changePatternProductParametrs = (
  state: any,
  id: number | string,
  size: string,
  format: string,
) => {
  state.patternProduct = state.patternProduct.map((p: any) =>
    p.id === id ? { ...p, size, format } : { ...p },
  );
  return state;
};
export const changeMasterClassParametrs = (
  state: any,
  id: number | string,
  programm: string,
) => {
  state.masterClass = state.masterClass.map((p: any) =>
    p.id === id ? { ...p, programm } : { ...p },
  );
  return state;
};
export const addSewingProduct = (product: SewingProductPropType) => {
  const {
    state,
    id,
    image,
    name,
    color,
    colorEnum,
    size,
    sizeEnum,
    category,
    quantity = 1,
    price,
    limit,
  } = product;
  state.total = state.total + price;
  state.quantity = state.quantity + quantity;
  state.sewingProduct.push({
    [SEWING_PRODUCT_KEY.ID]: id,
    [SEWING_PRODUCT_KEY.LIMIT]: limit,
    [SEWING_PRODUCT_KEY.IMAGE]: image,
    [SEWING_PRODUCT_KEY.NAME]: name,
    [SEWING_PRODUCT_KEY.QUANTITY]: quantity,
    [SEWING_PRODUCT_KEY.PRICE]: price,
    [SEWING_PRODUCT_KEY.COLOR]: color,
    [SEWING_PRODUCT_KEY.COLOR_ENUM]: colorEnum,
    [SEWING_PRODUCT_KEY.SIZE]: size,
    [SEWING_PRODUCT_KEY.SIZE_ENUM]: sizeEnum,
    [SEWING_PRODUCT_KEY.CATEGORY]: category,
  });
  return state;
};
export const addPatternProduct = (product: PatternProductPropType) => {
  const {
    state,
    id,
    limit,
    image,
    name,
    size,
    sizeEnum,
    format,
    formatEnum,
    quantity = 1,
    price,
  } = product;
  state.total = state.total + price;
  state.quantity = state.quantity + quantity;
  state.patternProduct.push({
    [PATTERN_PRODUCT_KEY.ID]: id,
    [PATTERN_PRODUCT_KEY.LIMIT]: limit,
    [PATTERN_PRODUCT_KEY.IMAGE]: image,
    [PATTERN_PRODUCT_KEY.NAME]: name,
    [PATTERN_PRODUCT_KEY.QUANTITY]: quantity,
    [PATTERN_PRODUCT_KEY.PRICE]: price,
    [PATTERN_PRODUCT_KEY.SIZE]: size,
    [PATTERN_PRODUCT_KEY.SIZE_ENUM]: sizeEnum,
    [PATTERN_PRODUCT_KEY.FORMAT]: format,
    [PATTERN_PRODUCT_KEY.FORMAT_ENUM]: formatEnum,
  });
  return state;
};
export const addMasterClass = (product: MasterClassPropType) => {
  const {
    state,
    id,
    limit,
    image,
    name,
    quantity = 1,
    price,
    programm,
    programmEnum,
  } = product;
  state.total = state.total + price;
  state.quantity = state.quantity + quantity;
  state.masterClass.push({
    [MASTER_CLASS_KEY.ID]: id,
    [MASTER_CLASS_KEY.LIMIT]: limit,
    [MASTER_CLASS_KEY.IMAGE]: image,
    [MASTER_CLASS_KEY.NAME]: name,
    [MASTER_CLASS_KEY.QUANTITY]: quantity,
    [MASTER_CLASS_KEY.PRICE]: price,
    [MASTER_CLASS_KEY.PROGRAMM]: programm,
    [MASTER_CLASS_KEY.PROGRAMM_ENUM]: programmEnum,
  });
  return state;
};
export const deleteSewingProduct = (state: any, id: number | string) => {
  const product = state.sewingProduct.find(
    (p: any) => p[PRODUCT_KEY.ID] === id,
  );
  state.total =
    state.total - product[PRODUCT_KEY.PRICE] * product[PRODUCT_KEY.QUANTITY];
  state.quantity = state.quantity - product[PRODUCT_KEY.QUANTITY];

  state.sewingProduct = state.sewingProduct.filter(
    (p: any) => p[SEWING_PRODUCT_KEY.ID] !== id,
  );

  return state;
};
export const deletePatternProduct = (state: any, id: number | string) => {
  const product = state.patternProduct.find(
    (p: any) => p[PRODUCT_KEY.ID] === id,
  );
  state.total =
    state.total - product[PRODUCT_KEY.PRICE] * product[PRODUCT_KEY.QUANTITY];
  state.quantity = state.quantity - product[PRODUCT_KEY.QUANTITY];

  state.patternProduct = state.patternProduct.filter(
    (p: any) => p[PATTERN_PRODUCT_KEY.ID] !== id,
  );
  return state;
};
export const deleteMasterClass = (state: any, id: number | string) => {
  const product = state.masterClass.find((p: any) => p[PRODUCT_KEY.ID] === id);
  state.total =
    state.total - product[PRODUCT_KEY.PRICE] * product[PRODUCT_KEY.QUANTITY];
  state.quantity = state.quantity - product[PRODUCT_KEY.QUANTITY];

  state.masterClass = state.masterClass.filter(
    (p: any) => p[MASTER_CLASS_KEY.ID] !== id,
  );
  return state;
};
