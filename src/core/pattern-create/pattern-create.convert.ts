import {
  BasicFileType,
  BasicOptionType,
  BasicPatternType,
} from 'src/lib/basic-types';
import {
  PatternProductDto,
  PatternProductsOptionDto,
} from 'src/lib/basic-types/create';
import { convertRecommendations } from 'src/lib/common/block-select-recomendation';
import {
  PatternOptionValues,
  PatternValues,
  PATTERN_CREATE_FIELD_NAME,
} from './pattern-create.type';

export function convertForSave(
  images: BasicFileType[],
  files: BasicFileType[][],
  values: PatternValues,
): PatternProductDto {
  const categories = values[PATTERN_CREATE_FIELD_NAME.CATEGORIES].map(
    (item) => ({
      id: item.basicId,
    }),
  );

  return {
    type: values.type ? 2 : 1,
    vendorCode: values.vendorCode,

    titleRu: values.titleRu,
    modifierRu: values.modifierRu,

    descriptionRu: values.descriptionRu,
    descriptionOld: values.descriptionOld,

    materialRu: values.materialRu || null,
    materialOld: values.materialOld,

    images: images,
    recommendation: values.recommendation,
    categories: categories,

    complexity: values.complexity,

    price: values.optionType ? null : +(+values.price || 0).toFixed(2),
    discount: values.optionType ? null : +(values.discount || 0),
    count: values.optionType ? null : +(values.count || 0),

    isCount: values.isCount,
    optionType: values.optionType ? 2 : 0,
    deleted: !values.isPublic,
    inEnglish: values.inEnglish,

    filesPdf: values.optionType ? [] : files[0],

    options: optionsForSave(
      values.options,
      values.isCount,
      files,
      values.optionType,
    ),
  };
}

function optionsForSave(
  options: PatternOptionValues[] = [],
  isCount: boolean,
  files: BasicFileType[][],
  isHaveOptions: boolean,
): PatternProductsOptionDto[] {
  if (!isHaveOptions) return [];
  return options.map((item, index) => ({
    id: item.id,
    size: item.size || '',
    price: +(item.price || 0).toFixed(2),
    discount: +(item.discount || 0).toFixed(0),
    count: isCount ? +(item.count || 0) : null,
    filesPdf: files[index],
    optionVisibility: item.optionVisibility,
  }));
}

export function convertForChange(data: BasicPatternType): PatternValues {
  console.log(data);

  const categories = data.categories.map((i, index) => ({
    id: index,
    basicId: i.id,
    tid: i.categoryNameRu,
  }));
  return {
    type: data.type === 2,
    vendorCode: data.vendorCode,

    titleRu: data.titleRu,
    modifierRu: data.modifierRu,

    descriptionOld: data.descriptionOld,
    descriptionRu: data.descriptionRu || '',

    materialRu: data.materialRu || undefined,
    materialOld: data.materialOld,

    images: data.images,
    recommendation: convertRecommendations(data.recommendation),
    categories: categories,

    complexity: data.complexity,

    price: +data.price,
    discount: data.discount,
    count: data.count,

    isCount: data.isCount,
    optionType: data.optionType === 2,
    isPublic: !data.deleted,
    inEnglish: !!data.inEnglish,

    options: optionsForChange(data?.options),
    filesPdf: data.filesPdf,
  };
}

function optionsForChange(
  options: BasicOptionType[] = [],
): PatternOptionValues[] {
  return options.map((item) => ({
    id: item.id,
    size: item.size,
    price: +item.price,
    discount: item.discount,
    count: item.count,
    filesPdf: item.filesPdf,
    optionVisibility: item.optionVisibility,
  }));
}
