import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { Field } from 'formik';
import { CREATE_MASTER_CLASS_FIELD_NAME } from '../master-class-create.type';
import { ProductPrice } from '../../block-product-components';
import {
  dynamicFieldsMinPrice,
  numberValue,
} from '../../../lib/common/create-product-helpers';
import { RecomendationBlock } from '../../block-recomendation';
import { DynamicFields } from './dynamic-fields';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    programsInit,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={CREATE_MASTER_CLASS_FIELD_NAME.NAME}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.NAME]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <MultiField
          items={values[CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES)}
          titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.TAG"
          placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
        />
        <TextareaField
          titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION}
          value={values[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
      </SectionLayout>
      <DynamicFields
        initialData={programsInit}
        title="DYNAMIC_FIELDS.PROGRAM.TITLE"
        fieldTitle="DYNAMIC_FIELDS.PROGRAM.FIELD_TITLE"
        fieldPlaceholder="DYNAMIC_FIELDS.PROGRAM.FIELD_PLACEHOLDER"
        buttonText="DYNAMIC_FIELDS.PROGRAM.BUTTON_TEXT"
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <SectionLayout type="SMALL">
        <Title tid="MASTER_CLASSES.CREATE.FORM.PRICE" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DISCOUNT"
            name={CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <ProductPrice
            discount={values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            price={dynamicFieldsMinPrice(
              values[CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS],
              CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE,
            )}
          />
        </FieldLayout>
        {/* <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS, data)
          }
        /> */}
        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid="MASTER_CLASSES.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
          <ButtonSecondary tid="MASTER_CLASSES.CREATE.FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
