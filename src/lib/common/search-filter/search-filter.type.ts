export const SEARCH_FILTER_FIELD_NAME = {
  FILTER: 'sort',
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
  handleFilter: any;
}

export interface SearchFilterComponentPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  handleChange: any;
  values: any;
}
