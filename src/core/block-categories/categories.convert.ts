import { BasicCategoryType, CategoryType } from './categories.type';

export function performData(rowData: BasicCategoryType[]): CategoryType[] {
  return rowData.map((item, index) => ({
    id: index,
    basicId: item.id,
    tid: item.categoryNameRu,
  }));
}

export function convertForCreate(value: string, type: number) {
  return {
    categoryNameRu: value,
    type,
  };
}
