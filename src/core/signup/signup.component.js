import { IndentLayout } from '../../lib/element/layout';

import {
  SignupHeaderComponent,
  SignupFormContainer,
  SignupFormSocialComponent,
  SignupFooterComponent,
} from './frames';

export function SignupComponent(props) {
  return (
    <IndentLayout type="small">
      <SignupHeaderComponent />
      <IndentLayout>
        <SignupFormContainer {...props} />
        <SignupFormSocialComponent />
        <SignupFooterComponent />
      </IndentLayout>
    </IndentLayout>
  );
}
