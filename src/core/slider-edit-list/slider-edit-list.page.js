import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { SliderEditListContainer } from './slider-edit-list.container';

export function SliderEditListPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <SliderEditListContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
