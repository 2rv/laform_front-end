import styled from 'styled-components';

import { BasicField, FieldSelect } from 'src/lib/element/field';
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
    orderNumberDetails,

    values,
    handleChange,
  } = props;

  // TODO: поправить когда в BE будут данные

  return (
    <>
      <FieldContainer>
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
          placeholderTid="Илья Зинченко" // orderNumberDetails.fullName
          // disabled={true}
          name={fieldFullName}
          value={values[fieldFullName]}
          onChange={handleChange}
        />
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA" // orderNumberDetails.city
          // disabled={true}
          name={fieldCurrentCity}
          value={values[fieldCurrentCity]}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.DELIVERY_METHOD"
          options={[{
            id: 1,
            tid: 'ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.DELIVERY_METHOD.SENDING_BY_EMAIL', // orderNumberDetails.typeOfDelivery
          }]}
          // disabled={true}
          name={fieldConvenientDeliveryMethod}
          value={values[fieldConvenientDeliveryMethod]}
          onChange={handleChange}
        />
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CONTACT_NUMBER"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.CONTACT_NUMBER" // orderNumberDetails.phoneNumber
          // disabled={true}
          name={fieldContactPhoneNumber}
          value={values[fieldContactPhoneNumber]}
          onChange={handleChange}
        />
      </FieldContainer>
      <BasicField
        titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.ORDER_NOTE"
        placeholderTid="Товар упаковать надёжно" // orderNumberDetails.comment
        // disabled={true}
        name={fieldOrderNote}
        value={values[fieldOrderNote]}
        onChange={handleChange}
      />
      <FieldContainer>
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PAYMENT_METHOD"
          options={[{
            id: 1,
            tid: 'ORDER_NUMBER.FORM.FIELDS.SELECT_OPTIONS.PAYMENT_METHOD.ONLINE', // orderNumberDetails.typeOfPayment
          }]}
          // disabled={true}
          name={fieldConvenientPaymentMethod}
          value={values[fieldConvenientPaymentMethod]}
          onChange={handleChange}
        />
        <PromoCodeField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PROMO_CODE"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.YOUR_PROMO"
          // disabled={true}
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

const PromoCodeField = styled(BasicField)`
  border: 2px solid ${THEME_COLOR.LIGHT_GRAY};
  background: ${THEME_COLOR.BACKGROUND.WHITE};
  height: 47px;
`;
