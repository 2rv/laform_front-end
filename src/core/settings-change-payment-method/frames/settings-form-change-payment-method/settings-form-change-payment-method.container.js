import { PAYMENT_METHODS } from './settings-form-change-payment-method.constant';
import { SettingsFormChangePaymentMethodComponent } from './settings-form-change-payment-method.component';

export function SettingsFormChangePaymentMethodContainer() {
  return <SettingsFormChangePaymentMethodComponent options={PAYMENT_METHODS} />;
}
