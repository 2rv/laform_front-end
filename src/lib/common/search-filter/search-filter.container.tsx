import { useEffect, useState, SyntheticEvent } from 'react';
import { SEARCH_FILTER_FIELD_NAME } from '.';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterContainerPropsType } from './search-filter.type';

export function SearchFilter(props: SearchFilterContainerPropsType) {
  const { findPlaceholderTid, filterOptions, handleFilter } = props;

  const [values, setValues] = useState({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Object.keys(values).length > 0) {
        //@ts-ignore
        const where = values[SEARCH_FILTER_FIELD_NAME.FIND];
        //@ts-ignore
        const filter = values[SEARCH_FILTER_FIELD_NAME.FILTER];
        const sort = filterOptions[filter]?.sort;
        const by = filterOptions[filter]?.by;
        handleFilter({ where, sort, by });
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [values]);

  const handleChange = (name: string) => (event: SyntheticEvent) => {
    const copy: any = { ...values };
    copy[name] = (event.target as HTMLInputElement).value;
    setValues(copy);
  };

  return (
    <SearchFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      filterOptions={filterOptions}
      values={values}
      handleChange={handleChange}
    />
  );
}
