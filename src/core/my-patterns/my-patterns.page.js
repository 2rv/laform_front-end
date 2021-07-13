import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { MyPatternsContainer } from './my-patterns.container';

export function MyPatternsPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="medium">
            <MyPatternsContainer />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
