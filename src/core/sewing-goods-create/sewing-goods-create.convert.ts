import {
  BasicFileType,
  BasicOptionType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';
import {
  SewingProductDto,
  SewingProductOptionDto,
} from 'src/lib/basic-types/create';
import { convertCategories } from 'src/lib/common/block-categories/categories.convert';
import { convertRecommendations } from 'src/lib/common/block-select-recomendation';
import {
  SewingGoodsOptionValues,
  SewingGoodsValues,
  SEWING_GOODS_CREATE_FIELD_NAME,
} from './sewing-goods-create.type';

export function convertForSave(
  images: BasicFileType[],
  values: SewingGoodsValues,
): SewingProductDto {
  const categories = values[SEWING_GOODS_CREATE_FIELD_NAME.CATEGORIES].map(
    (item) => ({
      id: item.basicId,
    }),
  );

  return {
    vendorCode: values.vendorCode,

    titleRu: values.titleRu,
    modifierRu: values.modifierRu,

    descriptionRu: values.descriptionRu,
    images: images,
    recommendation: values.recommendation,
    categories: categories,

    price: values.optionType === 0 ? +(+(values.price || 0)).toFixed(2) : null,
    discount: values.optionType === 0 ? +values.discount : null,
    count:
      values.isCount && values.optionType === 0
        ? Math.floor(+(values.count || 0))
        : null,
    length:
      values.isLength && values.optionType === 0
        ? +(+(values.length || 0)).toFixed(2)
        : null,

    isCount: values.isCount,
    isLength: values.isLength,
    optionType: values.optionType,
    deleted: !values.isPublic,
    inEnglish: values.inEnglish,

    options: optionsForSave(
      values.options,
      values.isCount,
      values.isLength,
      values.optionType,
    ),
  };
}

function optionsForSave(
  options: SewingGoodsOptionValues[],
  isCount: boolean,
  isLength: boolean,
  type: 0 | 1 | 2 | 3,
): SewingProductOptionDto[] {
  if (type === 0) return [];
  return options.map((item) => ({
    id: item.id,
    size: type === 1 || type === 2 ? item.size : null,
    colorRu: type === 1 || type === 3 ? item.colorRu : null,
    price: +(+(item.price || 0)).toFixed(2),
    discount: +(item.discount || 0),
    count: isCount ? Math.floor(+(item.count || 0)) : null,
    length: isLength ? +(+(item.length || 0)).toFixed(2) : null,
    optionVisibility: item.optionVisibility,
  }));
}

export function convertForChange(data: BasicSewingGoodType): SewingGoodsValues {
  return {
    vendorCode: data.vendorCode,

    titleRu: data.titleRu,
    modifierRu: data.modifierRu,

    descriptionRu: data.descriptionRu || '',

    images: data.images,
    recommendation: convertRecommendations(data.recommendation),
    categories: convertCategories(data.categories, ''),

    price: +data.price,
    discount: data.discount,
    count: data.count,
    length: +data.length,

    isCount: data.isCount,
    isLength: data.isLength,
    optionType: data.optionType,
    isPublic: !data.deleted,
    inEnglish: !!data.inEnglish,

    options: optionsForChange(data?.options),
  };
}
function optionsForChange(
  options: BasicOptionType[] = [],
): SewingGoodsOptionValues[] {
  return options.map((item) => ({
    id: item.id,
    size: item.size,
    colorRu: item.colorRu,
    price: +item.price,
    discount: item.discount,
    count: item.count,
    length: +item.length,
    optionVisibility: item.optionVisibility,
  }));
}
