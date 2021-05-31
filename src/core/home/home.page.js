import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';

import { HomeContainer } from './home.container';

export function HomePage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <HeaderContainer />
        <HomeContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
