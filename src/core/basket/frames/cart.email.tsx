import styled from 'styled-components';
import { useState, Fragment } from 'react';
import { httpRequest } from 'src/main/http';
import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { EmailConfirmed } from 'src/core/header-component';
import { CartEmailProps, ORDER_FIELD_NAME } from '../basket.type';
import { useInterval } from 'src/lib/common/hooks';

export function CartEmail(props: CartEmailProps) {
  const {
    formik: {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      setFieldValue,
      setFieldError,
    },
    isAuth,
  } = props;

  const [isSending, setIsSending] = useState(false);
  const [count, startInterval] = useInterval(() => {
    setIsSending(false);
  });

  const sendCode = async () => {
    if (isSending) return;
    setIsSending(true);
    startInterval();
    try {
      await httpRequest({
        method: 'POST',
        url: '/mail/send/verification-code',
        data: { email: values[ORDER_FIELD_NAME.EMAIL] },
      });
    } catch (err: any) {
      setFieldError(ORDER_FIELD_NAME.EMAIL, err.response.data.message);
    }
  };
  const confirmCode = async () => {
    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/auth/verify/code',
        data: {
          email: values[ORDER_FIELD_NAME.EMAIL],
          code: values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE],
        },
      });

      setFieldValue(ORDER_FIELD_NAME.EMAIL_CONFIRMED, response.data || false);
    } catch (err: any) {
      setFieldError(
        ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE,
        err.response.data.message,
      );
    }
  };
  const getFieldError = (name: ORDER_FIELD_NAME): string => {
    return (touched[name] && errors[name] && errors[name]) || '';
  };

  return (
    <Fragment>
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="BASKET.FORM.CART_EMAIL.EMAIL_TITLE"
          placeholderTid="BASKET.FORM.CART_EMAIL.EMAIL_PLACEHOLDER"
          name={ORDER_FIELD_NAME.EMAIL}
          value={values[ORDER_FIELD_NAME.EMAIL]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.EMAIL)}
          disabled={isAuth}
        />
        {!values[ORDER_FIELD_NAME.EMAIL_CONFIRMED] &&
          (isAuth ? (
            <Case>
              <EmailConfirmed isHide={false} />
            </Case>
          ) : (
            <Fragment>
              <BasicField
                titleTid="BASKET.FORM.CART_EMAIL.CONFIRM_CODE_TITLE"
                placeholderTid="BASKET.FORM.CART_EMAIL.CONFIRM_CODE_PLACEHOLDER"
                name={ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE}
                value={values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE)}
              />
              <ButtonSecondary
                tid={
                  isSending
                    ? `${count}`
                    : 'BASKET.FORM.FORM.CART_EMAIL.SEND_CODE'
                }
                onClick={sendCode}
                disabled={isSending || !!errors[ORDER_FIELD_NAME.EMAIL]}
              />
              <ButtonSecondary
                tid="BASKET.FORM.FORM.CART_EMAIL.CONFIRM_CODE"
                onClick={confirmCode}
                disabled={
                  !values[ORDER_FIELD_NAME.EMAIL] ||
                  !!errors[ORDER_FIELD_NAME.EMAIL] ||
                  !values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE] ||
                  !!errors[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]
                }
              />
            </Fragment>
          ))}
      </FieldLayout>
      <Divider />
    </Fragment>
  );
}

const Case = styled.div`
  display: grid;
  margin-top: 19px;
  width: 100%;
`;
