import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import {
  SearchFilterComponentProps,
  SEARCH_FILTER_FIELD_NAME,
} from './search-filter.type';

export function SearchFilterComponent(props: SearchFilterComponentProps) {
  const {
    findPlaceholderTid,
    sorting,
    categories,
    statuses,
    values,
    handleChange,
    disabled,
  } = props;

  return (
    <Container>
      <FieldLayout type="double" adaptive>
        {sorting.length ? (
          <Select
            options={sorting}
            value={values[SEARCH_FILTER_FIELD_NAME.SORT]}
            name={SEARCH_FILTER_FIELD_NAME.SORT}
            onChange={handleChange}
            disabled={disabled}
          />
        ) : null}

        {categories.length ? (
          <Select
            options={categories}
            value={values[SEARCH_FILTER_FIELD_NAME.CATEGORY]}
            name={SEARCH_FILTER_FIELD_NAME.CATEGORY}
            onChange={handleChange}
            disabled={disabled}
          />
        ) : null}
        {statuses.length ? (
          <Select
            options={statuses}
            value={values[SEARCH_FILTER_FIELD_NAME.STATUS]}
            name={SEARCH_FILTER_FIELD_NAME.STATUS}
            onChange={handleChange}
            disabled={disabled}
          />
        ) : null}
      </FieldLayout>
      <Field
        placeholderTid={findPlaceholderTid}
        name={SEARCH_FILTER_FIELD_NAME.WHERE}
        value={values[SEARCH_FILTER_FIELD_NAME.WHERE]}
        onChange={handleChange}
        disabled={disabled}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    flex-flow: column;
  }
`;
const Field = styled(BasicField)`
  width: 250px;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Select = styled(FieldSelect)`
  width: 200px;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
