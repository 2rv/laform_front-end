import styled from 'styled-components';
import { THEME_SIZE } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { SEWING_GOODS_FIELD_NAME } from '../sewing-goods-create.type';
import { ProductPrice } from '../../block-product-components';
import {
  dynamicFieldsMinPrice,
  numberValue,
} from '../../../lib/common/create-product-helpers';
import { RecomendationBlock } from '../../block-recomendation';
import { DynamicField } from './dynamic-field';
import { DynamicFields } from './dynamic-fields';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    //----------------------------
    initialColors,
    initialSizes,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={SEWING_GOODS_FIELD_NAME.NAME}
            value={values[SEWING_GOODS_FIELD_NAME.NAME]}
            error={getFieldError(SEWING_GOODS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.DICE_OF_GOODS"
            name={SEWING_GOODS_FIELD_NAME.MODIFIER}
            value={values[SEWING_GOODS_FIELD_NAME.MODIFIER]}
            error={getFieldError(SEWING_GOODS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <MultiField
          items={values[SEWING_GOODS_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(SEWING_GOODS_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(SEWING_GOODS_FIELD_NAME.CATEGORIES)}
          titleTid={'SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.PRODUCT_CATEGORIES'}
          placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.PRODUCT_CATEGORIES"
        />
        <TextareaField
          titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={SEWING_GOODS_FIELD_NAME.DESCRIPTION}
          value={values[SEWING_GOODS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(SEWING_GOODS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
      </SectionLayout>

      <DynamicFields
        initialData={initialSizes}
        title="DYNAMIC_FIELDS.SIZE.TITLE"
        fieldTitle="DYNAMIC_FIELDS.SIZE.FIELD_TITLE"
        fieldPlaceholder="DYNAMIC_FIELDS.SIZE.FIELD_PLACEHOLDER"
        buttonText="DYNAMIC_FIELDS.SIZE.BUTTON_TEXT"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <DynamicField
        initialData={initialColors}
        title="DYNAMIC_FIELDS.COLOR.TITLE"
        fieldTitle="DYNAMIC_FIELDS.COLOR.FIELD_TITLE"
        fieldPlaceholder="DYNAMIC_FIELDS.COLOR.FIELD_PLACEHOLDER"
        buttonText="DYNAMIC_FIELDS.COLOR.BUTTON_TEXT"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <SectionLayout type="SMALL">
        <Title tid="SEWING_GOODS.CREATE.FORM.PRICE" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.DISCOUNT"
            name={SEWING_GOODS_FIELD_NAME.DISCOUNT}
            value={values[SEWING_GOODS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(SEWING_GOODS_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(SEWING_GOODS_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <ProductPrice
            discount={values[SEWING_GOODS_FIELD_NAME.DISCOUNT]}
            price={dynamicFieldsMinPrice(
              values[SEWING_GOODS_FIELD_NAME.SIZES],
              SEWING_GOODS_FIELD_NAME.SIZE_PRICE,
            )}
          />
        </FieldLayout>
        {/* <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS, data)
          }
        /> */}
        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid="SEWING_GOODS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
          <ButtonSecondary tid="SEWING_GOODS.CREATE.FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
