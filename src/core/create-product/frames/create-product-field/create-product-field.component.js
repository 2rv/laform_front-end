import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import {
  ButtonBasic,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../lib/element/button';
import {
  BasicField,
  FieldSelect,
  TextareaField,
} from '../../../../lib/element/field';
import { Field, FieldArray } from 'formik';
import { ProuctCategoriesItem } from './product-categories-item';
import { PositionItem } from './product-position-Item';
import { ProductPrice } from './product-price';
import { ErrorField } from '../../../../lib/element/error';
import { FileField } from 'src/lib/element/field/file.field';

export function CreateProductFieldComponent(props) {
  const {
    //----------------------------  formik
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    //---------------------------- архитектура
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //---------------------------- initObject
    initialData,
    selectOptionsData,
    //---------------------------- fieldArrays
    categoriesFieldArray,
    sizesFieldArray,
    colorsFieldArray,
    progrmasFieldArray,
    //---------------------------- selects and radio
    complexityPattern,
    typeSelectName,
    //---------------------------- fields
    productCategorySelectName,
    colorNameFieldName,
    colorPriceFieldName,
    sizeNameFieldName,
    sizePriceFieldName,
    discountFieldName,
    productNameFieldName,
    productModifierFieldName,
    productDescriptionFieldName,
    productMaterialFieldName,
    programNameFieldName,
    programPriceFieldName,
    productCountFieldName,
    electroincPatternPriceFieldName,
    electroincPatternFile,
  } = props;

  //----------------------------

  const masterClass = Number(values[typeSelectName]) === 0;
  const electroincPattern = Number(values[typeSelectName]) === 1;
  const printPattern = Number(values[typeSelectName]) === 2;
  const sewingGood = Number(values[typeSelectName]) === 3;

  //----------------------------

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  //----------------------------
  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        {/* Название плашка тип категории описание сложность выкройки материалы товара */}
        <SectionLayout type="SMALL">
          <FieldLayout type="double" adaptive>
            <BasicField
              titleTid="Название товара"
              placeholderTid="Введите название товара"
              name={productNameFieldName}
              value={values[productNameFieldName]}
              error={getFieldError(productNameFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <BasicField
              titleTid="Плашка товара"
              placeholderTid="Введите плашку товара"
              name={productModifierFieldName}
              value={values[productModifierFieldName]}
              error={getFieldError(productModifierFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FieldLayout>
          <FieldSelect
            titleTid="Тип товара"
            name={typeSelectName}
            value={values[typeSelectName]}
            options={selectOptionsData[typeSelectName]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SectionLayout type="TEXT_SMALL">
            <SmallText tid="Категории товара" />
            <FieldLayout type="double" adaptive>
              <FieldArray name={categoriesFieldArray}>
                {({ remove, push }) => (
                  <>
                    {values[categoriesFieldArray].map((_, index) => (
                      <ProuctCategoriesItem
                        key={index}
                        index={index}
                        categoriesFieldArray={categoriesFieldArray}
                        productCategorySelectName={productCategorySelectName}
                        fieldCount={values[categoriesFieldArray].length}
                        values={values[categoriesFieldArray]}
                        remove={remove}
                        categoryOptions={
                          selectOptionsData[productCategorySelectName]
                        }
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                      />
                    ))}
                    <ButtonSecondary
                      tid="Добавить категорию"
                      type="button"
                      onClick={() => push(initialData[categoriesFieldArray])}
                    />
                  </>
                )}
              </FieldArray>
            </FieldLayout>
          </SectionLayout>

          {(electroincPattern || printPattern) && (
            <SectionLayout type="TEXT_SMALL">
              <SmallText tid="Сложность выкройки" />
              <Line>
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <ComplexityDot
                    key={index}
                    act={value <= values[complexityPattern] ? 1 : 0}
                  >
                    <FieldComplexity
                      type="radio"
                      name={complexityPattern}
                      value={value}
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
              name={productCountFieldName}
              value={values[productCountFieldName]}
              error={getFieldError(productCountFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          <FieldLayout>
            <TextareaField
              titleTid="Описание товара"
              placeholderTid="Полное описание товара"
              name={productDescriptionFieldName}
              value={values[productDescriptionFieldName]}
              error={getFieldError(productDescriptionFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
              minHeight={100}
            />
            {(printPattern || electroincPattern) && (
              <TextareaField
                titleTid="Материалы"
                placeholderTid="Полное описание материалов"
                name={productMaterialFieldName}
                value={values[productMaterialFieldName]}
                error={getFieldError(productMaterialFieldName)}
                onChange={handleChange}
                onBlur={handleBlur}
                minHeight={100}
              />
            )}
          </FieldLayout>
        </SectionLayout>
        {/* Размер */}
        {(sewingGood || printPattern) && (
          <SectionLayout type="SMALL">
            <Title tid="Размер" />
            <FieldArray name={sizesFieldArray}>
              {({ remove, push }) => (
                <FieldLayout type="double" adaptive>
                  {values[sizesFieldArray].map((_, index) => (
                    <PositionItem
                      key={index}
                      index={index}
                      fieldCount={values[sizesFieldArray].length}
                      nameFieldArray={sizesFieldArray}
                      remove={remove}
                      namePosition={sizeNameFieldName}
                      pricePosition={sizePriceFieldName}
                      placeholderTid="Введите размер"
                      titleTid="Размер"
                      errors={errors[sizesFieldArray]?.[index]}
                      touched={touched[sizesFieldArray]?.[index]}
                      setFieldValue={setFieldValue}
                    />
                  ))}
                  <ButtonSecondary
                    tid="Добавить размер"
                    type="button"
                    onClick={() => push(initialData[sizesFieldArray])}
                  />
                </FieldLayout>
              )}
            </FieldArray>
          </SectionLayout>
        )}
        {/* Цвет */}
        {sewingGood && (
          <SectionLayout type="SMALL">
            <Title tid="Цвет" />
            <FieldArray name={colorsFieldArray}>
              {({ remove, push }) => (
                <FieldLayout type="double" adaptive>
                  {values[colorsFieldArray].map((_, index) => (
                    <PositionItem
                      key={index}
                      index={index}
                      fieldCount={values[colorsFieldArray].length}
                      nameFieldArray={colorsFieldArray}
                      remove={remove}
                      namePosition={colorNameFieldName}
                      pricePosition={colorPriceFieldName}
                      placeholderTid="Введите цвет"
                      titleTid="Цвет"
                      errors={errors[colorsFieldArray]?.[index]}
                      touched={touched[colorsFieldArray]?.[index]}
                      setFieldValue={setFieldValue}
                    />
                  ))}
                  <ButtonSecondary
                    tid="Добавить цвет"
                    type="button"
                    onClick={() => push(initialData[colorsFieldArray])}
                  />
                </FieldLayout>
              )}
            </FieldArray>
          </SectionLayout>
        )}
        {/* Программа */}
        {masterClass && (
          <SectionLayout type="SMALL">
            <Title tid="Программа" />
            <FieldArray name={progrmasFieldArray}>
              {({ remove, push }) => (
                <FieldLayout type="double" adaptive>
                  {values[progrmasFieldArray].map((_, index) => (
                    <PositionItem
                      key={index}
                      index={index}
                      fieldCount={values[progrmasFieldArray].length}
                      nameFieldArray={progrmasFieldArray}
                      remove={remove}
                      namePosition={programNameFieldName}
                      pricePosition={programPriceFieldName}
                      placeholderTid="Введите название программы"
                      titleTid="Программа"
                      errors={errors[progrmasFieldArray]?.[index]}
                      touched={touched[progrmasFieldArray]?.[index]}
                      setFieldValue={setFieldValue}
                    />
                  ))}
                  <ButtonSecondary
                    tid="Добавить программу"
                    type="button"
                    onClick={() => push(initialData[progrmasFieldArray])}
                  />
                </FieldLayout>
              )}
            </FieldArray>
          </SectionLayout>
        )}
        {/* Загрузить файл электронной выкройки */}
        {electroincPattern && (
          <SectionLayout type="SMALL">
            <Title tid="Другое" />
            <FieldLayout type="double" adaptive>
              <FileField
                titleTid="Загрузка файла"
                placeholderTid="Загрузить файл pdf"
                name={electroincPatternFile}
                value={values[electroincPatternFile]}
                error={getFieldError(electroincPatternFile)}
                onChange={(event) =>
                  setFieldValue(
                    electroincPatternFile,
                    event.currentTarget.files[0],
                  )
                }
                onBlur={handleBlur}
              />
              <BasicField
                titleTid="Цена товара"
                placeholderTid="Введите цену товара (в руб.)"
                name={electroincPatternPriceFieldName}
                value={values[electroincPatternPriceFieldName]}
                error={getFieldError(electroincPatternPriceFieldName)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldLayout>
          </SectionLayout>
        )}
        {/* Рекомендации */}
        <SectionLayout type="SMALL">
          <Title tid="Рекомендации" />
          <FieldLayout type="double" adaptive>
            <FieldSelect titleTid="Товар" options={[{ id: 0, tid: 'Товар' }]} />
            <FieldSelect titleTid="Товар" options={[{ id: 0, tid: 'Товар' }]} />
            <FieldSelect titleTid="Товар" options={[{ id: 0, tid: 'Товар' }]} />
          </FieldLayout>
        </SectionLayout>
        {/* Цена и скидка */}
        <SectionLayout type="SMALL">
          <Title tid="Цена" />
          <FieldLayout type="double" adaptive>
            <BasicField
              placeholderTid="0"
              titleTid="Скидка (%)"
              name={discountFieldName}
              value={values[discountFieldName]}
              error={getFieldError(discountFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ProductPrice
              values={values}
              discount={values[discountFieldName]}
            />
            <ButtonPrimary type="submit" tid="Создать товар" />
            <ButtonSecondary tid="Отменить (не раб)" type="button" />
          </FieldLayout>
        </SectionLayout>
      </SectionLayout>
    </form>
  );
}

const FileLabel = styled.label`
  margin-top: 19px;
  min-height: 46px;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const FileInput = styled(BasicField)`
  display: none;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallText = styled(TextSecondary)`
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
