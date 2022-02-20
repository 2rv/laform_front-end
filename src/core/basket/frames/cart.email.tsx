import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { httpRequest } from 'src/main/http';
import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { EmailConfirmed } from 'src/core/header-component';
import { CartEmailProps, ORDER_FIELD_NAME, formikValues } from '../basket.type';
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

  function getFieldError(name: ORDER_FIELD_NAME): string {
    return (touched[name] && errors[name] && errors[name]) || '';
  }
  const [isSending, setIsSending] = useState(false);

  const sendCode = useCallback(
    async (values: formikValues) => {
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
    },
    [isSending],
  );

  const confirmCode = useCallback(
    async (values: formikValues) => {
      if (isSending) return;
      setIsSending(true);
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
      setIsSending(false);
    },
    [isSending],
  );

  const [count, startInterval] = useInterval(() => {
    setIsSending(false);
  });

  return (
    <React.Fragment>
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.EMAIL"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.EMAIL"
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
            <React.Fragment>
              <BasicField
                titleTid="BASKET.FORM.FIELDS.TITLES.CONFIRM_CODE"
                placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.WRITE_CODE"
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
                    : 'BASKET.FORM.BUTTON.SEND_VERIFICATION_CODE_TO_EMAIL'
                }
                onClick={() => sendCode(values)}
                disabled={isSending || !!errors[ORDER_FIELD_NAME.EMAIL]}
              />
              <ButtonSecondary
                tid="BASKET.FORM.BUTTON.VERIFICATION_EMAIL"
                onClick={() => confirmCode(values)}
                disabled={
                  !values[ORDER_FIELD_NAME.EMAIL] ||
                  !!errors[ORDER_FIELD_NAME.EMAIL] ||
                  !values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE] ||
                  !!errors[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]
                }
              />
            </React.Fragment>
          ))}
      </FieldLayout>
      <Divider />
    </React.Fragment>
  );
}

const Case = styled.div`
  display: grid;
  margin-top: 19px;
  width: 100%;
`;
