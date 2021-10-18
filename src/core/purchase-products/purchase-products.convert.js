import { SEWING_GOODS_PAGE_ROUTE_PATH } from '../sewing-goods-page';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from '../master-class-page';
import { PATTERNS_PAGE_ROUTE_PATH } from '../patterns-page';

const getPrice = (price = 0, discount = 0, count = 1) => {
  const discountPrice = Number(price) * (Number(discount) / 100);
  const totalPrice = (Number(price) - discountPrice) * Number(count);
  return totalPrice;
};

export function performPurchaseProduct(row) {
  console.log(row);
  const purchaseProducts = row.reduce((acc, purchase) => {
    purchase.purchaseProducts.forEach((purchaseProduct) => {
      purchaseProduct.status = purchase?.orderStatus ?? 'Неизвестно';
      purchaseProduct.email = purchase?.email;
      purchaseProduct.fullName = purchase?.fullName;
      purchaseProduct.city = purchase?.city;
      purchaseProduct.phoneNumber = purchase?.phoneNumber;
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
    path: SEWING_GOODS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: row.id } },
    image: row.sewingProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount, row.totalCount),
    totalDiscount: row.totalDiscount,
    status: row.status,
    vendorCode: row.size.vendorCode,
    params: {
      count: row.totalCount,
      size: { id: row.size.id, value: row.size.size },
      color: { id: row.color.id, value: row.color.color },
      category: row.sewingProductId.categories[0].textRu,
    },
    otherParams: {
      email: row.email,
      fullName: row.fullName,
      city: row.city,
      phoneNumber: row.phoneNumber,
    },
  };
};
const performMasterClassProduct = (row) => {
  return {
    id: row.id,
    name: row.masterClassId.titleRu,
    path: MASTER_CLASS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: row.id } },
    image: row.masterClassId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    vendorCode: row.program.vendorCode,
    params: {
      program: { id: row.program.id, value: row.program.programNameRu },
    },
    otherParams: {
      email: row.email,
      fullName: row.fullName,
      city: row.city,
      phoneNumber: row.phoneNumber,
    },
  };
};
const performPatternProductDigital = (row) => {
  return {
    id: row.id,
    name: row.patternProductId.titleRu,
    path: PATTERNS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: row.id } },
    image: row.patternProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    filePDF: row.size.filePdf?.fileUrl,
    vendorCode: row.size.vendorCode,
    params: {
      size: { id: row.size.id, value: row.size.size },
      format: 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC',
    },
    otherParams: {
      email: row.email,
      fullName: row.fullName,
      city: row.city,
      phoneNumber: row.phoneNumber,
    },
  };
};
const performPatternProductAnalogue = (row) => {
  return {
    id: row.id,
    name: row.patternProductId.titleRu,
    path: PATTERNS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: row.id } },
    image: row.patternProductId.images[0]?.fileUrl,
    totalPrice: getPrice(row.totalPrice, row.totalDiscount),
    totalDiscount: row.totalDiscount,
    vendorCode: row.size.vendorCode,
    params: {
      size: { id: row.size.id, value: row.size.size },
      format: 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
    },
    otherParams: {
      email: row.email,
      fullName: row.fullName,
      city: row.city,
      phoneNumber: row.phoneNumber,
    },
    status: row.status,
  };
};
