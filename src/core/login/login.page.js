import { ContentLayout, PageLayout } from '../../lib/element/layout';

import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <PageLayout horizontal="center">
      <ContentLayout type="small">
        <LoginContainer />
      </ContentLayout>
    </PageLayout>
  );
}
