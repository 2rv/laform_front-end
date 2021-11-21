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
import { ButtonSecondary } from 'src/lib/element/button';
import { BlockFindAdress } from 'src/lib/common/block-find-adress';

export function FormComponent(props) {
  const {
    isAuth,
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    diliveryOptions,
    paymentMethodOptions,
    handleConfirmPromoCode,
    promoCodePending,
  } = props;

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
          titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
          name={ORDER_FIELD_NAME.PHONE}
          value={values[ORDER_FIELD_NAME.PHONE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PHONE)}
        />
        <BlockFindAdress
          values={{
            country: values[ORDER_FIELD_NAME.COUNTRY],
            region: values[ORDER_FIELD_NAME.REGION],
            city: values[ORDER_FIELD_NAME.CITY],
            area: values[ORDER_FIELD_NAME.AREA],
            settlement: values[ORDER_FIELD_NAME.SETTLEMENT],
            street: values[ORDER_FIELD_NAME.STREET],
            house: values[ORDER_FIELD_NAME.HOUSE],
          }}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
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
            onClick={() =>
              handleConfirmPromoCode(values[ORDER_FIELD_NAME.PROMO_CODE])
            }
          />
        </FieldLayout>
        {isAuth && (
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
        )}
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
    </SectionLayout>
  );
}
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
{
  /* <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_PAYMENT_METHOD"
          options={paymentMethodOptions}
          name={ORDER_FIELD_NAME.PAYMENT_METHOD}
          value={values[ORDER_FIELD_NAME.PAYMENT_METHOD]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PAYMENT_METHOD)}
        /> */
}
