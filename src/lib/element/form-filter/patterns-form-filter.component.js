import styled from 'styled-components';

import { FieldSelect, FieldPrimary } from '../field';
import { IndentLayout } from '../layout';
import { spacing, THEME_SIZE } from '../../theme';
import { LoaderPrimary } from '../loader';
import { ErrorRequest } from '../error';
import { SuccessRequest } from '../success';
import { ReactComponent as FindIcon } from 'src/asset/svg/find-icon.svg';

export function PatternsFormFilterComponent(props) {
  const {
    categoryOptions,
    tagsOptions,

    fieldCategory,
    fieldTags,
    fieldFindPatterns,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && errors[name];
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container type="small">
        <SelectContainer>
          <FieldSelect
            options={categoryOptions}
            name={fieldCategory}
            value={values[fieldCategory]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </SelectContainer>
        <SelectContainer>
          <FieldSelect
            options={tagsOptions}
            name={fieldTags}
            value={values[fieldTags]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </SelectContainer>
        <FieldIconContainer>
          <FieldPrimary
            placeholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
            name={fieldFindPatterns}
            value={values[fieldFindPatterns]}
            error={getFieldError(fieldFindPatterns)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <IconFind />
        </FieldIconContainer>
      </Container>
    </form>
  );
}
const FieldIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const IconFind = styled(FindIcon)`
  position: absolute;
  right: ${spacing(3)};
`;
const Container = styled(IndentLayout)`
  display: flex;
`;
const SelectContainer = styled.div`
  width: 172px;
`;
