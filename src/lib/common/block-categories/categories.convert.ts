import { basicCategoryType } from 'src/lib/basic-types';
import { CategoryType } from './categories.type';

export function performData(rowData: basicCategoryType[]): CategoryType[] {
  return rowData.map((item, index) => ({
    id: index,
    basicId: item.id,
    tid: item.categoryNameRu,
  }));
}

export function convertForCreate(value: string, type: number) {
  return {
    categoryNameRu: value,
    type: String(type),
  };
}
