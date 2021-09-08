import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import {
  PAYMENT_METHOD_STORE_NAME,
  getPaymentMethod,
  setPaymentMethod,
} from '../../lib/common/payment-method';

import {
  DEFAULT_PAYMENT_METHOD,
  PAYMENT_METHODS,
} from './settings-change-payment-method.constant';
import { SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME } from './settings-change-payment-method.type';
import { SettingsChangePaymentMethodComponent } from './settings-change-payment-method.component';
import { httpRequest } from 'src/main/http';

export function SettingsChangePaymentMethodContainer() {
  const dispatch = useDispatch();
  const { isSaved } = useSelector((state) => state[PAYMENT_METHOD_STORE_NAME]);

  const savePaymentMethod = async ({ paymentMethod }) => {
    dispatch(setPaymentMethod(paymentMethod));
    await httpRequest({
      url: '/user/info/update',
      method: 'PATCH',
      data: {
        paymentType: Number(paymentMethod)
      },
    });
  };

  const getInitialValues = () => ({
    [SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME.PAYMENT_METHOD]:
      getPaymentMethod() || DEFAULT_PAYMENT_METHOD,
  });

  const fieldPaymentMethod =
    SETTINGS_FORM_CHANGE_PAYMENT_METHOD_FIELD_NAME.PAYMENT_METHOD;

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={savePaymentMethod}
      enableReinitialize={true}
    >
      {(formProps) => (
        <SettingsChangePaymentMethodComponent
          options={PAYMENT_METHODS}
          fieldPaymentMethod={fieldPaymentMethod}
          isSuccess={isSaved}
          {...formProps}
        />
      )}
    </Formik>
  );
}
