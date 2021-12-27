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
    statuses = [],
    handleFilter,
    disabled = false,
  } = props;

  const [values, setValues] = useState<SearchBlockValues>({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Object.keys(values).length > 0) {
        const result: any = {
          where: values[SEARCH_FILTER_FIELD_NAME.WHERE],
          sort: undefined,
          by: undefined,
          category: undefined,
          status: undefined,
        };
        const categoryIndex = values[SEARCH_FILTER_FIELD_NAME.CATEGORY] || 0;
        const statusIndex = values[SEARCH_FILTER_FIELD_NAME.STATUS];
        const sortIndex = values[SEARCH_FILTER_FIELD_NAME.SORT] || 0;
        result.by = filterOptions[sortIndex]?.by;
        result.sort = filterOptions[sortIndex]?.sort;

        if (categoryIndex !== 0) {
          result.category = categories[categoryIndex]?.tid;
        }
        if (statusIndex !== -1) {
          result.status = statusIndex;
        }

        handleFilter(result);
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
      copy[SEARCH_FILTER_FIELD_NAME.CATEGORY] = +value;
    }
    if (name === SEARCH_FILTER_FIELD_NAME.SORT) {
      copy[SEARCH_FILTER_FIELD_NAME.SORT] = +value;
    }
    if (name === SEARCH_FILTER_FIELD_NAME.STATUS) {
      copy[SEARCH_FILTER_FIELD_NAME.STATUS] = +value;
    }
    setValues(copy);
  }

  return (
    <SearchFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      sorting={filterOptions}
      categories={categories}
      statuses={[
        {
          id: -1,
          tid: 'OTHER.CATEGORY_FILTER.ALL',
        },
      ].concat(statuses)}
      values={values}
      handleChange={handleChange}
      disabled={disabled}
    />
  );
}
