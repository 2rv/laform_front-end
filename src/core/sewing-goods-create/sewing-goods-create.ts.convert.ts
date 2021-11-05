interface categoryType {
  id: string;
  categoryNameRu?: string;
}
interface imageType {
  id: string;
}
interface recommendationProductType {
  masterClassId?: string;
  patternProductId?: string;
  sewingProductId?: string;
}
interface optionType {
  size?: string;
  colorRu?: string;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
}
interface dataValueType {
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  images: imageType[];
  recommendation: any;
  categories: categoryType[];
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  isCount: boolean;
  isLength: boolean;
  optionType: 0 | 1 | 2 | 3;
  options: optionType[];
  deleted?: boolean;
}
interface categoryValueType {
  basicId: string;
  tid?: string;
}
interface formValueType {
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  recommendation: recommendationProductType[];
  categories: categoryValueType[];
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  isCount: boolean;
  isLength: boolean;
  optionType: 0 | 1 | 2 | 3;
  options: optionType[];
  images?: any;
  deleted?: boolean;
}

export function convertForUpload(
  images: imageType[],
  values: formValueType,
): dataValueType {
  return {
    titleRu: values.titleRu,
    descriptionRu: values.descriptionRu,
    modifierRu: values.modifierRu,
    images: images.map((item) => ({
      id: item.id,
    })),
    recommendation: Boolean(values.recommendation.length)
      ? { recommendationProducts: values.recommendation }
      : null,

    categories: values.categories.map((i) => ({ id: i.basicId })),
    price:
      values.optionType === 0
        ? Number(Number(values.price).toFixed(2)) || 0
        : undefined,
    discount:
      values.optionType === 0
        ? Number(values.discount)
          ? values.discount
          : undefined
        : undefined,
    count:
      values.isCount && values.optionType === 0
        ? Number(values.count)
        : undefined,
    length:
      values.isLength && values.optionType === 0 ? values.length : undefined,
    isCount: values.isCount,
    isLength: values.isLength,
    optionType: values.optionType,
    options: convertOptions(
      values.options,
      values.isCount,
      values.isLength,
      values.optionType,
    ),
    deleted: values.deleted,
  };
}

function convertOptions(
  options: optionType[],
  isCount: boolean,
  isLength: boolean,
  type: 0 | 1 | 2 | 3,
): optionType[] {
  return options.map((item) => {
    if (type === 0) return [];
    return {
      size: type === 1 || type === 2 ? item.size : undefined,
      colorRu: type === 1 || type === 3 ? item.colorRu : undefined,
      price: Number(Number(item.price)?.toFixed(2)),
      discount: Number(item.discount) ? item.discount : undefined,
      count: isCount ? Number(item.count) : undefined,
      length: isLength
        ? Number(Number(item.length).toFixed(2)) || 0
        : undefined,
    };
  });
}

export function convertForChange(rowData: dataValueType): formValueType {
  return {
    titleRu: rowData.titleRu,
    descriptionRu: rowData.descriptionRu,
    modifierRu: rowData.modifierRu,
    images: rowData.images,
    recommendation: convertRecommendations(
      rowData.recommendation?.recommendationProducts,
    ),
    categories: rowData.categories?.map((i) => ({
      basicId: i.id,
      tid: i.categoryNameRu,
    })),
    price: Number(rowData.price),
    discount: rowData.discount,
    count: rowData.count,
    length: rowData.length,
    isCount: rowData.isCount,
    isLength: rowData.isLength,
    optionType: rowData.optionType,
    options: rowData.options,
    deleted: rowData.deleted,
  };
}

function convertRecommendations(recommendation: any = []) {
  return recommendation.map((item: any) => {
    return {
      masterClassId: item.masterClassId,
      patternProductId: item.patternProductId,
      postId: item.postId,
      sewingProductId: item.sewingProductId,
      type:
        item.masterClassId?.type ||
        item.patternProductId?.type ||
        item.postId?.type ||
        item.sewingProductId?.type,
    };
  });
}

export function convertForUpdateImage(
  newImages: any = [],
  formValues: formValueType,
) {
  let indexImage = 0;
  return formValues.images.map((item: any) => {
    if (!Boolean(item.id) && indexImage < newImages.length) {
      item.id = newImages[indexImage].id;
      indexImage = indexImage + 1;
    }
    return item;
  });
}
