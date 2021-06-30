import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { AuthRecoveryAccountContainer } from './auth-recovery-account.container';

export function AuthRecoveryAccountPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="small">
            <AuthRecoveryAccountContainer />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}