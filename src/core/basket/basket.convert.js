import {
  FORMALIZATION_ORDERING_FIELD_NAME,
  BASKET_DATA_NAME,
  BASKET_DATA_KEY,
} from './basket.type';

export const convertBasketFormData = (values, basketData, price, discount) => {
  const sewingProducts = basketData?.[BASKET_DATA_KEY.SEWING_PRODUCT].map(
    (e) => ({
      id: e.id,
    }),
  );
  const patternProducts = basketData?.[BASKET_DATA_KEY.PATTERN_PRODUCT].map(
    (e) => ({
      id: e.id,
    }),
  );
  const masterClassProducts = basketData?.[BASKET_DATA_KEY.MASTER_CLASS].map(
    (e) => ({
      id: e.id,
    }),
  );

  const purchaseProducts = [
    ...sewingProducts,
    ...patternProducts,
    ...masterClassProducts,
  ];

  return {
    purchase: {
      price: price,
      discount: discount,
      fullName: values[FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME],
      typeOfDelivery:
        values[
          FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_DELIVERY_METHOD
        ].toString(),
      city: values[FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY],
      typeOfPayment:
        values[
          FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_PAYMENT_METHOD
        ].toString(),
      phoneNumber:
        values[FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER],
      comment: values[FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE],
    },
    purchaseProducts: purchaseProducts,
  };
};

export const convertPromoCodeData = (data) => ({
  [BASKET_DATA_NAME.PROMO_CODE]:
    data[FORMALIZATION_ORDERING_FIELD_NAME.PROMO_CODE],
});

export const performBasketLoadData = (row) => {
  const isEmpty = row[BASKET_DATA_NAME.COUNT_OF_PRODUCTS] === 0;

  const purchaseProducts =
    row[BASKET_DATA_NAME.BASKET_DATA][BASKET_DATA_NAME.PURCHASE_PRODUCTS];

  const sewingProducts = purchaseProducts.filter(
    (e) => e[BASKET_DATA_NAME.SEWING_PRODUCT] !== null,
  );
  const patternProducts = purchaseProducts.filter(
    (e) => e[BASKET_DATA_NAME.PATTERN_PRODUCT] !== null,
  );
  const masterClassProducts = purchaseProducts.filter(
    (e) => e[BASKET_DATA_NAME.MASTER_CLASS] !== null,
  );

  const performedSewingProducts = sewingProducts.length
    ? sewingProducts.map((p) => ({
        id: p.id,
        name: p.sewingProductId.titleRu,
        quantity: p.quantity,
        price:
          p.quantity *
          (p.sewingProductId.sizes.find((e) => e.size === p.size).price +
            p.sewingProductId.colors.find((e) => e.color === p.color).price),
        image: p.sewingProductId.images[0].fileUrl,
        limit: p.sewingProductId.count,
        size: p.size,
        category: p.type,
        color: p.color,
        sizeEnum: p.sewingProductId.sizes.map((e) => e.size),
        colorEnum: p.sewingProductId.colors.map((e) => e.color),
      }))
    : [];
  const performedPatternProducts = patternProducts.length
    ? patternProducts.map((p) => ({
        id: p.id,
        name: p.patternProductId.titleRu,
        quantity: p.quantity,
        price:
          p.quantity *
          p.patternProductId.sizes.find((e) => e.size === p.size).price,
        image: p.patternProductId.images[0].fileUrl,
        limit: p.patternProductId.count || 1000,
        format: p.format,
        size: p.size,
        sizeEnum: p.patternProductId.sizes.map((e) => e.size),
      }))
    : [];
  const performedMasterClassProducts = masterClassProducts.length
    ? masterClassProducts.map((p) => ({
        id: p.id,
        name: p.masterClassId.titleRu,
        quantity: p.quantity,
        price:
          p.quantity *
          p.masterClassId.programs.find((e) => e.programNameRu === p.program)
            .price,
        image: p.masterClassId.images[0].fileUrl,
        limit: p.masterClassId.count || 1000,
        programm: p.program,
        programmEnum: p.masterClassId.programs.map((e) => e.programNameRu),
      }))
    : [];

  return {
    [BASKET_DATA_KEY.SEWING_PRODUCT]: performedSewingProducts,
    [BASKET_DATA_KEY.PATTERN_PRODUCT]: performedPatternProducts,
    [BASKET_DATA_KEY.MASTER_CLASS]: performedMasterClassProducts,
    isEmpty: isEmpty,
  };
};

export const performBasketLoadUserInfoData = (data) => ({
  [BASKET_DATA_KEY.FULLNAME]: data[BASKET_DATA_NAME.FULLNAME],
  [BASKET_DATA_KEY.DELIVERY_TYPE]: data[BASKET_DATA_NAME.DELIVERY_TYPE],
  [BASKET_DATA_KEY.LOCATION]: data[BASKET_DATA_NAME.LOCATION],
  [BASKET_DATA_KEY.PHONE]: data[BASKET_DATA_NAME.PHONE],
});

export const performPromoCodeData = (data) => ({
  [BASKET_DATA_KEY.DISCOUNT]: data[BASKET_DATA_NAME.DISCOUNT],
});
