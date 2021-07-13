import { IndentLayout } from 'src/lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { ProductContainer } from './product.container';

export function ProductPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <ProductContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
