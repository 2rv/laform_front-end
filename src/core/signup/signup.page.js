import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterLogoContainer } from '../footer-logo';
import { HeaderContainer } from '../header';

import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <IndentLayout type="medium">
      <IndentLayout type="small">
        <FooterLogoContainer />
        <HeaderContainer />
      </IndentLayout>
      <PageLayout horizontal="center">
        <ContentLayout type="small">
          <SignupContainer />
        </ContentLayout>
      </PageLayout>
    </IndentLayout>
  );
}
