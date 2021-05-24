import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { HeaderContainer } from '../header';

import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <IndentLayout type="medium">
      <HeaderContainer />
      <PageLayout horizontal="center">
        <ContentLayout type="small">
          <SignupContainer />
        </ContentLayout>
      </PageLayout>
    </IndentLayout>
  );
}
