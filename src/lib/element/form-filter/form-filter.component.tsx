import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from '../field';
import { FormFilterComponentPropsType } from './form-filter.type';

export function FormFilterComponent(props: FormFilterComponentPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    filterSelectName,
    findFieldName,

    formik,
  } = props;

  return (
    <Container>
      <Select
        options={filterOptions}
        name={filterSelectName}
        value={formik.values[filterSelectName]}
        onChange={formik.handleChange}
      />
      <Field
        placeholderTid={findPlaceholderTid}
        name={findFieldName}
        value={formik.values[findFieldName]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
  width: 250;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Select = styled(FieldSelect)`
  width: 200;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
