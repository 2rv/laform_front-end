import { IndentLayout } from '../../lib/element/layout';

import {
  LoginHeaderComponent,
  LoginFormContainer,
  LoginFormSocialComponent,
  LoginFooterComponent,
} from './frames';

export function LoginComponent(props) {
  return (
    <IndentLayout type="small">
      <LoginHeaderComponent />
      <IndentLayout>
        <LoginFormContainer {...props} />
        <LoginFormSocialComponent />
        <LoginFooterComponent />
      </IndentLayout>
    </IndentLayout>
  );
}
