import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { ArticlesContainer } from './articles.container';

export function ArticlesPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <ArticlesContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
