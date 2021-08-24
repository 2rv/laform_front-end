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

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const getFieldError = (name: string) => {
    return errors[name] && touched[name] && errors[name];
  };

  const changeInputHandler = (e: any) => {
    handleChange(e);
    handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldSelect
          options={filterOptions}
          name={filterSelectName}
          value={values[filterSelectName]}
          onChange={(e: any) => {
            handleChange(e);
            handleSubmit();
          }}
          width={200}
          adaptive
          onBlur={handleBlur}
        />
        <BasicField
          placeholderTid={findPlaceholderTid}
          name={findFieldName}
          value={values[findFieldName]}
          error={getFieldError(findFieldName)}
          onChange={changeInputHandler}
          onBlur={handleBlur}
          isFindInput
          width={250}
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
