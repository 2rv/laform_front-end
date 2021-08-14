import styled from 'styled-components';
import {
  LoginFormContainer,
  LoginFormSocialComponent,
  LoginFooterComponent,
} from './frames';
import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';

export function LoginComponent(props) {
  return (
    <ContentLayout horizontal="center" vertical="center">
      <PageLayout type="SMALL">
        <SectionLayout type="SMALL">
          <TitlePrimary tid="LOGIN.SECTION_TITLE" />
          <SectionLayout>
            <LoginFormContainer {...props} />
            <LoginFormSocialComponent />
            <LoginFooterComponent />
          </SectionLayout>
        </SectionLayout>
      </PageLayout>
    </ContentLayout>
  );
}
