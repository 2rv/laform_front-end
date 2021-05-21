import { ContentLayout, PageLayout } from '../../lib/element/layout';

import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <PageLayout horizontal="center">
      <ContentLayout type="small">
        <SignupContainer />
      </ContentLayout>
    </PageLayout>
  );
}
