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
            titleTid="Название товара"
            placeholderTid="Введите название товара"
            name={SEWING_GOODS_FIELD_NAME.NAME}
            value={values[SEWING_GOODS_FIELD_NAME.NAME]}
            error={getFieldError(SEWING_GOODS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Плашка товара"
            placeholderTid="Введите плашку товара"
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
          titleTid={'Категории товара'}
          placeholderTid="Введите категории товара"
        />
        <TextareaField
          titleTid="Описание товара"
          placeholderTid="Полное описание товара"
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
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <DynamicField
        initialData={initialColors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <SectionLayout type="SMALL">
        <Title tid="Цена" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="Скидка (%)"
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
        <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS, data)
          }
        />
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="Создать товар" />
          <ButtonSecondary tid="Отменить" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
