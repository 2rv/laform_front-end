import {
  BasicCategoryType,
  BasicPurchaseProductType,
} from 'src/lib/basic-types';
import { TableParamsProps } from 'src/lib/common/block-table';

interface SewingGoodsProuctType {
  id: string;
  title: string;
  description?: string;
  images: string[];
  categories: BasicCategoryType[];
  price: number;
  discount?: number;
  count?: number;
  length?: number;
  shippingPrice: number;
  vendorCode: string;
  params: TableParamsProps;
  otherParams: TableParamsProps;
}

export function convertSewingGoodData(
  data: BasicPurchaseProductType,
): SewingGoodsProuctType {
  return {
    id: data.id,
    title: data.sewingProductId?.titleRu,
    description: data.sewingProductId?.descriptionRu,
    images: data.sewingProductId?.images.map((image) => image?.fileUrl),
    categories: data.sewingProductId?.categories,
    price: +data.totalPrice,
    discount: +data.totalDiscount,
    count: +data.totalCount,
    length: +data.totalLength,
    shippingPrice: +data.purchase.shippingPrice,
    vendorCode: data.optionId?.vendorCode || data.sewingProductId?.vendorCode,
    params: {
      color: data.optionId?.colorRu,
      size: data.optionId?.size,
      count: +data.totalCount,
      length: +data.totalLength,
      type: data.type,
    },
    otherParams: {
      address: data.purchase.address,
    },
  };
}
