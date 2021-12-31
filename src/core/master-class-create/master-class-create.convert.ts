import { BasicFileType, BasicMasterClassType } from 'src/lib/basic-types';
import { MasterClassDto } from 'src/lib/basic-types/create';
import { convertRecommendations } from 'src/lib/common/block-select-recomendation';
import {
  MasterClassValues,
  MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';

export function convertForSave(
  images: BasicFileType[],
  values: MasterClassValues,
): MasterClassDto {
  const categories = values[MASTER_CLASS_FIELD_NAME.CATEGORIES].map((item) => ({
    id: item.basicId,
  }));
  return {
    titleRu: values[MASTER_CLASS_FIELD_NAME.NAME],
    modifierRu: values[MASTER_CLASS_FIELD_NAME.MODIFIER],
    descriptionRu: values[MASTER_CLASS_FIELD_NAME.DESCRIPTION],
    materialRu: values[MASTER_CLASS_FIELD_NAME.MATERIAL] || { blocks: [] },
    articleRu: values[MASTER_CLASS_FIELD_NAME.ARTICLE] || { blocks: [] },
    price: +values[MASTER_CLASS_FIELD_NAME.PRICE],
    discount: +values[MASTER_CLASS_FIELD_NAME.DISCOUNT],
    categories: categories,
    images: images,
    recommendation: values[MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS],

    vendorCode: values[MASTER_CLASS_FIELD_NAME.VENDOR_CODE],
    inEnglish: values[MASTER_CLASS_FIELD_NAME.IN_ENGLISH],
    deleted: !values[MASTER_CLASS_FIELD_NAME.IS_PUBLIC],
  };
}

export function convertForChange(
  data: BasicMasterClassType,
): MasterClassValues {
  const categories = data.categories.map((i, index) => ({
    id: index,
    basicId: i.id,
    tid: i.categoryNameRu,
  }));
  return {
    [MASTER_CLASS_FIELD_NAME.NAME]: data.titleRu,
    [MASTER_CLASS_FIELD_NAME.VENDOR_CODE]: data.vendorCode,
    [MASTER_CLASS_FIELD_NAME.DESCRIPTION]: data.descriptionRu,
    [MASTER_CLASS_FIELD_NAME.MODIFIER]: data.modifierRu,
    [MASTER_CLASS_FIELD_NAME.IMAGES]: data.images,
    [MASTER_CLASS_FIELD_NAME.MATERIAL]: data.materialRu,
    [MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: convertRecommendations(
      data.recommendation,
    ),
    [MASTER_CLASS_FIELD_NAME.CATEGORIES]: categories,
    [MASTER_CLASS_FIELD_NAME.PRICE]: +data.price,
    [MASTER_CLASS_FIELD_NAME.DISCOUNT]: +data.discount,
    [MASTER_CLASS_FIELD_NAME.ARTICLE]: data.articleRu,
    [MASTER_CLASS_FIELD_NAME.IN_ENGLISH]: false,
    [MASTER_CLASS_FIELD_NAME.IS_PUBLIC]: !data.deleted,
  };
}
