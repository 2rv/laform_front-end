import { ArticlesComponent } from './articles.component';
import {
  ARTICLES_TEST_ITEMS,
  ARTICLES_FILTER_CATEGORY_OPTIONS,
  ARTICLES_FILTER_TAGS_OPTIONS,
} from './articles.constant';
import {
  ARTICLES_FORM_FILTER_FIELD_NAME,
  ARTICLES_FILTER_FIELD_NAME,
} from './articles.type';

export function ArticlesContainer() {
  const articlesFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [ARTICLES_FILTER_FIELD_NAME.CATEGORY]:
          ARTICLES_FILTER_CATEGORY_OPTIONS[0].id,
        [ARTICLES_FILTER_FIELD_NAME.TAGS]: ARTICLES_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <ArticlesComponent
      categoryOptions={ARTICLES_FILTER_CATEGORY_OPTIONS}
      tagsOptions={ARTICLES_FILTER_TAGS_OPTIONS}
      initialValue={articlesFormFilterGetInitialValue()}
      fieldName={ARTICLES_FORM_FILTER_FIELD_NAME}
      articlesData={ARTICLES_TEST_ITEMS}
    />
  );
}
