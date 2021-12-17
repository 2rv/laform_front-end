import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { SignupFormContainer } from './frames';
import { BlockSocialAuth } from '../auth-social';
import { TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function SignupComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="SIGNUP.SECTION_TITLE" />
        <SectionLayout>
          <SignupFormContainer {...props} />
          <BlockSocialAuth />
          <div>
            <TextSecondary tid="SIGNUP.FOOTER.HAVE_ACCOUNT" />
            &nbsp;
            <LinkPrimary tid="SIGNUP.FOOTER.LOGIN" path={LOGIN_ROUTE_PATH} />
          </div>
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
