import styled from 'styled-components';

import { BasicField, FieldSelect } from 'src/lib/element/field';
import { ButtonBasic } from 'src/lib/element/button';

import { spacing } from 'src/lib/theme';

export function FormalizationFormFieldsComponent(props) {
  const {
    fieldFullName,
    fieldCurrentCity,
    fieldConvenientDeliveryMethod,
    fieldConvenientPaymentMethod,
    fieldContactPhoneNumber,
    fieldOrderNote,
    fieldPromoCode,

    values,
    handleChange,
  } = props;

  return (
    <>
      <FieldContainer>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.FULL_NAME"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
          name={fieldFullName}
          value={values[fieldFullName]}
          onChange={handleChange}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CURRENT_CITY"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CURRENT_CITY"
          name={fieldCurrentCity}
          value={values[fieldCurrentCity]}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_DELIVERY_METHOD"
          options={[
            {
              id: 1,
              tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_DELIVERY_METHOD.MAIL',
            },
          ]}
          name={fieldConvenientPaymentMethod}
          value={values[fieldConvenientPaymentMethod]}
          onChange={handleChange}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
          name={fieldContactPhoneNumber}
          value={values[fieldContactPhoneNumber]}
          onChange={handleChange}
        />
      </FieldContainer>
      <BasicField
        titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
        name={fieldOrderNote}
        value={values[fieldOrderNote]}
        onChange={handleChange}
      />
      <FieldContainer>
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_PAYMENT_METHOD"
          options={[
            {
              id: 1,
              tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_PAYMENT_METHOD.ONLINE',
            },
          ]}
          name={fieldConvenientPaymentMethod}
          value={values[fieldConvenientPaymentMethod]}
          onChange={handleChange}
        />
        <FieldContainer>
          <BasicField
            titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
            placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
            name={fieldPromoCode}
            value={values[fieldPromoCode]}
            onChange={handleChange}
          />
          <ButtonBasic tid="BASKET.FORM.ACTIVATE" />
        </FieldContainer>
      </FieldContainer>
    </>
  );
}

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
`;
