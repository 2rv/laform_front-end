import { Formik } from 'formik';
import { CreateProductFieldComponent } from './create-product-field.component';
import { PRODUCT_FIELD_NAME } from '../../create-product.type';

export function CreateProductFormContainer(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //---------
    validation,
    initialValues,
    onSubmitForm,
    //---------
    initialData,
    selectOptionsData,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <CreateProductFieldComponent
          {...formProps}
          //---------------------------- архитектура
          pageLoading={pageLoading}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          errorMessage={errorMessage}
          //---------------------------- initObject
          initialData={initialData}
          selectOptionsData={selectOptionsData}
          //---------------------------- fieldArrays
          categoriesFieldArray={PRODUCT_FIELD_NAME.CATEGORIES}
          sizesFieldArray={PRODUCT_FIELD_NAME.SIZES}
          colorsFieldArray={PRODUCT_FIELD_NAME.COLORS}
          progrmasFieldArray={PRODUCT_FIELD_NAME.PROGRAMS}
          //---------------------------- selects and radio
          complexityPattern={PRODUCT_FIELD_NAME.COMPLEXITY}
          typeSelectName={PRODUCT_FIELD_NAME.TYPE}
          //---------------------------- fields
          productCategorySelectName={PRODUCT_FIELD_NAME.CATEGORY_NAME}
          sizeNameFieldName={PRODUCT_FIELD_NAME.SIZE_NAME}
          sizePriceFieldName={PRODUCT_FIELD_NAME.SIZE_PRICE}
          colorNameFieldName={PRODUCT_FIELD_NAME.COLOR_NAME}
          colorPriceFieldName={PRODUCT_FIELD_NAME.COLOR_PRICE}
          programNameFieldName={PRODUCT_FIELD_NAME.PROGRAM_NAME}
          programPriceFieldName={PRODUCT_FIELD_NAME.PROGRAM_PRICE}
          discountFieldName={PRODUCT_FIELD_NAME.DISCOUNT}
          productNameFieldName={PRODUCT_FIELD_NAME.NAME}
          productCountFieldName={[PRODUCT_FIELD_NAME.COUNT]}
          productModifierFieldName={PRODUCT_FIELD_NAME.MODIFIER}
          productDescriptionFieldName={PRODUCT_FIELD_NAME.DESCRIPTION}
          productMaterialFieldName={PRODUCT_FIELD_NAME.MATERIAL}
          electroincPatternPriceFieldName={
            PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_PRICE
          }
          electroincPatternFile={PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_FILE}
        />
      )}
    </Formik>
  );
}
