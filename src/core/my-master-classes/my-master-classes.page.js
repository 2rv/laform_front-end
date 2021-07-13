import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { MyMasterClassesContainer } from './my-master-classes.container';

export function MyMasterClassesPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="medium">
            <MyMasterClassesContainer />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
