import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { ORDER_FIELD_NAME } from '../basket.type';
import React from 'react';

export function CartEmail(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,

    emailConfirmed,
    isPending,
    handleSendEmailCode,
    handleConfirmEmailCode,
    sendEmailCodePending,
    confirmEmailCodePending,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <FieldLayout type="double" adaptive>
      <BasicField
        titleTid="BASKET.FORM.FIELDS.TITLES.EMAIL"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.EMAIL"
        name={ORDER_FIELD_NAME.EMAIL}
        value={values[ORDER_FIELD_NAME.EMAIL]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError(ORDER_FIELD_NAME.EMAIL)}
      />
      {!emailConfirmed && (
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
            tid="BASKET.FORM.BUTTON.SEND_VERIFICATION_CODE_TO_EMAIL"
            onClick={() => handleSendEmailCode(values[ORDER_FIELD_NAME.EMAIL])}
            disabled={sendEmailCodePending}
          />
          <ButtonSecondary
            tid="BASKET.FORM.BUTTON.VERIFICATION_EMAIL"
            onClick={() => handleConfirmEmailCode(values)}
            disabled={confirmEmailCodePending}
          />
        </React.Fragment>
      )}
    </FieldLayout>
  );
}
