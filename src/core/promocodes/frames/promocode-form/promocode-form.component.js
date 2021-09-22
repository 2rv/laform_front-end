import styled from 'styled-components';
import { BasicField } from '../../../../lib/element/field';
import { FieldLayout } from '../../../../lib/element/layout';
import { ButtonSecondary } from '../../../../lib/element/button';
import { spacing } from '../../../../lib/theme';

export function PromocodeFormComponent(props) {
  const {
    fieldPromocode,
    fieldDiscount,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return (
      !isValid ||
      (Object.keys(touched).length === 0 && touched.constructor === Object)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldLayout type="double" adaptive>
        <BasicField
          placeholderTid="PROMOCODE.WRITE_PROMOCODE"
          name={fieldPromocode}
          value={values[fieldPromocode]}
          error={getFieldError(fieldPromocode)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          placeholderTid="PRODUCT_PRICE.DISCOUNT"
          name={fieldDiscount}
          value={values[fieldDiscount]}
          error={getFieldError(fieldDiscount)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ButtonSecondary
          tid="PROMOCODE.ADD_PROMOCODE"
          type="submit"
          disabled={isSubmitDisabled()}
        />
      </FieldLayout>
    </form>
  );
}
