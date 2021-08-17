import { Field } from 'formik';
import { BasicField, FieldSelect } from '../../../../lib/element/field';
import { ButtonPrimary } from '../../../../lib/element/button';

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
    <>
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
    </>
  );
}
//кнопка удаления нужного поля
//  {fieldCount !== 1 && (
//         <ButtonPrimary
//           tid="удалить что то"
//           type="button"
//           onClick={() => removeCategoryField(index)}
//         />
//       )}
