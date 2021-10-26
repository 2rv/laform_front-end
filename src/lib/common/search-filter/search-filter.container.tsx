import { useEffect, useState, SyntheticEvent } from 'react';
import { SEARCH_FILTER_FIELD_NAME } from '.';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterContainerPropsType } from './search-filter.type';

export function SearchFilter(props: SearchFilterContainerPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    categories = [],
    handleFilter,
  } = props;

  const [values, setValues] = useState({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Object.keys(values).length > 0) {
        //@ts-ignore
        const where = values[SEARCH_FILTER_FIELD_NAME.FIND];
        //@ts-ignore
        const filter = values[SEARCH_FILTER_FIELD_NAME.FILTER];
        //@ts-ignore
        const category = values[SEARCH_FILTER_FIELD_NAME.CATEGORY];
        const sort = filterOptions[filter]?.sort;
        const by = filterOptions[filter]?.by;
        handleFilter({ where, sort, by, category });
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [values]);

  const handleChange = (name: string) => (event: SyntheticEvent) => {
    const copy: any = { ...values };
    // When we change the search and category filter, we reset their value, because they do not work together.
    if ([SEARCH_FILTER_FIELD_NAME.FIND, SEARCH_FILTER_FIELD_NAME.CATEGORY].includes(name)) {
      delete copy[SEARCH_FILTER_FIELD_NAME.FIND];
      delete copy[SEARCH_FILTER_FIELD_NAME.CATEGORY];
    }
    copy[name] = (event.target as HTMLInputElement).value;
    setValues(copy);
  };

  return (
    <SearchFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      filterOptions={filterOptions}
      categories={categories}
      values={values}
      handleChange={handleChange}
    />
  );
}
