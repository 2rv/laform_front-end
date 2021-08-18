import { Field } from 'formik';
import { BasicField, FieldSelect } from '../../../../lib/element/field';
import { IconButton } from '../../../../lib/element/button';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import { spacing } from '../../../../lib/theme';
import styled from 'styled-components';

export function ProuctCategoriesItem(props) {
  const {
    //---------------------------- для fieldArray
    index,
    categoriesFieldArray,
    fieldCount,
    removeCategoryField,
    //----------------------------  fieldNames
    productCategoryFieldName,
  } = props;
  return (
    <Line>
      <Field
        name={`${categoriesFieldArray}.${index}.${productCategoryFieldName}`}
      >
        {({ field, form, meta }) => (
          <BasicField
            placeholderTid="Введите название категории"
            error={
              meta.touched &&
              !meta.value &&
              form.errors[productCategoryFieldName]
            }
            {...field}
          />
        )}
      </Field>
      {fieldCount !== 1 && (
        <IconButton type="button" onClick={() => removeCategoryField(index)}>
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
