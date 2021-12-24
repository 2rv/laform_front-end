import { BasicCategoryType } from 'src/lib/basic-types';
import { CategoryOptionType } from '.';

export function convertCategories(
  categories: BasicCategoryType[],
): CategoryOptionType[] {
  categories.unshift({
    id: '',
    categoryNameRu: 'OTHER.CATEGORY_FILTER.ALL',
    categoryNameEn: '',
    type: '',
  });
  return categories.map((category, index) => ({
    id: index,
    basicId: category.id,
    tid: category.categoryNameRu,
  }));
}
