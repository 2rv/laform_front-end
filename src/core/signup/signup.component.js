import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { SignupFormContainer, SignupFooterComponent } from './frames';
import { BlockSocialAuth } from '../social-auth';

export function SignupComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="SIGNUP.SECTION_TITLE" />
        <SectionLayout>
          <SignupFormContainer {...props} />
          <BlockSocialAuth />
          <SignupFooterComponent />
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
