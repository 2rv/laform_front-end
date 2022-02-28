import { BasicCategoryType } from 'src/lib/basic-types';
import { CategoryOptionType } from './categories.type';

export function convertForCreate(value: string, type: 0 | 1 | 2 | 3 | 4) {
  return {
    categoryName: value,
    type: type,
  };
}

export function convertCategories(
  categories: BasicCategoryType[],
  defaultTid: string = 'OTHER.FILTER.ALL',
): CategoryOptionType[] {
  if (defaultTid) {
    categories.unshift({
      id: '',
      categoryNameRu: defaultTid,
      categoryNameEn: defaultTid,
      type: '',
    });
  }

  return categories.map((category, index) => ({
    id: index,
    basicId: category.id,
    tid: category.categoryNameRu || category.categoryNameEn,
  }));
}
