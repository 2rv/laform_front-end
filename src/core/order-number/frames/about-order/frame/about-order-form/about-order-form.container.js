import { Formik } from 'formik';

import { AboutOrderFormComponent } from './about-order-form.component';

import { ABOUT_ORDER_FIELD_KEY } from '../../about-order.type';

export function AboutOrderFormContainer(props) {
  const {
    fieldName,
    onSubmitForm,
    initialValue,
    orderNumberDetails,
  } = props;

  const FULL_NAME = fieldName[ABOUT_ORDER_FIELD_KEY.FULL_NAME];
  const CURRENT_CITY = fieldName[ABOUT_ORDER_FIELD_KEY.CURRENT_CITY];
  const CONVENIENT_DELIVERY_METHOD = fieldName[ABOUT_ORDER_FIELD_KEY.CONVENIENT_DELIVERY_METHOD];
  const CONVENIENT_PAYMENT_METHOD = fieldName[ABOUT_ORDER_FIELD_KEY.CONVENIENT_PAYMENT_METHOD];
  const CONTACT_PHONE_NUMBER = fieldName[ABOUT_ORDER_FIELD_KEY.CONTACT_PHONE_NUMBER];
  const PROMO_CODE = fieldName[ABOUT_ORDER_FIELD_KEY.PROMO_CODE];
  const ORDER_NOTE = fieldName[ABOUT_ORDER_FIELD_KEY.ORDER_NOTE];
  const ORDER_STATUS = fieldName[ABOUT_ORDER_FIELD_KEY.ORDER_STATUS];

  return (
    <Formik
      initialValues={initialValue}
      validate={null}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <AboutOrderFormComponent
          {...formProps}
          fieldFullName={FULL_NAME}
          fieldCurrentCity={CURRENT_CITY}
          fieldConvenientDeliveryMethod={CONVENIENT_DELIVERY_METHOD}
          fieldConvenientPaymentMethod={CONVENIENT_PAYMENT_METHOD}
          fieldContactPhoneNumber={CONTACT_PHONE_NUMBER}
          fieldPromoCode={PROMO_CODE}
          fieldOrderNote={ORDER_NOTE}
          fieldOrderStatus={ORDER_STATUS}
          orderNumberDetails={orderNumberDetails}
        />
      )}
    </Formik>
  );
}
