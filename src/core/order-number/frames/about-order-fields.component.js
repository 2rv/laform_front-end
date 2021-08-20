import styled from 'styled-components';
import { BasicField, FieldSelect } from '../../../lib/element/field';
import { spacing, THEME_COLOR } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';

export function AboutOrderFields(props) {
  const {
    fieldFullName,
    fieldCurrentCity,
    fieldConvenientDeliveryMethod,
    fieldConvenientPaymentMethod,
    fieldContactPhoneNumber,
    fieldOrderNote,
    fieldPromoCode,
    orderNumberDetails,

    handleChange,
    values,
  } = props;

  return (
    <SectionLayout type="TEXT">
      <FieldLayout type="double">
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
          placeholderTid="Илья Зинченко"
          disabled={true}
          name={fieldFullName}
          // value={values[fieldFullName]}
          value={orderNumberDetails?.fullName}
          onChange={handleChange}
        />
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA"
          disabled={true}
          name={fieldCurrentCity}
          // value={values[fieldCurrentCity]}
          value={orderNumberDetails?.city}
          onChange={handleChange}
        />
      </FieldLayout>
      <FieldLayout type="double">
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.DELIVERY_METHOD"
          options={[{ id: 0, tid: orderNumberDetails?.typeOfDelivery }]}
          disabled={true}
          name={fieldConvenientDeliveryMethod}
          // value={values[fieldConvenientDeliveryMethod]}
          value={orderNumberDetails?.typeOfDelivery}
          onChange={handleChange}
        />
        <BasicField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CONTACT_NUMBER"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.CONTACT_NUMBER"
          disabled={true}
          name={fieldContactPhoneNumber}
          // value={values[fieldContactPhoneNumber]}
          value={orderNumberDetails?.phoneNumber}
          onChange={handleChange}
        />
      </FieldLayout>
      <BasicField
        titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.ORDER_NOTE"
        placeholderTid="Товар упаковать надёжно"
        disabled={true}
        name={fieldOrderNote}
        // value={values[fieldOrderNote]}
        value={orderNumberDetails?.comment}
        onChange={handleChange}
      />
      <FieldLayout type="double">
        <FieldSelect
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PAYMENT_METHOD"
          options={[{ id: 0, tid: orderNumberDetails?.typeOfPayment }]}
          disabled={true}
          name={fieldConvenientPaymentMethod}
          // value={values[fieldConvenientPaymentMethod]}
          value={orderNumberDetails?.typeOfPayment}
          onChange={handleChange}
        />
        <PromoCodeField
          titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PROMO_CODE"
          placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.YOUR_PROMO"
          name={fieldPromoCode}
          value={values[fieldPromoCode]}
          onChange={handleChange}
        />
      </FieldLayout>
    </SectionLayout>
  );
}

const PromoCodeField = styled(BasicField)`
  border: 2px solid ${THEME_COLOR.LIGHT_GRAY};
  background: ${THEME_COLOR.BACKGROUND.WHITE};
  height: 47px;
`;
