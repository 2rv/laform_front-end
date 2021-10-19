import styled from 'styled-components';
import { THEME_SIZE } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  TextareaField,
  FieldCheckbox,
} from '../../../lib/element/field';
import { SEWING_GOODS_FIELD_NAME } from '../sewing-goods-create.type';
import { RecomendationBlock } from '../../block-recomendation';
import { Divider } from 'src/lib/element/divider';
import { BlockCategories } from 'src/core/block-categories';
import { numberValue } from 'src/lib/common/create-product-validation';
import { ProductPrice } from '../../block-product-create-components';
import { ProductOptions } from '../../block-product-options';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';

{
  /* <RecomendationBlock
			onSetRecomendation={(data) =>
			  setFieldValue(SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS, data)
			}
		  /> */
}

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleReset,
    setFieldValue,
    initialOption,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setCount = (e) => {
    setFieldValue(SEWING_GOODS_FIELD_NAME.IS_LENGTH, false);
    const newOptions = (values[SEWING_GOODS_FIELD_NAME.OPTIONS] || []).map(
      (item) => {
        item[SEWING_GOODS_FIELD_NAME.COUNT] = 0;
        item[SEWING_GOODS_FIELD_NAME.LENGTH] = undefined;
        return item;
      },
    );
    setFieldValue(SEWING_GOODS_FIELD_NAME.OPTIONS, newOptions);
    setFieldValue(
      SEWING_GOODS_FIELD_NAME.IS_COUNT,
      !values[SEWING_GOODS_FIELD_NAME.IS_COUNT],
    );
  };
  const setLength = (e) => {
    setFieldValue(SEWING_GOODS_FIELD_NAME.IS_COUNT, false);
    const newOptions = (values[SEWING_GOODS_FIELD_NAME.OPTIONS] || []).map(
      (item) => {
        item[SEWING_GOODS_FIELD_NAME.COUNT] = undefined;
        item[SEWING_GOODS_FIELD_NAME.LENGTH] = 0;
        return item;
      },
    );
    setFieldValue(SEWING_GOODS_FIELD_NAME.OPTIONS, newOptions);
    setFieldValue(
      SEWING_GOODS_FIELD_NAME.IS_LENGTH,
      !values[SEWING_GOODS_FIELD_NAME.IS_LENGTH],
    );
  };
  return (
    <SectionLayout type="SMALL">
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
      <BlockCategories values={values} />
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
      <FieldLayout type="double" adaptive>
        <FieldCheckbox
          titleTid="Количество"
          labelTid="Наличие количества"
          name={SEWING_GOODS_FIELD_NAME.IS_COUNT}
          value={values[SEWING_GOODS_FIELD_NAME.IS_COUNT]}
          onBlur={handleBlur}
          checked={values[SEWING_GOODS_FIELD_NAME.IS_COUNT]}
          onClick={setCount}
        />
        <FieldCheckbox
          titleTid="Длинна"
          labelTid="Наличие длинны"
          name={SEWING_GOODS_FIELD_NAME.IS_LENGTH}
          value={values[SEWING_GOODS_FIELD_NAME.IS_LENGTH]}
          onBlur={handleBlur}
          checked={values[SEWING_GOODS_FIELD_NAME.IS_LENGTH]}
          onClick={setLength}
        />
      </FieldLayout>

      <ProductOptions
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        handleBlur={handleBlur}
        productPriceName={SEWING_GOODS_FIELD_NAME.PRICE}
        productDiscountName={SEWING_GOODS_FIELD_NAME.DISCOUNT}
        initialOption={initialOption}
        fieldArrayName={SEWING_GOODS_FIELD_NAME.OPTIONS}
        optionTypeName={SEWING_GOODS_FIELD_NAME.OPTION_TYPE}
        optionSizeName={SEWING_GOODS_FIELD_NAME.OPTION_SIZE}
        optionColorName={SEWING_GOODS_FIELD_NAME.OPTION_COLOR}
        optionPriceName={SEWING_GOODS_FIELD_NAME.OPTION_PRICE}
        optionDiscountName={SEWING_GOODS_FIELD_NAME.OPTION_DISCOUNT}
        productCountName={SEWING_GOODS_FIELD_NAME.COUNT}
        productLengthName={SEWING_GOODS_FIELD_NAME.LENGTH}
        isCount={values[SEWING_GOODS_FIELD_NAME.IS_COUNT]}
        isLength={values[SEWING_GOODS_FIELD_NAME.IS_LENGTH]}
        optionCountName={SEWING_GOODS_FIELD_NAME.OPTION_COUNT}
        optionLengthName={SEWING_GOODS_FIELD_NAME.OPTION_LENGTH}
      />

      <Divider />

      <ProductPrice
        priceAndDiscount={checkMinPriceAndDiscount(
          values[SEWING_GOODS_FIELD_NAME.OPTIONS],
          values[SEWING_GOODS_FIELD_NAME.PRICE],
          values[SEWING_GOODS_FIELD_NAME.DISCOUNT],
        )}
      />
      <FieldLayout type="double" adaptive>
        <ButtonPrimary
          type="submit"
          tid="SEWING_GOODS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
        />
        <ButtonSecondary onClick={handleReset} tid="Сбросить" />
      </FieldLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
