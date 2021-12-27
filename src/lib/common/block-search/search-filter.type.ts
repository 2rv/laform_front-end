import { ChangeEvent } from 'react';
import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { FieldSelectOptionType } from 'src/lib/element/field';

export enum SEARCH_FILTER_FIELD_NAME {
  SORT = 'sort',
  CATEGORY = 'category',
  WHERE = 'where',
  STATUS = 'status',
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
  status?: keyof typeof PURCHASE_STATUS_INFO;
};
export type SearchBlockHandleFilterType = (
  query: SearchBlockFilterValues,
) => void;

export interface SearchFilterContainerProps {
  findPlaceholderTid: string;
  filterOptions?: SortOptionType[];
  categories?: CategoryOptionType[];
  statuses?: CategoryOptionType[];
  handleFilter: SearchBlockHandleFilterType;
  disabled?: boolean;
}
export interface SearchFilterComponentProps {
  findPlaceholderTid: string;
  sorting: SortOptionType[];
  categories: CategoryOptionType[];
  statuses: CategoryOptionType[];
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  values: SearchBlockValues;
  disabled: boolean;
}
export type SearchBlockValues = {
  [SEARCH_FILTER_FIELD_NAME.WHERE]?: string;
  [SEARCH_FILTER_FIELD_NAME.CATEGORY]?: number;
  [SEARCH_FILTER_FIELD_NAME.SORT]?: number;
  [SEARCH_FILTER_FIELD_NAME.STATUS]?: number;
};
