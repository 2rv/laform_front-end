import { TEST_ARTICLE_PAGE_DATA } from './article-page.constant';
import { ArticlePageComponent } from './article-page.component';

export function ArticlePageContainer() {
  return <ArticlePageComponent {...TEST_ARTICLE_PAGE_DATA} />;
}
