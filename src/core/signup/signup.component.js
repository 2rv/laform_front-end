import { SectionLayout } from '../../lib/element/layout';
import {
  SignupHeaderComponent,
  SignupFormContainer,
  SignupFormSocialComponent,
  SignupFooterComponent,
} from './frames';

export function SignupComponent(props) {
  return (
    <SectionLayout type="SMALL">
      <SignupHeaderComponent />
      <SectionLayout>
        <SignupFormContainer {...props} />
        <SignupFormSocialComponent />
        <SignupFooterComponent />
      </SectionLayout>
    </SectionLayout>
  );
}
