import styled from 'styled-components';
import { THEME_SIZE } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import { BasicField, TextareaField } from '../../../lib/element/field';
import { SEWING_GOODS_FIELD_NAME } from '../sewing-goods-create.type';
import { ProductPrice } from '../../block-product-create-components';
import { RecomendationBlock } from '../../block-recomendation';
import { ProductOptions } from './product-options';
import { Divider } from 'src/lib/element/divider';
import { BlockCategories } from 'src/core/block-categories';
import {
  findMinPriceAndDiscount,
  numberValue,
} from 'src/lib/common/create-product-validation';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleReset,
    setFieldValue,
    productOption,
  } = props;
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));

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

      <ProductOptions
        productOption={productOption}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      {/* <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS, data)
          }
        /> */}
      <Divider />

      <ProductPrice
        priceAndDiscount={findMinPriceAndDiscount(
          values[SEWING_GOODS_FIELD_NAME.OPTIONS],
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
