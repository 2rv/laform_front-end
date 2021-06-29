import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { SewingGoodsContainer } from './sewing-goods.container';

export function SewingGoodsPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <SewingGoodsContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
