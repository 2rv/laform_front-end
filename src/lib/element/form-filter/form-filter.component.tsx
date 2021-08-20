import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { FieldSelect, BasicField } from '../field';
import { FormFilterComponentPropsType } from './form-filter.type';
import { FieldLayout } from '../layout';

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
    filterProducts,
    sortProductsByDate,
  } = props;

  const getFieldError = (name: string) => {
    return errors[name] && touched[name] && errors[name];
  };

  // const changeSelectHandler = (e: any) => {
  //   handleChange(e);
  //   handleSubmit();
  // };

  const changeInputHandler = (e: any) => {
    handleChange(e);
    handleSubmit();
    filterProducts(e.target.value.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout type="double" adaptive>
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
              sortProductsByDate(Number(e.target.value));
            }}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <BasicField
          placeholderTid={findPlaceholderTid}
          name={fieldNameFind}
          value={values[fieldNameFind]}
          error={getFieldError(fieldNameFind)}
          onChange={changeInputHandler}
          onBlur={handleBlur}
          isFindInput
          width={195}
          adaptive
        />
      </Container>
    </form>
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
