import { FieldArray } from 'formik';
import { ButtonSecondary } from '../../element/button';
import { SectionLayout, FieldLayout } from '../../element/layout';
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
import { Divider } from 'src/lib/element/divider';

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

    initialOption,
    fieldArrayName,
    optionTypeName,
    optionSizeName,
    optionColorName,
    optionCountName = '',
    optionLengthName = '',
    optionPriceName,
    optionDiscountName,
    isFile = false,
    isCount = false,
    isLength = false,
    isPattern = false,

    optionFilesName = '',
    optionFileName = '',
    productFileName = '',
    productFilesName = '',
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
      if (isFile) setFieldValue(productFilesName, []);
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
      if (isFile) setFieldValue(productFilesName, undefined);
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

  function setPdfFile(name: string) {
    return (e: SyntheticEvent<HTMLInputElement>) => {
      const file = e.currentTarget?.files?.[0];
      if (!file || file.type.split('/')[1] !== 'pdf') {
        alert('PATTERNS.CREATE_ELECTRONIC.FORM.NEED_PDF');
        setFieldValue(name, undefined);
      } else setFieldValue(name, file);
    };
  }

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <FieldSelect
          titleTid="Выберите тип параметров"
          name={optionTypeName}
          value={values[optionTypeName]}
          options={isPattern ? optionPatternSelectType : optionSelectType}
          onChange={handleType}
          onBlur={handleBlur}
        />
      </FieldLayout>

      <Divider />

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
                    optionFilesName={optionFilesName}
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
                    optionFileName={optionFileName}
                    optionFilesName={optionFilesName}
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
                productFilesName={productFilesName}
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
