import { useEffect, useState, SyntheticEvent } from 'react';
import { SEARCH_FILTER_FIELD_NAME } from './search-filter.type';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterContainerPropsType } from './search-filter.type';

export function SearchFilterContainer(props: SearchFilterContainerPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    categories = [],
    handleFilter,
    disabled = false,
  } = props;

  const [values, setValues]: [any, Function] = useState({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Object.keys(values).length > 0) {
        const where = values[SEARCH_FILTER_FIELD_NAME.FIND];
        const filter = values[SEARCH_FILTER_FIELD_NAME.FILTER];
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

  function handleChange(name: string) {
    return (event: SyntheticEvent<HTMLInputElement>) => {
      const copy: any = { ...values };
      // When we change the search and category filter, we reset their value, because they do not work together.
      if (
        [
          SEARCH_FILTER_FIELD_NAME.FIND,
          SEARCH_FILTER_FIELD_NAME.CATEGORY,
        ].includes(name)
      ) {
        delete copy[SEARCH_FILTER_FIELD_NAME.FIND];
        delete copy[SEARCH_FILTER_FIELD_NAME.CATEGORY];
      }
      if (event.currentTarget.value === FILTER_NAME_ALL) {
        copy[name] = undefined;
      } else {
        copy[name] = event.currentTarget.value;
      }
      setValues(copy);
    };
  }

  return (
    <SearchFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      filterOptions={filterOptions}
      categories={[{ id: 0, tid: FILTER_NAME_ALL }, ...categories]}
      values={values}
      handleChange={handleChange}
      disabled={disabled}
    />
  );
}
const FILTER_NAME_ALL = 'OTHER.CATEGORY_FILTER.ALL';
