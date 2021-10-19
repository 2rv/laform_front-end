import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import {
  BasicField,
  FieldCheckbox,
  FieldSelect,
  TextareaField,
} from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ORDER_FIELD_NAME } from '../basket.type';
import { ButtonBasic, ButtonSecondary } from 'src/lib/element/button';
import { useDispatch } from 'react-redux';
import { sendEmailCode, confirmEmailForOrder } from '../basket.action';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function FormComponent(props) {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    pageLoading,
    isPending,
    diliveryOptions = [],
    paymentMethodOptions = [],
    checkPromoCode,
    promoCodePending,
    sendEmailCodePending,
    sendEmailCodeSuccess,
    emailConfirmedState,
    confirmEmailForOrderErrorMessage,
    confirmEmailForOrderError,
    confirmEmailForOrderPending,
    confirmEmailForOrderSuccess,
    isAuth,
  } = props;

  const dispatch = useDispatch();

  const sendEmailCodeHandler = () => {
    dispatch(sendEmailCode({ email: values[ORDER_FIELD_NAME.EMAIL] }));
  };

  const confirmEmailForOrderHandler = () => {
    dispatch(confirmEmailForOrder(values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]));
  };

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  return (
    <SectionLayout type="SMALL">
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
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.FULL_NAME"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
          name={ORDER_FIELD_NAME.FULL_NAME}
          value={values[ORDER_FIELD_NAME.FULL_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.FULL_NAME)}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CURRENT_CITY"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CURRENT_CITY"
          name={ORDER_FIELD_NAME.CITY}
          value={values[ORDER_FIELD_NAME.CITY]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.CITY)}
        />
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_DELIVERY_METHOD"
          options={diliveryOptions}
          name={ORDER_FIELD_NAME.DELIVERY_METHOD}
          value={values[ORDER_FIELD_NAME.DELIVERY_METHOD]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.DELIVERY_METHOD)}
          textValue
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
          name={ORDER_FIELD_NAME.PHONE}
          value={values[ORDER_FIELD_NAME.PHONE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PHONE)}
        />
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_PAYMENT_METHOD"
          options={paymentMethodOptions}
          name={ORDER_FIELD_NAME.PAYMENT_METHOD}
          value={values[ORDER_FIELD_NAME.PAYMENT_METHOD]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PAYMENT_METHOD)}
        />
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
            disabled={promoCodePending}
            onClick={() => checkPromoCode(values[ORDER_FIELD_NAME.PROMO_CODE])}
          />
        </FieldLayout>
        <FieldCheckbox
          titleTid="Сохранение данных"
          labelTid="Cохранить данные"
          name={ORDER_FIELD_NAME.SAVE_USER_INFO}
          value={values[ORDER_FIELD_NAME.SAVE_USER_INFO]}
          onBlur={handleBlur}
          checked={values[ORDER_FIELD_NAME.SAVE_USER_INFO]}
          onClick={(e) =>
            setFieldValue(
              ORDER_FIELD_NAME.SAVE_USER_INFO,
              !values[ORDER_FIELD_NAME.SAVE_USER_INFO],
            )
          }
        />
      </FieldLayout>
      <TextareaField
        titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
        name={ORDER_FIELD_NAME.DESCRIPTION}
        value={values[ORDER_FIELD_NAME.DESCRIPTION]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError(ORDER_FIELD_NAME.DESCRIPTION)}
      />
      {(!isAuth && emailConfirmedState !== true) && (
        <>
          <FieldLayout type="double" adaptive>
            <ButtonSecondary
              tid="BASKET.FORM.BUTTON.SEND_VERIFICATION_CODE_TO_EMAIL"
              onClick={sendEmailCodeHandler}
              disabled={sendEmailCodePending || errors[ORDER_FIELD_NAME.EMAIL]}
            />
            {sendEmailCodeSuccess && (
              <SuccessAlert tid="BASKET.FORM.EMAIL_CODE_SENT_SUCCESS" />
            )}
          </FieldLayout>
          <FieldLayout type="double" adaptive>
            <BasicField
              placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.WRITE_CODE"
              name={ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE}
              value={values[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getFieldError(ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE)}
            />
            <ButtonSecondary
              tid="BASKET.FORM.BUTTON.VERIFICATION_EMAIL"
              onClick={confirmEmailForOrderHandler}
              disabled={confirmEmailForOrderPending || errors[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]}
            />
          </FieldLayout>
          {confirmEmailForOrderSuccess && (
            <SuccessAlert tid="BASKET.FORM.EMAIL_VERIFICATED_SUCCESS" />
          )}
          {confirmEmailForOrderError && (
            <ErrorAlert tid={confirmEmailForOrderErrorMessage} />
          )}
        </>
      )}
    </SectionLayout>
  );
}
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
