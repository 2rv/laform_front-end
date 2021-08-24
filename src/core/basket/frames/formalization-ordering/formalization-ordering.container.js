import { Formik } from 'formik';
import { FormalizationOrderingComponent } from './formalization-ordering.component';
import { FORMALIZATION_ORDERING_FIELD_KEY } from './formalization-ordering.type';

export function FormalizationOrderingContainer(props) {
  const {
    discount,
    token,
    cartPriceWithoutShipping,
    shippingPrice,
    cartPrice,

    isPending,
    isError,
    isSuccess,
    errorMessage,
    isUserInfoLoadPending,
    pageLoading,
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    promoCodeInitialValue,
    onSubmitPromoCode,
    validationPromoCode,

    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
  } = props;

  const FULL_NAME = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.FULL_NAME];
  const CURRENT_CITY = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CURRENT_CITY];
  const CONVENIENT_DELIVERY_METHOD =
    fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONVENIENT_DELIVERY_METHOD];
  const CONVENIENT_PAYMENT_METHOD =
    fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONVENIENT_PAYMENT_METHOD];
  const CONTACT_PHONE_NUMBER =
    fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONTACT_PHONE_NUMBER];
  const ORDER_NOTE = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.ORDER_NOTE];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <FormalizationOrderingComponent
          cartPriceWithoutShipping={cartPriceWithoutShipping}
          shippingPrice={shippingPrice}
          cartPrice={cartPrice}
          discount={discount}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          fieldName={fieldName}
          {...formProps}
          isPromoCodePending={isPromoCodePending}
          isPromoCodeError={isPromoCodeError}
          isPromoCodeSuccess={isPromoCodeSuccess}
          promoCodeErrorMessage={promoCodeErrorMessage}
          pageLoading={pageLoading}
          isUserInfoLoadPending={isUserInfoLoadPending}
          fieldFullName={FULL_NAME}
          fieldCurrentCity={CURRENT_CITY}
          fieldConvenientDeliveryMethod={CONVENIENT_DELIVERY_METHOD}
          fieldConvenientPaymentMethod={CONVENIENT_PAYMENT_METHOD}
          fieldContactPhoneNumber={CONTACT_PHONE_NUMBER}
          fieldOrderNote={ORDER_NOTE}
          promoCodeInitialValue={promoCodeInitialValue}
          onSubmitPromoCode={onSubmitPromoCode}
          validationPromoCode={validationPromoCode}
          isUserLoggedIn={token}
        />
      )}
    </Formik>
  );
}
