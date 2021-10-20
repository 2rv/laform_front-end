import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from '../../element/field';
import {
  SearchFilterComponentPropsType,
  SEARCH_FILTER_FIELD_NAME,
} from './search-filter.type';
import { FieldLayout } from 'src/lib/element/layout';

export function SearchFilterComponent(props: SearchFilterComponentPropsType) {
  const { findPlaceholderTid, filterOptions, categories, values, handleChange } = props;

  return (
    <Container>
      <FieldLayout type="double">
        <FieldSelect
          options={filterOptions}
          value={values[SEARCH_FILTER_FIELD_NAME.FILTER] || 0}
          onChange={handleChange(SEARCH_FILTER_FIELD_NAME.FILTER)}
          width={200}
        />
        <FieldSelect
          options={categories}
          value={values[SEARCH_FILTER_FIELD_NAME.CATEGORY] || 0}
          onChange={handleChange(SEARCH_FILTER_FIELD_NAME.CATEGORY)}
          width={200}
          textValue
        />
      </FieldLayout>
      <BasicField
        placeholderTid={findPlaceholderTid}
        value={values[SEARCH_FILTER_FIELD_NAME.FIND] || ''}
        onChange={handleChange(SEARCH_FILTER_FIELD_NAME.FIND)}
        isFindInput
        width={250}
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
