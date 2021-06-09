import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { SettingsFormChangePasswordComponent } from './frames/settings-form-change-password';

export function SettingsChangePasswordPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="medium">
            <SettingsFormChangePasswordComponent />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
