import { IndentLayout } from 'src/lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { ArticlePageContainer } from './article-page.container';

export function ArticlePage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <ArticlePageContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
