import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonBasic, ButtonSecondary } from '../../../../lib/element/button';
import {
  BasicField,
  FieldSelect,
  TextareaField,
} from '../../../../lib/element/field';
import { FieldArray } from 'formik';
import { ProuctCategoriesItem } from './product-categories-item';
import { ProductOptionsItem } from './product-options-Item';

export function CreateProductFieldComponent({
  //----------------------------  formik
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  //----------------------------  архитектура
  isPending,
  isSuccess,
  isError,
  errorMessage,
  //---------------------------- для fieldArray item
  initialCategoriesItem,
  initialOptionsItem,
  initialPositionsItem,
  //---------------------------- название для fieldArray
  categoriesFieldArray,
  optionsFieldArray,
  positionsFieldArray,
  //----------------------------  fieldNames
  productNameFieldName,
  productModifierFieldName,
  productCategoryFieldName,
  productDescriptionFieldName,
  optionCategorySelect,
  positionNameFieldName,
  positionPriceFieldName,
  productPriceFieldName,
  productDiscountFieldName,
  //----------------------------  other
  categoriesForOptionSelect,
}) {
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
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
                        initialPositionsItem={initialPositionsItem}
                        categoriesFieldArray={categoriesFieldArray}
                        productCategoryFieldName={productCategoryFieldName}
                        fieldCount={values[categoriesFieldArray].length}
                        removeCategoryField={remove}
                        values={values[categoriesFieldArray]}
                        getFieldError={getFieldError}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    ))}
                    <ButtonBasic
                      tid="Добавить категорию"
                      type="button"
                      onClick={() => push(initialCategoriesItem)}
                    />
                  </>
                )}
              </FieldArray>
            </FieldLayout>
          </SectionLayout>
          <TextareaField
            titleTid="Описание товара"
            placeholderTid="Полное описание товара"
            name={productDescriptionFieldName}
            value={values[productDescriptionFieldName]}
            error={getFieldError(productDescriptionFieldName)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </SectionLayout>

        {categoriesForOptionSelect.length !== 0 && (
          <SectionLayout type="SMALL">
            <Title tid="Опции товара" />
            <FieldArray name={optionsFieldArray}>
              {({ remove, push }) => (
                <>
                  {values[optionsFieldArray].map((_, index) => (
                    <ProductOptionsItem
                      key={index}
                      index={index}
                      values={values[optionsFieldArray][index]}
                      //---------------------------- для fieldArray
                      optionsFieldArray={optionsFieldArray}
                      initialPositionsItem={initialPositionsItem}
                      positionsFieldArray={positionsFieldArray}
                      //----------------------------  fieldNames
                      categoriesForOptionSelect={categoriesForOptionSelect}
                      optionCategorySelect={optionCategorySelect}
                      positionNameFieldName={positionNameFieldName}
                      positionPriceFieldName={positionPriceFieldName}
                      fieldCount={values[optionsFieldArray].length}
                      removeOptionItem={remove}
                    />
                  ))}
                  <FieldLayout type="double" adaptive>
                    <ButtonSecondary
                      tid="Добавить опцию"
                      type="button"
                      onClick={() => push(initialOptionsItem)}
                    />
                  </FieldLayout>
                </>
              )}
            </FieldArray>
          </SectionLayout>
        )}

        <SectionLayout type="SMALL">
          <Title tid="Цена" />
          <FieldLayout type="double" adaptive>
            <BasicField
              placeholderTid="Введите цену для товара"
              titleTid="Цена товара (минимальная)"
              name={productPriceFieldName}
              value={values[productPriceFieldName]}
              error={getFieldError(productPriceFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <BasicField
              placeholderTid="0 (-0%)"
              titleTid="Скидка"
              name={productDiscountFieldName}
              value={values[productDiscountFieldName]}
              error={getFieldError(productDiscountFieldName)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ButtonSecondary tid="Создать товар" />
            <ButtonBasic tid="Отменить (не раб)" type="button" />
          </FieldLayout>
        </SectionLayout>
      </SectionLayout>
    </form>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
