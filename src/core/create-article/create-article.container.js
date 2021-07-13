import { CreateArticleComponent } from './create-article.component';
import { TEST_CREATE_ARTICLE_FIELDS__DATA } from './create-article.constant';
export function CreateArticleContainer() {
  return (
    <CreateArticleComponent fieldsData={TEST_CREATE_ARTICLE_FIELDS__DATA} />
  );
}
