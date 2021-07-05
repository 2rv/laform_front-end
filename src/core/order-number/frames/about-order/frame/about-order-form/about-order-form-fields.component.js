import styled from 'styled-components';

import { FieldPrimary, FieldSelect } from 'src/lib/element/field';
import { ButtonBasic } from 'src/lib/element/button';

import { spacing, THEME_COLOR } from 'src/lib/theme';

export function AboutOrderFormFieldsComponent(props) {
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
        <FieldPrimary
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
          placeholderTid="Илья Зинченко"
          name={fieldFullName}
          value={values[fieldFullName]}
          onChange={handleChange}
        />
        <FieldPrimary
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA"
          name={fieldCurrentCity}
          value={values[fieldCurrentCity]}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.DELIVERY_METHOD"
          options={[
            { id: 1, tid: 'ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.DELIVERY_METHOD.SENDING_BY_EMAIL' },
            { id: 2, tid: "ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.DELIVERY_METHOD.SENDING_BY_PLANE" },
          ]}
          name={fieldConvenientPaymentMethod}
          value={values[fieldConvenientPaymentMethod]}
          onChange={handleChange}
        />
        <FieldPrimary
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CONTACT_NUMBER"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.CONTACT_NUMBER"
          name={fieldContactPhoneNumber}
          value={values[fieldContactPhoneNumber]}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldPrimary
        titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.ORDER_NOTE"
        placeholderTid="Товар упаковать надёжно"
        name={fieldOrderNote}
        value={values[fieldOrderNote]}
        onChange={handleChange}
      />
      <FieldContainer>
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PAYMENT_METHOD"
          options={[
            { id: 1, tid: 'ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.PAYMENT_METHOD.ONLINE' },
            { id: 2, tid: 'ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.PAYMENT_METHOD.CASH' },
          ]}
          name={fieldConvenientPaymentMethod}
          value={values[fieldConvenientPaymentMethod]}
          onChange={handleChange}
        />
        <PromoCodeField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PROMO_CODE"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.YOUR_PROMO"
          name={fieldPromoCode}
          value={values[fieldPromoCode]}
          onChange={handleChange}
        />
      </FieldContainer>
    </>
  );
}

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: flex-end;
  grid-template-columns: repeat(2, 1fr);
`;

const PromoCodeField = styled(FieldPrimary)`
  border: 2px solid ${THEME_COLOR.LIGHT_GRAY};
  background: ${THEME_COLOR.BACKGROUND.WHITE};
  height: 47px;
`;
