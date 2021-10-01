import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from '../../element/field';
import {
  SearchFilterComponentPropsType,
  SEARCH_FILTER_FIELD_NAME,
} from './search-filter.type';

export function SearchFilterComponent(props: SearchFilterComponentPropsType) {
  const { findPlaceholderTid, filterOptions, values, handleChange } = props;

  return (
    <Container>
      <FieldSelect
        options={filterOptions}
        value={values[SEARCH_FILTER_FIELD_NAME.FILTER] || 0}
        onChange={handleChange(SEARCH_FILTER_FIELD_NAME.FILTER)}
        width={200}
      />
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
