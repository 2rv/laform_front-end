import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { AuthFormChangePasswordComponent } from './frames/auth-form-change-password';

export function AuthChangePasswordPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="small">
            <AuthFormChangePasswordComponent />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
