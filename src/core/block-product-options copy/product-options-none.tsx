import { BasicField } from '../../lib/element/field';
import { FieldLayout } from '../../lib/element/layout';
import { SyntheticEvent } from 'react';
import { ProductOptionsNoneProps } from './components.type';
import { numberValue } from 'src/lib/common/create-product-validation';

export function ProductOptionsNone(props: ProductOptionsNoneProps) {
  const {
    values,
    errors,
    touched,
    productPriceName,
    productDiscountName,
    handleBlur,
    setFieldValue,
  } = props;

  const getFieldError = (name: string) =>
    errors[name] && touched[name] && errors[name];
  const setNumber = (name: string) => (e: SyntheticEvent<HTMLInputElement>) =>
    setFieldValue(name, numberValue(e));

  return (
    <FieldLayout type="double" adaptive>
      <BasicField
        titleTid="Цена"
        placeholderTid="Введите цену (руб.)"
        name={productPriceName}
        value={values[productPriceName]}
        error={getFieldError(productPriceName)}
        onChange={setNumber(productPriceName)}
        onBlur={handleBlur}
      />
      <BasicField
        titleTid="Введите скидку (%)"
        placeholderTid="0"
        name={productDiscountName}
        value={values[productDiscountName]}
        error={getFieldError(productDiscountName)}
        onChange={setNumber(productDiscountName)}
        onBlur={handleBlur}
      />
    </FieldLayout>
  );
}
