import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { SettingsChangeDeliveryInfoContainer } from '../settings-change-delivery-info';
import { SettingsChangePaymentMethodContainer } from '../settings-change-payment-method';
import { SettingsChangePasswordContainer } from '../settings-change-password';
import { SettingsChangeEmailContainer } from '../settings-change-email';
import { SettingsChangeNotificationContainer } from '../settings-change-notification';
import { SettingsLogutContainer } from '../settings-logout';
import { SETTINGS_CHANGE_EMAIL_STORE_NAME } from '../settings-change-email';

export function SettingsComponent() {
  return (
    <ContentLayout horizontal="center">
      <PageLayout type="MEDIUM">
        <SectionLayout>
          <TitlePrimary tid="SETTINGS.HEADER" />
          <SectionLayout>
            <SettingsChangeDeliveryInfoContainer />
            <SettingsChangePaymentMethodContainer />
            <SettingsChangePasswordContainer />
            <SettingsChangeEmailContainer />
            <SettingsChangeNotificationContainer />
            <SettingsLogutContainer />
          </SectionLayout>
        </SectionLayout>
      </PageLayout>
    </ContentLayout>
  );
}
