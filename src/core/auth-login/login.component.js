import styled from 'styled-components';
import { SectionLayout, ContentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { LoginFormContainer, LoginFooterComponent } from './frames';
import { BlockSocialAuth } from '../auth-social';
import { SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export function LoginComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="LOGIN.SECTION_TITLE" />
        <SectionLayout>
          <LoginFormContainer {...props} />
          <BlockSocialAuth />
          <SectionLayout type="TEXT">
            <div>
              <TextSecondary tid="LOGIN.FOOTER.HAVENT_ACCOUNT_YET" />
              &nbsp;
              <LinkPrimary
                tid="LOGIN.FOOTER.REGISTER"
                path={SIGNUP_ROUTE_PATH}
              />
            </div>
            <div>
              <TextSecondary tid="LOGIN.FOOTER.FORGOT_PASSWORD" />
              &nbsp;
              <LinkPrimary
                tid="LOGIN.FOOTER.FORGOT_PASSWORD_LINK"
                path={AUTH_RECOVERY_ACCOUNT_ROUTE_PATH}
              />
            </div>
          </SectionLayout>
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
