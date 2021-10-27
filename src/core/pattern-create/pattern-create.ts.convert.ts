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
interface recommendationType {
  recommendationProducts: recommendationProductType[];
}
interface optionType {
  size?: string;
  price?: number;
  filePdf?: imageType;
  discount?: number;
  count?: number;
}
interface dataValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  materialRu: any;
  images: imageType[];
  recommendation: recommendationType;
  categories: categoryType[];
  complexity: number;
  price?: number;
  discount?: number;
  filePdf?: imageType;
  count?: number;
  isCount: boolean;
  optionType: 0 | 2;
  options: optionType[];
}
interface categoryValueType {
  basicId: string;
}
interface formValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  materialRu: any;
  recommendation: recommendationProductType[];
  categories: categoryValueType[];
  complexity: number;
  price?: number;
  filePdf?: any;
  discount?: number;
  count?: number;
  isCount: boolean;
  optionType: 0 | 2;
  options: optionType[];
  images?: any;
}

export function convertForUpload(
  images: imageType[],
  filePdf: imageType[],
  values: formValueType,
): dataValueType {
  return {
    type: values.type,
    titleRu: values.titleRu,
    descriptionRu: values.descriptionRu,
    modifierRu: values.modifierRu,
    materialRu: values.materialRu,
    images: images.map((item) => ({
      id: item.id,
    })),
    recommendation: { recommendationProducts: values.recommendation },
    categories: values.categories.map((i) => ({ id: i.basicId })),
    complexity: values.complexity,
    filePdf:
      values.optionType === 0 && values.type === 1 ? filePdf[0] : undefined,
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
      values.isCount && values.optionType === 0 && values.type === 2
        ? Number(values.count)
        : undefined,
    isCount: values.isCount,
    optionType: values.optionType,
    options: convertOptions(
      values.options,
      values.isCount,
      values.type,
      filePdf,
    ),
  };
}

function convertOptions(
  options: optionType[],
  isCount: boolean,
  type: 1 | 2,
  filePdf: any,
): optionType[] {
  return options.map((item, index: number) => {
    return {
      size: item.size,
      price: Number(item.price?.toFixed(2)),
      discount: Number(item.discount) ? item.discount : undefined,
      count: isCount && type === 2 ? Number(item.count) : undefined,
      filePdf: type === 1 ? filePdf[index] : undefined,
    };
  });
}

export function convertForPreUploadPDFFiles(formValues: formValueType) {
  if (formValues.type === 2) return [];
  else if (formValues.optionType === 0) return [formValues.filePdf];
  else return formValues.options.map((item) => item.filePdf);
}

export function convertForChange(rowData: dataValueType): formValueType {
  return {
    titleRu: rowData.titleRu,
    type: rowData.type,
    descriptionRu: rowData.descriptionRu,
    modifierRu: rowData.modifierRu,
    images: rowData.images,
    recommendation: convertRecommendations(
      rowData.recommendation.recommendationProducts,
    ),
    categories: rowData.categories.map((i) => ({
      basicId: i.id,
      tid: i.categoryNameRu,
    })),
    price: Number(rowData.price),
    filePdf: rowData.filePdf,
    discount: rowData.discount,
    count: rowData.count,
    isCount: rowData.isCount,
    optionType: rowData.optionType,
    options: rowData.options,
    complexity: rowData.complexity,
    materialRu: rowData.materialRu,
  };
}

function convertRecommendations(recommendation: any) {
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
