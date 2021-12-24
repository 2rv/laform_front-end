import { ChangeEvent } from 'react';
import { FieldSelectOptionType } from 'src/lib/element/field';

export enum SEARCH_FILTER_FIELD_NAME {
  SORT = 'sort',
  CATEGORY = 'category',
  WHERE = 'where',
}
export interface SortOptionType extends FieldSelectOptionType {
  sort?: string;
  by?: string;
}
export type CategoryOptionType = FieldSelectOptionType;

export type SearchBlockFilterValues = {
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
};
export type SearchBlockHandleFilterType = (
  query: SearchBlockFilterValues,
) => void;

export interface SearchFilterContainerProps {
  findPlaceholderTid: string;
  filterOptions?: SortOptionType[];
  categories?: CategoryOptionType[];
  handleFilter: SearchBlockHandleFilterType;
  disabled?: boolean;
}
export interface SearchFilterComponentProps {
  findPlaceholderTid: string;
  sorting: SortOptionType[];
  categories: CategoryOptionType[];
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  values: SearchBlockValues;
  disabled: boolean;
}
export type SearchBlockValues = {
  [SEARCH_FILTER_FIELD_NAME.WHERE]?: string;
  [SEARCH_FILTER_FIELD_NAME.CATEGORY]?: number;
  [SEARCH_FILTER_FIELD_NAME.SORT]?: number;
};
