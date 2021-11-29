import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { CartPromoCodeProps, ORDER_FIELD_NAME } from '../basket.type';
import { httpRequest } from 'src/main/http';

export function CartPromoCode(props: CartPromoCodeProps) {
  const {
    formik: {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      setFieldError,
      setFieldValue,
    },
  } = props;

  const getFieldError = (name: ORDER_FIELD_NAME) => {
    return errors[name] && touched[name] && errors[name];
  };
  const [isSending, setIsSending] = useState(false);

  const confirmCode = useCallback(
    async (code) => {
      if (isSending) return;
      setIsSending(true);
      try {
        const response = await httpRequest({
          method: 'GET',
          url: '/promo-code/check/' + code,
        });
        setFieldValue(
          ORDER_FIELD_NAME.PROMO_CODE,
          response.data.promocode || '',
        );
        setFieldValue(
          ORDER_FIELD_NAME.PROMO_DISCOUNT,
          response.data.discount || 0,
        );
      } catch (err: any) {
        setFieldError(ORDER_FIELD_NAME.PROMO_CODE, err.response.data.message);
      }
      setIsSending(false);
    },
    [isSending],
  );

  return (
    <FieldLayout type="double" adaptive>
      <BasicField
        titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
        name={ORDER_FIELD_NAME.PROMO_CODE}
        value={values[ORDER_FIELD_NAME.PROMO_CODE]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError(ORDER_FIELD_NAME.PROMO_CODE)}
      />
      <Button
        tid="BASKET.FORM.ACTIVATE"
        onClick={() => confirmCode(values[ORDER_FIELD_NAME.PROMO_CODE])}
        disabled={isSending || !!errors[ORDER_FIELD_NAME.PROMO_CODE]}
      />
    </FieldLayout>
  );
}
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
