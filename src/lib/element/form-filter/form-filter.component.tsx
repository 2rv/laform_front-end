import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from '../field';
import { FormFilterComponentPropsType } from './form-filter.type';

export function FormFilterComponent(props: FormFilterComponentPropsType) {
  const {
    findPlaceholderTid,

    categoryOptions = [],
    tagsOptions = [],

    fieldNameFind,
    selectNameCategory,
    selectNameTags,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    pending,
    success,
    error,
    errorMessage,
  } = props;

  const getFieldError = (name: string) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Container>
          <FieldSelect
            options={categoryOptions}
            name={selectNameCategory}
            value={values[selectNameCategory]}
            onChange={(e: any) => {
              handleChange(e);
              handleSubmit();
            }}
            onBlur={handleBlur}
          />

          <FieldSelect
            options={tagsOptions}
            name={selectNameTags}
            value={values[selectNameTags]}
            onChange={(e: any) => {
              handleChange(e);
              handleSubmit();
            }}
            onBlur={handleBlur}
          />
        </Container>
        <BasicField
          placeholderTid={findPlaceholderTid}
          name={fieldNameFind}
          value={values[fieldNameFind]}
          error={getFieldError(fieldNameFind)}
          onChange={(e: any) => {
            handleChange(e);
            handleSubmit();
          }}
          onBlur={handleBlur}
          isFindInput
          width={195}
        />
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
