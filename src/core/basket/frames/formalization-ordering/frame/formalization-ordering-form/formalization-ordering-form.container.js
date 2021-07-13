import { Formik } from 'formik';

import { FormalizationFormComponent } from './formalization-ordering-form.component';

import { FORMALIZATION_ORDERING_FIELD_KEY } from '../../formalization-ordering.type';

export function FormalizationOrderingFormContainer(props) {
  const {
    fieldName,
    onSubmitForm,
    initialValue,
  } = props;

  const FULL_NAME = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.FULL_NAME];
  const CURRENT_CITY = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CURRENT_CITY];
  const CONVENIENT_DELIVERY_METHOD = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONVENIENT_DELIVERY_METHOD];
  const CONVENIENT_PAYMENT_METHOD = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONVENIENT_PAYMENT_METHOD];
  const CONTACT_PHONE_NUMBER = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.CONTACT_PHONE_NUMBER];
  const ORDER_NOTE = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.ORDER_NOTE];
  const PROMO_CODE = fieldName[FORMALIZATION_ORDERING_FIELD_KEY.PROMO_CODE];

  return (
    <Formik
      initialValues={initialValue}
      validate={null}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <FormalizationFormComponent
          {...formProps}
          fieldFullName={FULL_NAME}
          fieldCurrentCity={CURRENT_CITY}
          fieldConvenientDeliveryMethod={CONVENIENT_DELIVERY_METHOD}
          fieldConvenientPaymentMethod={CONVENIENT_PAYMENT_METHOD}
          fieldContactPhoneNumber={CONTACT_PHONE_NUMBER}
          fieldOrderNote={ORDER_NOTE}
          fieldPromoCode={PROMO_CODE}
        />
      )}
    </Formik>
  );
}
