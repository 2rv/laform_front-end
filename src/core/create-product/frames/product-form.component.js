import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import {
  ButtonBasic,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../lib/element/button';
import {
  BasicField,
  FieldSelect,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { Field, FieldArray } from 'formik';
import { FieldArraySelect, ProuctCategoriesItem } from './field-array.select';
import {
  FieldArrayField,
  FieldArrayPositionItem,
  PositionItem,
} from './field-array.field';
import { ProductPrice } from './product-price';
import { ErrorField } from '../../../lib/element/error';
import { FileField } from '../../../lib/element/field/file.field';
import { PRODUCT_FIELD_NAME } from '../create-product.type';

export function ProductFormComponent(props) {
  const {
    //----------------------------  formik
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    //----------------------------
    initialData,
    selectOptionsData,
  } = props;

  //----------------------------
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const numberValue = (name) => (e) =>
    setFieldValue(name, Number(e.currentTarget.value));
  const masterClass = values[PRODUCT_FIELD_NAME.TYPE] === 0;
  const elPattern = values[PRODUCT_FIELD_NAME.TYPE] === 1;
  const printPattern = values[PRODUCT_FIELD_NAME.TYPE] === 2;
  const sewingGood = values[PRODUCT_FIELD_NAME.TYPE] === 3;

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="Название товара"
            placeholderTid="Введите название товара"
            name={PRODUCT_FIELD_NAME.NAME}
            value={values[PRODUCT_FIELD_NAME.NAME]}
            error={getFieldError(PRODUCT_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Плашка товара"
            placeholderTid="Введите плашку товара"
            name={PRODUCT_FIELD_NAME.MODIFIER}
            value={values[PRODUCT_FIELD_NAME.MODIFIER]}
            error={getFieldError(PRODUCT_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <FieldSelect
          titleTid="Тип товара"
          name={PRODUCT_FIELD_NAME.TYPE}
          value={values[PRODUCT_FIELD_NAME.TYPE]}
          options={selectOptionsData[PRODUCT_FIELD_NAME.TYPE]}
          onChange={numberValue(PRODUCT_FIELD_NAME.TYPE)}
          onBlur={handleBlur}
        />

        <MultiField
          items={values[PRODUCT_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(PRODUCT_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(PRODUCT_FIELD_NAME.CATEGORIES)}
          titleTid={'Категории товара'}
          placeholderTid="Введите категории товара"
        />
        <TextareaField
          titleTid="Описание товара"
          placeholderTid="Полное описание товара"
          name={PRODUCT_FIELD_NAME.DESCRIPTION}
          value={values[PRODUCT_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(PRODUCT_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
        {(printPattern || elPattern) && (
          <TextareaField
            titleTid="Материалы"
            placeholderTid="Полное описание материалов"
            name={PRODUCT_FIELD_NAME.MATERIAL}
            value={values[PRODUCT_FIELD_NAME.MATERIAL]}
            error={getFieldError(PRODUCT_FIELD_NAME.MATERIAL)}
            onChange={handleChange}
            onBlur={handleBlur}
            minHeight={100}
          />
        )}
      </SectionLayout>
      <FieldLayout type="double" adaptive>
        {elPattern && (
          <FileField
            titleTid="Загрузка файла"
            placeholderTid="Загрузить файл pdf"
            name={PRODUCT_FIELD_NAME.FILE}
            value={values[PRODUCT_FIELD_NAME.FILE]}
            error={getFieldError(PRODUCT_FIELD_NAME.FILE)}
            onChange={(event) =>
              setFieldValue(
                PRODUCT_FIELD_NAME.FILE,
                event.currentTarget.files[0],
              )
            }
            onBlur={handleBlur}
          />
        )}
        {(printPattern || elPattern) && (
          <SectionLayout type="TEXT_SMALL">
            <SmallTitle tid="Сложность выкройки" />
            <Line>
              {[1, 2, 3, 4, 5].map((value, index) => (
                <ComplexityDot
                  key={index}
                  act={value <= values[PRODUCT_FIELD_NAME.COMPLEXITY] ? 1 : 0}
                >
                  <FieldComplexity
                    type="radio"
                    name={PRODUCT_FIELD_NAME.COMPLEXITY}
                    value={value}
                    onChange={numberValue(PRODUCT_FIELD_NAME.COMPLEXITY)}
                  />
                </ComplexityDot>
              ))}
            </Line>
          </SectionLayout>
        )}
        {sewingGood && (
          <BasicField
            titleTid="Количество товара (единиц)"
            placeholderTid="Введите количество товара"
            name={PRODUCT_FIELD_NAME.COUNT}
            value={values[PRODUCT_FIELD_NAME.COUNT]}
            error={getFieldError(PRODUCT_FIELD_NAME.COUNT)}
            onChange={numberValue(PRODUCT_FIELD_NAME.COUNT)}
            onBlur={handleBlur}
          />
        )}
      </FieldLayout>
      {(sewingGood || printPattern) && (
        <FieldArrayField
          nameFieldArray={PRODUCT_FIELD_NAME.SIZES}
          namePosition={PRODUCT_FIELD_NAME.SIZE_NAME}
          pricePosition={PRODUCT_FIELD_NAME.SIZE_PRICE}
          initialData={initialData}
          placeholder="Введите размер"
          title="Размер"
          errors={errors}
          touched={touched}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
      {sewingGood && (
        <FieldArrayField
          nameFieldArray={PRODUCT_FIELD_NAME.COLORS}
          namePosition={PRODUCT_FIELD_NAME.COLOR_NAME}
          pricePosition={PRODUCT_FIELD_NAME.COLOR_PRICE}
          initialData={initialData}
          placeholder="Введите цвет"
          title="Цвет"
          errors={errors}
          touched={touched}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
      {masterClass && (
        <FieldArrayField
          nameFieldArray={PRODUCT_FIELD_NAME.PROGRAMS}
          namePosition={PRODUCT_FIELD_NAME.PROGRAM_NAME}
          pricePosition={PRODUCT_FIELD_NAME.PROGRAM_PRICE}
          initialData={initialData}
          placeholder="Введите название программы"
          title="Программа"
          errors={errors}
          touched={touched}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
      <SectionLayout type="SMALL">
        <Title tid="Цена" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="Скидка (%)"
            name={PRODUCT_FIELD_NAME.DISCOUNT}
            value={values[PRODUCT_FIELD_NAME.DISCOUNT]}
            error={getFieldError(PRODUCT_FIELD_NAME.DISCOUNT)}
            onChange={numberValue(PRODUCT_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          {elPattern && (
            <BasicField
              titleTid="Цена товара"
              placeholderTid="Введите цену товара (в руб.)"
              name={PRODUCT_FIELD_NAME.PRICE}
              value={values[PRODUCT_FIELD_NAME.PRICE]}
              error={getFieldError(PRODUCT_FIELD_NAME.PRICE)}
              onChange={numberValue(PRODUCT_FIELD_NAME.PRICE)}
              onBlur={handleBlur}
            />
          )}
          <ProductPrice
            values={values}
            discount={values[PRODUCT_FIELD_NAME.DISCOUNT]}
          />
        </FieldLayout>
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="Создать товар" />
          <ButtonSecondary type="button" tid="Отменить" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

/* <FieldArraySelect
        title="Рекомендации"
        options={selectOptionsData[PRODUCT_FIELD_NAME.RECOMENDATIONS]}
        nameSelect={PRODUCT_FIELD_NAME.RECOMENDATION_NAME}
        nameFieldArray={PRODUCT_FIELD_NAME.RECOMENDATION_NAME}
        initialData={initialData[PRODUCT_FIELD_NAME.RECOMENDATIONS]}
        values={values}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
      /> */

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Line = styled.div`
  display: flex;
  padding: ${spacing(3)};
  gap: ${spacing(1)};
  background-color: ${THEME_COLOR.GRAY};
  height: 46px;
  align-items: center;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
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
const FieldComplexity = styled(Field)`
  display: none;
`;
