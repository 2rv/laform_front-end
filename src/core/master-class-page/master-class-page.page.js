import { IndentLayout } from 'src/lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { MasterClassPageContainer } from './master-class-page.container';

export function MasterClassPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <MasterClassPageContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
