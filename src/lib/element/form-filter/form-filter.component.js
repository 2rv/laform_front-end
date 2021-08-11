import { ReactComponent as FindIcon } from 'src/asset/svg/find-icon.svg';
import styled from 'styled-components';
import { FieldSelect, FieldPrimary, FieldSecondary } from '../field';
import { IndentLayout } from '../layout';
import { LoaderPrimary } from '../loader';
import { spacing } from '../../theme';

export function FormFilterComponent(props) {
  const {
    placeholderTid,

    categoryOptions,
    tagsOptions,

    fieldCategory,
    fieldTags,
    fieldFind,

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
        <FindContainer>
          <FieldSecondary
            placeholderTid={placeholderTid}
            name={fieldFind}
            value={values[fieldFind]}
            error={getFieldError(fieldFind)}
            onChange={handleChange}
            onBlur={handleBlur}
            icon={FindIcon}
            onClick={() => console.log('FIND')}
          />
        </FindContainer>
      </Container>
    </form>
  );
}

const Container = styled(IndentLayout)`
  display: flex;
`;
const FindContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const SelectContainer = styled.div`
  width: 172px;
`;
