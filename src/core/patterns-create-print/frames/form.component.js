import styled from 'styled-components';
import { Field } from 'formik';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  FieldSelect,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { PRINT_PATTERN_FIELD_NAME } from '../patterns-create-print.type';
import { RecomendationBlock } from '../../block-recomendation';
import { ReactEditor } from 'src/core/block-react-editor';
import { ProductOptions } from './product-options';
import { BlockCategories } from 'src/core/block-categories';
import {
  ProductPrice,
  ComplexityField,
} from '../../block-product-create-components';
import {
  findMinPriceAndDiscount,
  numberValue,
} from 'src/lib/common/create-product-validation';
import { Divider } from 'src/lib/element/divider';
import { ErrorField } from 'src/lib/element/error';

export function FormComponent(props) {
  const {
    //----------------------------  formik
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    //----------------------------
    productOption,
  } = props;

  //----------------------------
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);
  //----------------------------

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.NAME"
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
          name={PRINT_PATTERN_FIELD_NAME.NAME}
          value={values[PRINT_PATTERN_FIELD_NAME.NAME]}
          error={getFieldError(PRINT_PATTERN_FIELD_NAME.NAME)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DICE_OF_GOODS"
          name={PRINT_PATTERN_FIELD_NAME.MODIFIER}
          value={values[PRINT_PATTERN_FIELD_NAME.MODIFIER]}
          error={getFieldError(PRINT_PATTERN_FIELD_NAME.MODIFIER)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>

      <BlockCategories values={values} />

      <TextareaField
        titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
        placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
        name={PRINT_PATTERN_FIELD_NAME.DESCRIPTION}
        value={values[PRINT_PATTERN_FIELD_NAME.DESCRIPTION]}
        error={getFieldError(PRINT_PATTERN_FIELD_NAME.DESCRIPTION)}
        onChange={handleChange}
        onBlur={handleBlur}
        minHeight={100}
      />

      <SectionLayout type="TEXT_SMALL">
        <SmallTitle tid="PATTERNS.CREATE.FORM.MATERIALS" />
        <ReactEditor
          handleChange={setEditorData(PRINT_PATTERN_FIELD_NAME.MATERIAL)}
          values={values[PRINT_PATTERN_FIELD_NAME.MATERIAL]}
          name={PRINT_PATTERN_FIELD_NAME.MATERIAL}
        />
        {getFieldError(PRINT_PATTERN_FIELD_NAME.MATERIAL) && (
          <ErrorField
            errorTid={getFieldError(PRINT_PATTERN_FIELD_NAME.MATERIAL)}
          />
        )}
      </SectionLayout>
      <ComplexityField
        title="PATTERNS.CREATE.FORM.COMPLEXITY"
        value={values[PRINT_PATTERN_FIELD_NAME.COMPLEXITY]}
        onChange={setNumber(PRINT_PATTERN_FIELD_NAME.COMPLEXITY)}
      />
      <ProductOptions
        productOption={productOption}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />
      <Divider />
      <ProductPrice
        priceAndDiscount={findMinPriceAndDiscount(
          values[PRINT_PATTERN_FIELD_NAME.OPTIONS],
        )}
      />
      {/* <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(PRINT_PATTERN_FIELD_NAME.RECOMMENDATIONS, data)
          }
        /> */}
      <FieldLayout type="double" adaptive>
        <ButtonPrimary
          type="submit"
          tid="PATTERNS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
        />
        <ButtonSecondary tid="PATTERNS.CREATE.FORM.BUTTON.CANCEL" />
      </FieldLayout>
    </SectionLayout>
  );
}
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
