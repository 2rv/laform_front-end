import { Formik } from 'formik';
import { AboutOrderFormComponent } from './about-order-form.component';
import { ABOUT_ORDER_FIELD_NAME } from '../order-number.type';

export function AboutOrderFormContainer(props) {
  const {
    paymentOptions,
    dileveryOptions,
    statusOptions,
    onSubmit,
    initialValue,
    validate,
    orderNumberDetails,
  } = props;

  const fieldFullName = ABOUT_ORDER_FIELD_NAME.FULL_NAME;
  const fieldCurrentCity = ABOUT_ORDER_FIELD_NAME.CURRENT_CITY;
  const fieldConvenientDeliveryMethod =
    ABOUT_ORDER_FIELD_NAME.CONVENIENT_DELIVERY_METHOD;
  const fieldConvenientPaymentMethod =
    ABOUT_ORDER_FIELD_NAME.CONVENIENT_PAYMENT_METHOD;
  const fieldContactPhoneNumber = ABOUT_ORDER_FIELD_NAME.CONTACT_PHONE_NUMBER;
  const fieldOrderNote = ABOUT_ORDER_FIELD_NAME.ORDER_NOTE;
  const fieldPromoCode = ABOUT_ORDER_FIELD_NAME.PROMO_CODE;
  const statusSelectName = ABOUT_ORDER_FIELD_NAME.ORDER_STATUS;

  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps) => (
        <AboutOrderFormComponent
          fieldFullName={fieldFullName}
          fieldCurrentCity={fieldCurrentCity}
          fieldConvenientDeliveryMethod={fieldConvenientDeliveryMethod}
          fieldConvenientPaymentMethod={fieldConvenientPaymentMethod}
          fieldContactPhoneNumber={fieldContactPhoneNumber}
          fieldOrderNote={fieldOrderNote}
          fieldPromoCode={fieldPromoCode}
          statusSelectName={statusSelectName}
          paymentOptions={paymentOptions}
          dileveryOptions={dileveryOptions}
          statusOptions={statusOptions}
          orderNumberDetails={orderNumberDetails}
          {...formProps}
        />
      )}
    </Formik>
  );
}
