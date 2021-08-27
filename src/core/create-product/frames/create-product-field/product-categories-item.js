import { Field } from 'formik';
import { BasicField, FieldSelect } from '../../../../lib/element/field';
import { IconButton } from '../../../../lib/element/button';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import { spacing } from '../../../../lib/theme';
import styled from 'styled-components';

export function ProuctCategoriesItem(props) {
  const {
    index,
    categoriesFieldArray,
    productCategorySelectName,
    fieldCount,
    values,
    remove,
    categoryOptions,
    handleChange,
    handleBlur,
  } = props;
  return (
    <Line>
      <FieldSelect
        name={`${categoriesFieldArray}.${index}.${productCategorySelectName}`}
        value={values[index][productCategorySelectName]}
        options={categoryOptions}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {fieldCount !== 1 && (
        <IconButton type="button" onClick={() => remove(index)}>
          <RemoveIcon />
        </IconButton>
      )}
    </Line>
  );
}

const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
