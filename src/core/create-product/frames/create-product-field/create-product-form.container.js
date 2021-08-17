import { Formik } from 'formik';
import { CreateProductFieldComponent } from './create-product-field.component';
import { PRODUCT_FIELD_NAME } from '../../create-product.type';

export function CreateProductFormContainer(props) {
  const {
    validation,
    initialCategoriesItem,
    initialPositionsItem,
    initialOptionsItem,
    initialValues,
    onSubmitForm,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => {
        return (
          <CreateProductFieldComponent
            {...formProps}
            //---------------------------- для fieldArray item
            initialCategoriesItem={initialCategoriesItem}
            initialOptionsItem={initialOptionsItem}
            initialPositionsItem={initialPositionsItem}
            //---------------------------- название для fieldArray
            categoriesFieldArray={PRODUCT_FIELD_NAME.CATEGORIES}
            optionsFieldArray={PRODUCT_FIELD_NAME.OPTIONS}
            positionsFieldArray={PRODUCT_FIELD_NAME.POSITIONS}
            //----------------------------  fieldNames
            productNameFieldName={PRODUCT_FIELD_NAME.NAME}
            productModifierFieldName={PRODUCT_FIELD_NAME.MODIFIER}
            productCategoryFieldName={PRODUCT_FIELD_NAME.ONE_CATEGORY}
            productDescriptionFieldName={PRODUCT_FIELD_NAME.DESCRIPTION}
            optionCategorySelect={PRODUCT_FIELD_NAME.ONE_OPTION_CATEGORY}
            positionNameFieldName={PRODUCT_FIELD_NAME.ONE_POSITION_NAME}
            positionPriceFieldName={PRODUCT_FIELD_NAME.ONE_POSITION_PRICE}
            productPriceFieldName={PRODUCT_FIELD_NAME.PRICE}
            productDiscountFieldName={PRODUCT_FIELD_NAME.DISCOUNT}
            //----------------------------  other
            categoriesForOptionSelect={constructorCategoryForOptions(
              formProps.values[PRODUCT_FIELD_NAME.CATEGORIES],
              PRODUCT_FIELD_NAME.ONE_CATEGORY,
            )}
          />
        );
      }}
    </Formik>
  );
}
const constructorCategoryForOptions = (data, key) => {
  return data.reduce((acc, item, index) => {
    if (item[key] !== '') acc.push({ id: index, tid: item[key] });
    return acc;
  }, []);
};
