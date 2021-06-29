import { ARTICLES_FORM_FILTER_FIELD_KEY } from './articles-form-filter.type';
import { FormFilterContainer } from 'src/lib/element/form-filter';

export function ArticlesFormFilterContainer(props) {
  const {
    categoryOptions,
    tagsOptions,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;
  const CATEGORY_NAME = fieldName[ARTICLES_FORM_FILTER_FIELD_KEY.CATEGORY];
  const TAGS_NAME = fieldName[ARTICLES_FORM_FILTER_FIELD_KEY.TAGS];
  const FIND_ARTICLES_NAME =
    fieldName[ARTICLES_FORM_FILTER_FIELD_KEY.FIND_ARTICLES];
  return (
    <FormFilterContainer
      initialValue={initialValue}
      placeholderTid={'ARTICLES.ARTICLES.FIELD.FIND_ARTICLES'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldCategory={CATEGORY_NAME}
      fieldTags={TAGS_NAME}
      fieldFind={FIND_ARTICLES_NAME}
      dataPending={dataPending}
      formPending={formPending}
      formSuccess={formSuccess}
      formError={formError}
      errorMessage={errorMessage}
    />
  );
}
