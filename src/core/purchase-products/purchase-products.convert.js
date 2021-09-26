import { SEWING_GOODS_PAGE_ROUTE_PATH } from '../sewing-goods-page';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from '../master-class-page';
import { PATTERNS_PAGE_ROUTE_PATH } from '../patterns-page';

const getPrice = (totalPrice, totalDiscount) => {
  return Boolean(totalDiscount)
    ? Number(totalPrice) * (1 - Number(totalDiscount) / 100)
    : totalPrice;
};

export function performPurchaseProduct(row) {
  const purchaseProducts = row.reduce((acc, purchase) => {
    purchase.purchaseProducts.forEach((purchaseProduct) => {
      purchaseProduct.status = purchase.orderStatus;
      acc.push(purchaseProduct);
    });
    return acc;
  }, []);
  return purchaseProducts.reduce(
    (acc, i) => {
      if (i.type === 0) {
        const item = performMasterClassProduct(i);
        acc.masterClass.push(item);
      }
      if (i.type === 1) {
        const item = performPatternProductDigital(i);
        acc.patternDigital.push(item);
      }
      if (i.type === 2) {
        const item = performPatternProductAnalogue(i);
        acc.patternAnalogue.push(item);
      }
      if (i.type === 3) {
        const item = performPurchaseSewingProduct(i);
        acc.sewingGoods.push(item);
      }
      return acc;
    },
    {
      sewingGoods: [],
      masterClass: [],
      patternDigital: [],
      patternAnalogue: [],
    },
  );
}

const performPurchaseSewingProduct = (row) => {
  return {
    id: row.id,
    name: row.sewingProductId.titleRu,
    path: `${SEWING_GOODS_PAGE_ROUTE_PATH}${row.id}`,
    image: row.sewingProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    status: row.status,
    vendorCode: row.size.vendorCode,
    params: {
      size: { id: row.size.id, value: row.size.size },
      color: { id: row.color.id, value: row.color.color },
      category: row.sewingProductId.categories[0].textRu,
    },
  };
};
const performMasterClassProduct = (row) => {
  return {
    id: row.id,
    name: row.masterClassId.titleRu,
    path: `${MASTER_CLASS_PAGE_ROUTE_PATH}${row.id}`,
    image: row.masterClassId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    vendorCode: row.program.vendorCode,
    params: {
      program: { id: row.program.id, value: row.program.programNameRu },
    },
  };
};
const performPatternProductDigital = (row) => {
  return {
    id: row.id,
    name: row.patternProductId.titleRu,
    path: `${PATTERNS_PAGE_ROUTE_PATH}${row.id}`,
    image: row.patternProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    filePDF: row.size.filePdf?.fileUrl,
    vendorCode: row.size.vendorCode,
    params: {
      size: { id: row.size.id, value: row.size.size },
      format:
        row.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
    },
  };
};
const performPatternProductAnalogue = (row) => {
  return {
    id: row.id,
    name: row.patternProductId.titleRu,
    path: `${PATTERNS_PAGE_ROUTE_PATH}${row.id}`,
    image: row.patternProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    vendorCode: row.size.vendorCode,
    params: {
      size: { id: row.size.id, value: row.size.size },
      format:
        row.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
    },
    status: row.status,
  };
};
