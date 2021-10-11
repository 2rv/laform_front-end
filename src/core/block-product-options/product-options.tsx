import styled from 'styled-components';
import { FieldArray } from 'formik';
import { THEME_SIZE } from '../../lib/theme';
import { ButtonSecondary } from '../../lib/element/button';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { numberValue } from '../../lib/common/create-product-helpers';
import { ProductOptionsProps } from './components.type';
import { ProductOptionsOne } from './product-options-one';
import { ProductOptionsTwo } from './product-options-two';
import { SyntheticEvent } from 'react';
import { ProductOptionsNone } from './product-options-none';
import { FieldSelect } from 'src/lib/element/field';

export function ProductOptions(props: ProductOptionsProps) {
  const {
    errors,
    touched,
    values,
    setFieldValue,
    handleChange,
    handleBlur,

    productPriceName,
    productDiscountName,

    initialOption,
    fieldArrayName,
    optionTypeName,
    optionSizeName,
    optionColorName,

    optionPriceName,
    optionDiscountName,
  } = props;
  const getFieldError = (name: string, index: number) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const setNumber = (name: string, index: number) => (e: any) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const handleType = (e: SyntheticEvent<HTMLInputElement>) => {
    const newType = Number(e.currentTarget.value);
    if (newType === 0) {
      setFieldValue(productPriceName, 0);
      setFieldValue(productDiscountName, 0);
      setFieldValue(fieldArrayName, []);
    } else {
      const newOptions = values[fieldArrayName].map((item: any) => {
        if (newType === 1) {
          item[optionSizeName] = item[optionSizeName] || '';
          item[optionColorName] = item[optionColorName] || '';
          item[optionPriceName] = item[optionPriceName] || 0;
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }
        if (newType === 2) {
          item[optionSizeName] = item[optionSizeName] || '';
          item[optionColorName] = undefined;
          item[optionPriceName] = item[optionPriceName] || 0;
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }
        if (newType === 3) {
          item[optionSizeName] = undefined;
          item[optionColorName] = item[optionColorName] || '';
          item[optionPriceName] = item[optionPriceName] || 0;
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }
        return item;
      });

      setFieldValue(fieldArrayName, newOptions);
    }

    setFieldValue(optionTypeName, newType);
  };

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <Title
          tid={
            values[optionTypeName] === 0 ? 'Без параметров' : 'Параметры товара'
          }
        />
        <FieldSelect
          titleTid="Выберите тип параметров"
          name={optionTypeName}
          value={values[optionTypeName]}
          options={optionSelectType}
          onChange={handleType}
          onBlur={handleBlur}
        />
      </FieldLayout>
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value: any, index: number) => {
              const isFirst = values[fieldArrayName].length !== 1;
              if (values[optionTypeName] === 1) {
                return (
                  <ProductOptionsOne
                    key={index}
                    value={value}
                    index={index}
                    isFirst={isFirst}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    fieldArrayName={fieldArrayName}
                    optionSizeName={optionSizeName}
                    optionColorName={optionColorName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                  />
                );
              } else if (values[optionTypeName] === 2) {
                return (
                  <ProductOptionsTwo
                    key={index}
                    index={index}
                    value={value}
                    isFirst={isFirst}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    fieldTitle="Размер"
                    fieldPlaceholder="Введите размер"
                    optionName={optionSizeName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                  />
                );
              } else if (values[optionTypeName] === 3) {
                return (
                  <ProductOptionsTwo
                    key={index}
                    index={index}
                    value={value}
                    isFirst={isFirst}
                    getFieldError={getFieldError}
                    setNumber={setNumber}
                    remove={remove}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    fieldTitle="Цвет"
                    fieldPlaceholder="Введите цвет"
                    optionName={optionColorName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                  />
                );
              }
            })}
            {values[optionTypeName] === 0 && (
              <ProductOptionsNone
                values={values}
                errors={errors}
                touched={touched}
                productPriceName={productPriceName}
                productDiscountName={productDiscountName}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
              />
            )}
            <ButtonSecondary
              tid="Добавить параметр"
              onClick={() => push(initialOption)}
              disabled={values[optionTypeName] === 0}
            />
          </SectionLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  align-self: center;
  justify-self: center;
`;
const optionSelectType = [
  { id: 0, tid: 'Без параметров' },
  { id: 1, tid: 'Размер и цвет' },
  { id: 2, tid: 'Только размер' },
  { id: 3, tid: 'Только цвет' },
];
