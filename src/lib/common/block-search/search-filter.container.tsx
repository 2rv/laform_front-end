import { useEffect, useState, ChangeEvent } from 'react';
import {
  SearchBlockValues,
  SEARCH_FILTER_FIELD_NAME,
} from './search-filter.type';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterContainerProps } from './search-filter.type';

export function SearchFilterContainer(props: SearchFilterContainerProps) {
  const {
    findPlaceholderTid,
    filterOptions = [],
    categories = [],
    handleFilter,
    disabled = false,
  } = props;

  const [values, setValues] = useState<SearchBlockValues>({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Object.keys(values).length > 0) {
        const where = values[SEARCH_FILTER_FIELD_NAME.WHERE];
        const categoryIndex = values[SEARCH_FILTER_FIELD_NAME.CATEGORY] || 0;
        const sortIndex = values[SEARCH_FILTER_FIELD_NAME.SORT] || 0;

        const by = filterOptions[sortIndex]?.by;
        const sort = filterOptions[sortIndex]?.sort;
        const category = categories[categoryIndex]?.tid;
        handleFilter({ where, sort, by, category });
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [values]);

  function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const name: string | SEARCH_FILTER_FIELD_NAME = e.target.name;
    const value: string = e.target.value;

    const copy = { ...values };
    if (name === SEARCH_FILTER_FIELD_NAME.WHERE) {
      copy[SEARCH_FILTER_FIELD_NAME.WHERE] = value;
    }
    if (name === SEARCH_FILTER_FIELD_NAME.CATEGORY) {
      if (value === FILTER_NAME_ALL) {
        copy[SEARCH_FILTER_FIELD_NAME.CATEGORY] = undefined;
      } else {
        copy[SEARCH_FILTER_FIELD_NAME.CATEGORY] = +value;
      }
    }
    if (name === SEARCH_FILTER_FIELD_NAME.SORT) {
      copy[SEARCH_FILTER_FIELD_NAME.SORT] = +value;
    }

    setValues(copy);
  }

  return (
    <SearchFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      sorting={filterOptions}
      categories={[{ id: 0, tid: FILTER_NAME_ALL }, ...categories]}
      values={values}
      handleChange={handleChange}
      disabled={disabled}
    />
  );
}
const FILTER_NAME_ALL = 'OTHER.CATEGORY_FILTER.ALL';
