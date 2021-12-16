import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import {
  SearchFilterComponentPropsType,
  SEARCH_FILTER_FIELD_NAME,
} from './search-filter.type';

export function SearchFilterComponent(props: SearchFilterComponentPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    categories,
    values,
    handleChange,
    disabled,
  } = props;

  return (
    <Container>
      <FieldLayout type="double" adaptive>
        <Select
          options={filterOptions}
          value={values[SEARCH_FILTER_FIELD_NAME.FILTER] || 0}
          onChange={handleChange(SEARCH_FILTER_FIELD_NAME.FILTER)}
          disabled={disabled}
        />
        <Select
          options={categories}
          value={values[SEARCH_FILTER_FIELD_NAME.CATEGORY] || 0}
          onChange={handleChange(SEARCH_FILTER_FIELD_NAME.CATEGORY)}
          disabled={disabled}
          textValue
        />
      </FieldLayout>
      <Field
        placeholderTid={findPlaceholderTid}
        value={values[SEARCH_FILTER_FIELD_NAME.FIND] || ''}
        onChange={handleChange(SEARCH_FILTER_FIELD_NAME.FIND)}
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
