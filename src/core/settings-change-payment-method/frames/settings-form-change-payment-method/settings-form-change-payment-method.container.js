import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import {
  getPaymentMethod,
  setPaymentMethod,
} from '../../../../lib/common/payment-method';

import {
  DEFAULT_PAYMENT_METHOD,
  PAYMENT_METHODS,
} from './settings-form-change-payment-method.constant';
import { SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME } from './settings-form-change-payment-method.type';
import { SettingsFormChangePaymentMethodComponent } from './settings-form-change-payment-method.component';

export function SettingsFormChangePaymentMethodContainer() {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);

  const savePaymentMethod = ({ paymentMethod }) => {
    dispatch(setPaymentMethod(paymentMethod));
    setIsSaved(true);
  };

  const getInitialValues = () => ({
    [SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME.PAYMENT_METHOD]:
      getPaymentMethod() || DEFAULT_PAYMENT_METHOD,
  });

  const fieldPaymentMethod =
    SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME.PAYMENT_METHOD;

  return (
    <Formik initialValues={getInitialValues()} onSubmit={savePaymentMethod}>
      {(formProps) => (
        <SettingsFormChangePaymentMethodComponent
          options={PAYMENT_METHODS}
          fieldPaymentMethod={fieldPaymentMethod}
          isSuccess={isSaved}
          {...formProps}
        />
      )}
    </Formik>
  );
}
