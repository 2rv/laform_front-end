import styled from 'styled-components';
import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { LoginFormContainer, LoginFooterComponent } from './frames';
import { BlockSocialAuth } from '../social-auth';

export function LoginComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="LOGIN.SECTION_TITLE" />
        <SectionLayout>
          <LoginFormContainer {...props} />
          <BlockSocialAuth />
          <LoginFooterComponent />
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
