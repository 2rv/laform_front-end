interface categoryType {
  id: string;
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
  recommendation: recommendationType;
  categories: categoryType[];
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  isCount: boolean;
  isLength: boolean;
  optionType: 0 | 1 | 2 | 3;
  options: optionType[];
}
interface categoryValueType {
  basicId: string;
}
interface formValueType {
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  recommendation: recommendationProductType[];
  categories: categoryValueType[];
  price: number;
  discount: number;
  count: number;
  length: number;
  isCount: boolean;
  isLength: boolean;
  optionType: 0 | 1 | 2 | 3;
  options: optionType[];
}

export function convertForUpload(
  images: imageType[],
  values: formValueType,
): dataValueType {
  return {
    titleRu: values.titleRu,
    descriptionRu: values.descriptionRu,
    modifierRu: values.modifierRu,
    images: images,
    recommendation: { recommendationProducts: values.recommendation },
    categories: values.categories.map((i) => ({ id: i.basicId })),
    price:
      values.optionType === 0
        ? Number(values.price.toFixed(2)) || 0
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
      values.isLength && values.optionType === 0
        ? Number(values.length.toFixed(2))
        : undefined,
    isCount: values.isCount,
    isLength: values.isLength,
    optionType: values.optionType,
    options: convertOptions(
      values.options,
      values.isCount,
      values.isLength,
      values.optionType,
    ),
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
      price: Number(item.price?.toFixed(2)),
      discount: Number(item.discount) ? item.discount : undefined,
      count: isCount ? Number(item.count) : undefined,
      length: isLength ? Number(item.length?.toFixed(2)) : undefined,
    };
  });
}
