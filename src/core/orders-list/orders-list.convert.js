export const convertPurchasesData = (data) => {
  const firstPurchaseProduct = (data.purchaseProducts ?? [])[0] ?? {};
  const { productName, fetchedProduct } = getProduct(firstPurchaseProduct);

  return {
    id: data.id,
    params: [
      firstPurchaseProduct?.color && { name: 'ORDERS.TABLE.BODY.COLOR', value: firstPurchaseProduct.color },
      firstPurchaseProduct?.size && { name: 'ORDERS.TABLE.BODY.SIZE', value: firstPurchaseProduct.size },
      firstPurchaseProduct?.type && { name: 'ORDERS.TABLE.BODY.CATEGORY', value: firstPurchaseProduct.type },
      firstPurchaseProduct?.quantity && { name: 'ORDERS.TABLE.BODY.QUANTITY', value: firstPurchaseProduct.quantity },
      firstPurchaseProduct?.format && { name: 'ORDERS.TABLE.BODY.FORMAT', value: firstPurchaseProduct.format },
      firstPurchaseProduct?.program && { name: 'ORDERS.TABLE.BODY.PROGRAM', value: firstPurchaseProduct.program },
    ],
    otherParams: [
      data.fullName && { name: 'ORDERS.TABLE.BODY.FULL_NAME', value: data.fullName },
      data.city && { name: 'ORDERS.TABLE.BODY.CITY_AND_EXACT_DELIVERY_ADDRESS', value: data.city },
      data.typeOfPayment && { name: 'ORDERS.TABLE.BODY.PAYMENT_METHOD', value: data.typeOfPayment },
      data.phoneNumber && { name: 'ORDERS.TABLE.BODY.PHONE', value: data.phoneNumber },
    ],
    price: data.price,
    status: data.orderStatus,
    name: data.orderNumber,
    productId: fetchedProduct?.id,
    image: (fetchedProduct?.images ? fetchedProduct?.images[0] : fetchedProduct?.imageUrl)?.fileUrl,
    productName,
  };
};

const getProduct = (product) => {
  const fetchedProduct = (
    product.masterClassId
    || product.patternProductId
    || product.sewingProductId
    || product.postId
  );

  let productName;

  if (product.masterClassId) {
    productName = 'master-class';
  } else if (product.patternProductId) {
    productName = 'patterns';
  } else if (product.sewingProductId) {
    productName = 'sewing-goods';
  } else if (product.postId) {
    productName = 'article';
  }

  return {
    productName, fetchedProduct,
  };
};
