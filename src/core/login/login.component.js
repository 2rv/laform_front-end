import { SectionLayout } from '../../lib/element/layout';

import {
  LoginHeaderComponent,
  LoginFormContainer,
  LoginFormSocialComponent,
  LoginFooterComponent,
} from './frames';

export function LoginComponent(props) {
  return (
    <SectionLayout type="SMALL">
      <LoginHeaderComponent />
      <SectionLayout>
        <LoginFormContainer {...props} />
        <LoginFormSocialComponent />
        <LoginFooterComponent />
      </SectionLayout>
    </SectionLayout>
  );
}
