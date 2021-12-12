export const SEARCH_FILTER_FIELD_NAME = {
  FILTER: 'sort',
  CATEGORY: 'category',
  FIND: 'where',
};
export interface SearchFilterContainerPropsType {
  findPlaceholderTid: string;
  filterOptions: {
    id: number;
    tid: string;
    tvalue: any;
    sort: string | number;
    by: 'ASC' | 'DESC';
  }[];
  categories: any;
  handleFilter: any;
  disabled?: boolean;
}

export interface SearchFilterComponentPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  categories: any;
  handleChange: any;
  values: any;
  disabled: boolean;
}
