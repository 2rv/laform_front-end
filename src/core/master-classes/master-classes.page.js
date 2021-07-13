import { IndentLayout } from 'src/lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { MasterClassesContainer } from './master-classes.container';

export function MasterClassesPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <MasterClassesContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
