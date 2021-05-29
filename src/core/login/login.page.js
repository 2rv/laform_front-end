import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';

import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <HeaderContainer />
        <PageLayout horizontal="center">
          <ContentLayout type="small">
            <LoginContainer />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
