import styled from 'styled-components';
import { FieldArray } from 'formik';
import { THEME_SIZE } from '../../lib/theme';
import { ButtonSecondary } from '../../lib/element/button';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ProductOptionsProps } from './components.type';
import { ProductOptionsOne } from './product-options-one';
import { ProductOptionsTwo } from './product-options-two';
import { SyntheticEvent } from 'react';
import { ProductOptionsNone } from './product-options-none';
import { FieldSelect } from 'src/lib/element/field';
import {
  numberToHundred,
  numberTwoDigit,
  numberValue,
} from 'src/lib/common/create-product-validation';

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
    productCountName = '',
    productLengthName = '',
    productFileName = '',
    initialOption,
    fieldArrayName,
    optionTypeName,
    optionSizeName,
    optionColorName,
    optionCountName = '',
    optionLengthName = '',
    optionPriceName,
    optionDiscountName,
    optionFileName = '',
    isFile = false,
    isCount = false,
    isLength = false,
    isPattern = false,
  } = props;
  const getFieldError = (name: string, index: number) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const handleType = (e: SyntheticEvent<HTMLInputElement>) => {
    const newType = Number(e.currentTarget.value);
    if (newType === 0) {
      setFieldValue(productPriceName, '');
      setFieldValue(productDiscountName, 0);
      if (isCount) setFieldValue(productCountName, 0);
      if (isLength) setFieldValue(productLengthName, '');
      setFieldValue(fieldArrayName, []);
    } else {
      const newOptions = values[fieldArrayName].map((item: any) => {
        if (newType === 1) {
          item[optionSizeName] = item[optionSizeName] || '';
          item[optionColorName] = item[optionColorName] || '';
          item[optionPriceName] = item[optionPriceName] || '';
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }
        if (newType === 2) {
          item[optionSizeName] = item[optionSizeName] || '';
          item[optionColorName] = undefined;
          item[optionPriceName] = item[optionPriceName] || '';
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }
        if (newType === 3) {
          item[optionSizeName] = undefined;
          item[optionColorName] = item[optionColorName] || '';
          item[optionPriceName] = item[optionPriceName] || '';
          item[optionDiscountName] = item[optionDiscountName] || 0;
        }

        if (isCount) item[optionCountName] = item[optionCountName] || 0;
        if (!isCount) item[optionCountName] = undefined;
        if (isLength) item[optionLengthName] = item[optionLengthName] || '';
        if (!isLength) item[optionLengthName] = undefined;

        return item;
      });
      setFieldValue(productPriceName, undefined);
      setFieldValue(productDiscountName, undefined);
      if (isFile) setFieldValue(productFileName, undefined);
      setFieldValue(fieldArrayName, newOptions);
    }

    setFieldValue(optionTypeName, newType);
  };

  const setNumber = (name: string, index: number) => (e: any) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const setTwoDigit = (name: string, index: number) => (e: any) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberTwoDigit(e));

  const setToHundred = (name: string, index: number) => (e: any) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberToHundred(e));
  const setPdfFile =
    (name: string, index: number) => (e: SyntheticEvent<HTMLInputElement>) => {
      const file = e.currentTarget?.files?.[0];
      if (!file || file.type.split('/')[1] !== 'pdf') {
        alert('PATTERNS.CREATE_ELECTRONIC.FORM.NEED_PDF');
        setFieldValue(`${fieldArrayName}.${index}.${name}`, undefined);
      } else setFieldValue(`${fieldArrayName}.${index}.${name}`, file);
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
          options={isPattern ? optionPatternSelectType : optionSelectType}
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
                    setNumber={setNumber}
                    setTwoDigit={setTwoDigit}
                    setToHundred={setToHundred}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    remove={remove}
                    fieldArrayName={fieldArrayName}
                    optionSizeName={optionSizeName}
                    optionColorName={optionColorName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                    optionCountName={optionCountName}
                    optionLengthName={optionLengthName}
                    isCount={isCount}
                    isLength={isLength}
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
                    setNumber={setNumber}
                    setTwoDigit={setTwoDigit}
                    setToHundred={setToHundred}
                    setPdfFile={setPdfFile}
                    handleBlur={handleBlur}
                    getFieldError={getFieldError}
                    remove={remove}
                    fieldTitle="Размер"
                    fieldPlaceholder="Введите размер"
                    optionName={optionSizeName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                    optionCountName={optionCountName}
                    optionLengthName={optionLengthName}
                    optionFileName={optionFileName}
                    isFile={isFile}
                    isCount={isCount}
                    isLength={isLength}
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
                    remove={remove}
                    handleChange={handleChange}
                    setNumber={setNumber}
                    setTwoDigit={setTwoDigit}
                    setToHundred={setToHundred}
                    setPdfFile={setPdfFile}
                    handleBlur={handleBlur}
                    fieldTitle="Цвет"
                    fieldPlaceholder="Введите цвет"
                    optionName={optionColorName}
                    fieldArrayName={fieldArrayName}
                    optionPriceName={optionPriceName}
                    optionDiscountName={optionDiscountName}
                    optionCountName={optionCountName}
                    optionLengthName={optionLengthName}
                    isCount={isCount}
                    isLength={isLength}
                  />
                );
              }
            })}
            {values[optionTypeName] === 0 && (
              <ProductOptionsNone
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
                productPriceName={productPriceName}
                productDiscountName={productDiscountName}
                productCountName={productCountName}
                productLengthName={productLengthName}
                isCount={isCount}
                isLength={isLength}
                isFile={isFile}
                productFileName={productFileName}
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
const optionPatternSelectType = [
  { id: 0, tid: 'Без параметров' },
  { id: 2, tid: 'Только размер' },
];

const optionSelectType = [
  { id: 0, tid: 'Без параметров' },
  { id: 1, tid: 'Размер и цвет' },
  { id: 2, tid: 'Только размер' },
  { id: 3, tid: 'Только цвет' },
];
