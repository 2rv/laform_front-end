import { IndentLayout } from 'src/lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { MasterClassContainer } from './master-class.container';

export function MasterClassPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <MasterClassContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
