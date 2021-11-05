import {
  numberToHundred,
  numberTwoDigit,
  numberValue,
} from 'src/lib/common/create-product-validation';
import { BasicField } from '../../element/field';
import { FieldLayout, SectionLayout } from '../../element/layout';
import { ProductOptionsNoneProps } from './components.type';
import { SyntheticEvent } from 'react';
import { MultiFilesBlock } from '../multi-files';

export function ProductOptionsNone(props: ProductOptionsNoneProps) {
  const {
    values,
    errors,
    touched,
    productPriceName,
    productDiscountName,
    productCountName,
    productLengthName,
    handleBlur,
    setFieldValue,
    isCount,
    isLength,
    isFile,

    productFileName,
    productFilesName,
  } = props;

  const getFieldError = (name: string) =>
    errors[name] && touched[name] && errors[name];

  const setNumber = (name: string) => (e: any) =>
    setFieldValue(name, numberValue(e));

  const setTwoDigit = (name: string) => (e: any) =>
    setFieldValue(name, numberTwoDigit(e));

  const setToHundred = (name: string) => (e: any) =>
    setFieldValue(name, numberToHundred(e));

  const setPdfFile =
    (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
      const file = e.currentTarget?.files?.[0];
      if (!file || file.type.split('/')[1] !== 'pdf') {
        alert('PATTERNS.CREATE_ELECTRONIC.FORM.NEED_PDF');
        setFieldValue(name, undefined);
      } else setFieldValue(name, file);
    };

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="Цена"
          type="number"
          placeholderTid="Введите цену (руб.)"
          name={productPriceName}
          value={values[productPriceName]}
          error={getFieldError(productPriceName)}
          onChange={setTwoDigit(productPriceName)}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="Введите скидку (%)"
          placeholderTid="0"
          type="number"
          name={productDiscountName}
          value={values[productDiscountName]}
          error={getFieldError(productDiscountName)}
          onChange={setToHundred(productDiscountName)}
          onBlur={handleBlur}
        />
      </FieldLayout>
      {(isCount || isLength) && (
        <FieldLayout type="double" adaptive>
          {isCount && (
            <BasicField
              titleTid="Введите количество (Шт.)"
              placeholderTid="0"
              type="number"
              name={productCountName}
              value={values[productCountName]}
              error={getFieldError(productCountName)}
              onChange={setNumber(productCountName)}
              onBlur={handleBlur}
            />
          )}
          {isLength && (
            <BasicField
              titleTid="Введите длинну (Метр) 0,00"
              placeholderTid="0"
              name={productLengthName}
              value={values[productLengthName]}
              type="number"
              error={getFieldError(productLengthName)}
              onChange={setTwoDigit(productLengthName)}
              onBlur={handleBlur}
            />
          )}
        </FieldLayout>
      )}
      {isFile && (
        <MultiFilesBlock
          handleChange={setPdfFile}
          fileName={productFileName}
          filesName={productFilesName}
          values={values[productFilesName]}
          handleBlur={handleBlur}
        />
      )}
    </SectionLayout>
  );
}
