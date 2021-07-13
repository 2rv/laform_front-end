import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { MyLikesContainer } from './my-likes.container';

export function MyLikesPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <MyLikesContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
