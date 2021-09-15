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
import { DynamicFields, ProductPrice } from '../../block-product-components';
import {
  dynamicFieldsMinPrice,
  numberValue,
} from '../../../lib/common/create-product-helpers';
import { RecomendationBlock } from '../../block-recomendation';
import { BlockEditor } from '../../block-editor';

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
    sizesInit,
  } = props;

  //----------------------------
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);
  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
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
        <MultiField
          items={values[PRINT_PATTERN_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(PRINT_PATTERN_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(PRINT_PATTERN_FIELD_NAME.CATEGORIES)}
          titleTid={'PATTERNS.CREATE.FORM.FIELDS.TITLE.PRODUCT_CATEGORIES'}
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.PRODUCT_CATEGORIES"
        />
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
          <BlockEditor
            formikOnChange={setEditorData(PRINT_PATTERN_FIELD_NAME.MATERIAL)}
          />
        </SectionLayout>
      </SectionLayout>
      <Complexity>
        <SmallTitle tid="PATTERNS.CREATE.FORM.COMPLEXITY" />
        <FieldComplexity>
          {[1, 2, 3, 4, 5].map((value, index) => (
            <ComplexityDot
              key={index}
              act={value <= values[PRINT_PATTERN_FIELD_NAME.COMPLEXITY] ? 1 : 0}
            >
              <FieldRadio
                type="radio"
                name={PRINT_PATTERN_FIELD_NAME.COMPLEXITY}
                value={value}
                onChange={setNumber(PRINT_PATTERN_FIELD_NAME.COMPLEXITY)}
              />
            </ComplexityDot>
          ))}
        </FieldComplexity>
      </Complexity>

      <DynamicFields
        nameFieldArray={PRINT_PATTERN_FIELD_NAME.SIZES}
        namePosition={PRINT_PATTERN_FIELD_NAME.SIZE_NAME}
        pricePosition={PRINT_PATTERN_FIELD_NAME.SIZE_PRICE}
        initialData={sizesInit}
        title="DYNAMIC_FIELDS.SIZE.TITLE"
        fieldTitle="DYNAMIC_FIELDS.SIZE.FIELD_TITLE"
        fieldPlaceholder="DYNAMIC_FIELDS.SIZE.FIELD_PLACEHOLDER"
        buttonText="DYNAMIC_FIELDS.SIZE.BUTTON_TEXT"
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <SectionLayout type="SMALL">
        <Title tid="PATTERNS.CREATE.FORM.PRICE" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DISCOUNT"
            name={PRINT_PATTERN_FIELD_NAME.DISCOUNT}
            value={values[PRINT_PATTERN_FIELD_NAME.DISCOUNT]}
            error={getFieldError(PRINT_PATTERN_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(PRINT_PATTERN_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <ProductPrice
            discount={values[PRINT_PATTERN_FIELD_NAME.DISCOUNT]}
            price={dynamicFieldsMinPrice(
              values[PRINT_PATTERN_FIELD_NAME.SIZES],
              PRINT_PATTERN_FIELD_NAME.SIZE_PRICE,
            )}
          />
        </FieldLayout>
        <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(PRINT_PATTERN_FIELD_NAME.RECOMMENDATIONS, data)
          }
        />
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="PATTERNS.CREATE.FORM.BUTTON.CREATE_PRODUCT" />
          <ButtonSecondary tid="PATTERNS.CREATE.FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Complexity = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const FieldComplexity = styled.div`
  display: flex;
  padding: ${spacing(3)};
  gap: ${spacing(1)};
  background-color: ${THEME_COLOR.GRAY};
  height: 46px;
  align-items: center;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const FieldRadio = styled(Field)`
  display: none;
`;
const ComplexityDot = styled.label`
  width: 16px;
  min-width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
