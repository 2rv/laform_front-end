import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from '../../lib/element/layout';
import {
  SignupFormContainer,
  SignupFormSocialComponent,
  SignupFooterComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function SignupComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="SIGNUP.SECTION_TITLE" />
        <SectionLayout>
          <SignupFormContainer {...props} />
          <SignupFormSocialComponent />
          <SignupFooterComponent />
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
