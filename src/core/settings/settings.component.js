import styled from 'styled-components';
import { IndentLayout } from '../../lib/element/layout';
import { PrimaryHeader } from '../../lib/element/text';

import { SettingsChangeDeliveryInfoContainer } from '../settings-change-delivery-info';
import { SettingsChangePaymentMethodContainer } from '../settings-change-payment-method';
import { SettingsChangePasswordContainer } from '../settings-change-password';
import { SettingsChangeEmailContainer } from '../settings-change-email';
import { SettingsChangeNotificationContainer } from '../settings-change-notification';

export function SettingsComponent() {
  return (
    <IndentLayout>
      <PrimaryHeader tid="SETTINGS.HEADER" />
      <IndentLayout>
        <SettingsChangeDeliveryInfoContainer />
        <SettingsChangePaymentMethodContainer />
        <SettingsChangePasswordContainer />
        <SettingsChangeEmailContainer />
        <SettingsChangeNotificationContainer />
      </IndentLayout>
    </IndentLayout>
  );
}
