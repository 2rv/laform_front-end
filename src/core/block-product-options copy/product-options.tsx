import styled from 'styled-components';
import { FieldArray } from 'formik';
import { THEME_SIZE } from '../../lib/theme';
import { ButtonSecondary } from '../../lib/element/button';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { numberValue } from '../../lib/common/create-product-helpers';
import React from 'react';
import { ProductOptionsProps } from './components.type';
import { ProductOptionsOne } from './product-options-one';
import { ProductOptionsTwo } from './product-options-two';
import { ProductOptionsThree } from './product-options-three';
import { SyntheticEvent } from 'react';
import { ProductOptionsNone } from './product-options-none';

export function ProductOptions(props: ProductOptionsProps) {
  const {
    initialOption,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
    productPriceName,
    productDiscountName,
    fieldArrayName,
    optionTypeName,
    optionSizeName,
    optionSizePriceName,
    optionColorName,
    optionColorPriceName,
    optionDiscountName,
  } = props;
  const getFieldError = (name: string, index: number) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const setNumber = (name: string, index: number) => (e: any) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const handleTypeForOne =
    (index: number) => (e: SyntheticEvent<HTMLInputElement>) => {
      const newType = Number(e.currentTarget.value);
      const item = values[fieldArrayName][index];

      if (newType === 1) {
        item[optionSizeName] = item[optionSizeName] || '';
        item[optionSizePriceName] = item[optionSizePriceName] || 0;
        item[optionColorName] = item[optionColorName] || '';
        item[optionColorPriceName] = undefined;
        item[optionTypeName] = 1;
      }
      if (newType === 2) {
        item[optionSizeName] = item[optionSizeName] || '';
        item[optionSizePriceName] = item[optionSizePriceName] || 0;
        item[optionColorName] = undefined;
        item[optionColorPriceName] = undefined;
        item[optionTypeName] = 2;
      }
      if (newType === 3) {
        item[optionSizeName] = undefined;
        item[optionSizePriceName] = undefined;
        item[optionColorName] = item[optionColorName] || '';
        item[optionColorPriceName] = item[optionColorPriceName] || 0;
        item[optionTypeName] = 3;
      }
      if (newType === 4) {
        item[optionSizeName] = item[optionSizeName] || '';
        item[optionSizePriceName] = item[optionSizePriceName] || 0;
        item[optionColorName] = item[optionColorName] || '';
        item[optionColorPriceName] = item[optionColorPriceName] || 0;
        item[optionTypeName] = 4;
      }

      setFieldValue(fieldArrayName[index], item);
    };

  return (
    <SectionLayout type="SMALL">
      {values[fieldArrayName].length === 0 ? (
        <>
          <Title tid="Без параметров" />
          <ProductOptionsNone
            values={values}
            errors={errors}
            touched={touched}
            productPriceName={productPriceName}
            productDiscountName={productDiscountName}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
        </>
      ) : (
        <Title tid="Параметры товара" />
      )}
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value: any, index: number) => {
              const isFirst = values[fieldArrayName].length !== 1;
              if (value[optionTypeName] === 1) {
                return (
                  <ProductOptionsOne
                    key={index}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isFirst={isFirst}
                    value={value}
                    index={index}
                    optionTypeName={optionTypeName}
                    fieldArrayName={fieldArrayName}
                    optionSizeName={optionSizeName}
                    optionColorName={optionColorName}
                    optionSizePriceName={optionSizePriceName}
                    optionDiscountName={optionDiscountName}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    handleType={handleTypeForOne}
                  />
                );
              } else if (value[optionTypeName] === 2) {
                return (
                  <ProductOptionsTwo
                    key={index}
                    index={index}
                    isFirst={isFirst}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    fieldTitle="Размер"
                    fieldPlaceholder="Введите размер"
                    optionTypeName={optionTypeName}
                    optionName={optionSizeName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionSizePriceName}
                    handleType={handleTypeForOne}
                  />
                );
              } else if (value[optionTypeName] === 3) {
                return (
                  <ProductOptionsTwo
                    key={index}
                    index={index}
                    isFirst={isFirst}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    fieldTitle="Цвет"
                    fieldPlaceholder="Введите цвет"
                    optionTypeName={optionTypeName}
                    optionName={optionColorName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionColorPriceName}
                    handleType={handleTypeForOne}
                  />
                );
              } else if (value[optionTypeName] === 4) {
                return (
                  <ProductOptionsThree
                    key={index}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isFirst={isFirst}
                    value={value}
                    index={index}
                    optionTypeName={optionTypeName}
                    fieldArrayName={fieldArrayName}
                    optionSizeName={optionSizeName}
                    optionSizePriceName={optionSizePriceName}
                    optionColorName={optionColorName}
                    optionColorPriceName={optionColorPriceName}
                    optionDiscountName={optionDiscountName}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    handleType={handleTypeForOne}
                  />
                );
              }
            })}

            <ButtonSecondary
              tid="Добавить параметр"
              onClick={() => push(initialOption)}
            />
          </SectionLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
