import {
  BasicCategoryType,
  BasicFileType,
  BasicPurchaseProductType,
  BasicReactEditorType,
} from 'src/lib/basic-types';
import { TableParamsProps } from 'src/lib/common/block-table';

interface PurchasePatternProuctType {
  id: string;
  type: 1 | 2;
  images: string[];
  title: string;
  categories: BasicCategoryType[];
  description?: string;
  descriptionOld?: string;
  materials: BasicReactEditorType;
  materialOld?: string;
  price: number;
  discount?: number;
  shippingPrice: number;
  count?: number;
  filesPdf: BasicFileType[];
  vendorCode: string;
  params: TableParamsProps;
  otherParams: TableParamsProps;
}

export const convertPatternData = (
  data: BasicPurchaseProductType,
): PurchasePatternProuctType => {
  return {
    id: data.id,
    type: data.patternProductId.type,
    images: data.patternProductId.images.map((image) => image?.fileUrl),
    title: data.patternProductId.titleRu,
    categories: data.patternProductId.categories,
    description: data.patternProductId.descriptionRu,
    descriptionOld: data.patternProductId.descriptionOld?.replaceAll(
      /\\n/g,
      '<br />',
    ),
    materials: data.patternProductId.materialRu,
    materialOld: data.patternProductId.materialOld
      ?.replaceAll(/\\n</g, '<')
      .replaceAll(/\\n/g, '<br />'),
    price: +data.totalPrice,
    discount: +data.totalDiscount,
    shippingPrice: +data.purchase.shippingPrice,
    count: +data.totalCount,
    filesPdf: data.optionId?.filesPdf || data.patternProductId.filesPdf,
    vendorCode: data.optionId?.vendorCode || data.patternProductId.vendorCode,
    params: {
      size: data.optionId?.size,
      count: data.totalCount,
      type: data.type,
    },
    otherParams: {
      address: data.purchase.address,
    },
  };
};
