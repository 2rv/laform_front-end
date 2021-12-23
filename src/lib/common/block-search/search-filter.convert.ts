import { BasicCategoryType } from 'src/lib/basic-types';
import { CategoryOptionType } from '.';

export function convertCategories(
  categories: BasicCategoryType[],
): CategoryOptionType[] {
  return categories.map((category, index) => ({
    id: index + 1,
    basicId: category.id,
    tid: category.categoryNameRu,
  }));
}
