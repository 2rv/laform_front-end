import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { ORDER_FIELD_NAME } from '../basket.type';

export function CartActions(props) {
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
      {emailConfirmed ? (
        <ButtonPrimary
          tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
          disabled={isPending}
          type="submit"
        />
      ) : (
        <>
          <BasicField
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
        </>
      )}
    </FieldLayout>
  );
}
