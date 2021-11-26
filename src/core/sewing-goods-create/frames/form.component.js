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
import { RecomendationBlock } from '../../../lib/common/block-select-recomendation';
import { Divider } from 'src/lib/element/divider';
import { BlockCategories } from 'src/lib/common/block-categories';
import { numberValue } from 'src/lib/common/create-product-validation';
import { ProductOptions } from '../../../lib/common/block-product-options';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';

export function FormComponent(props) {
  const {
    isEdit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    initialOption,
  } = props;

  const setVisible = () => {
    setFieldValue(
      SEWING_GOODS_FIELD_NAME.DELETED,
      !values[SEWING_GOODS_FIELD_NAME.DELETED],
    );
  };

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
      <Title tid="Основная информация" />
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
        <BasicField
          titleTid="Артикул"
          placeholderTid="Введите артикул"
          name={SEWING_GOODS_FIELD_NAME.VENDOR_CODE}
          value={values[SEWING_GOODS_FIELD_NAME.VENDOR_CODE]}
          error={getFieldError(SEWING_GOODS_FIELD_NAME.VENDOR_CODE)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>
      <BlockCategories values={values} type={3} />
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

      <Divider />

      <Title tid="Параметры товара" />

      <FieldLayout type="double" adaptive>
        <FieldCheckbox
          titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.QUANTITY"
          labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.QUANTITY"
          name={SEWING_GOODS_FIELD_NAME.IS_COUNT}
          value={values[SEWING_GOODS_FIELD_NAME.IS_COUNT]}
          onBlur={handleBlur}
          checked={values[SEWING_GOODS_FIELD_NAME.IS_COUNT]}
          onClick={setCount}
        />
        <FieldCheckbox
          titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.LENGTH"
          labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.LENGTH"
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

      <RecomendationBlock
        values={values[SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]}
        name={SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS}
        setFieldValue={setFieldValue}
      />

      <Divider />

      <CreatePriceBlock
        priceAndDiscount={checkMinPriceAndDiscount(
          values[SEWING_GOODS_FIELD_NAME.OPTIONS],
          values[SEWING_GOODS_FIELD_NAME.PRICE],
          values[SEWING_GOODS_FIELD_NAME.DISCOUNT],
        )}
      />

      <Divider />

      <FieldCheckbox
        titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
        labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
        name={SEWING_GOODS_FIELD_NAME.DELETED}
        value={values[SEWING_GOODS_FIELD_NAME.DELETED]}
        checked={values[SEWING_GOODS_FIELD_NAME.DELETED]}
        onClick={setVisible}
        onBlur={handleBlur}
      />

      <FieldLayout type="double" adaptive>
        {isEdit ? (
          <ButtonPrimary
            type="submit"
            tid="SEWING_GOODS.CREATE.FORM.BUTTON.SAVE"
          />
        ) : (
          <ButtonPrimary
            type="submit"
            tid="SEWING_GOODS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
        )}

        <ButtonSecondary
          onClick={() => window.location.reload()}
          tid="SEWING_GOODS.CREATE.FORM.BUTTON.RESET"
        />
      </FieldLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
