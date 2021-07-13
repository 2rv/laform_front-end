import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { CreateArticleContainer } from './create-article.container';

export function CreateArticlePage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <CreateArticleContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
