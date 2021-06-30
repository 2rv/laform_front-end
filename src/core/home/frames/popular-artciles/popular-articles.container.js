import { TEST_ITEMS_POPULAR_ARTICLES } from './popular-articles.constant';
import { PopularArticlesComponent } from './popular-articles.component';

export function PopularArticlesContainer() {
  return <PopularArticlesComponent items={TEST_ITEMS_POPULAR_ARTICLES} />;
}
