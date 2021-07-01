import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { SliderEditContainer } from './slider-edit.container';

export function SliderEditPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <SliderEditContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
