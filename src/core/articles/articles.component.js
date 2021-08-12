import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { ArticlesFilter } from './frames';

export function ArticlesComponent(props) {
  const {
    initialValue,
    categoryOptions,
    tagsOptions,
    listItems,
    fieldName,
    onSubmit,
    validation,
    pending,
    success,
    error,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <ArticlesFilter
        findPlaceholderTid={'ARTICLES.ARTICLES.FIELD.FIND_ARTICLES'}
        categoryOptions={categoryOptions}
        tagsOptions={tagsOptions}
        initialValue={initialValue}
        fieldName={fieldName}
        onSubmit={onSubmit}
        validation={validation}
        pending={pending}
        success={success}
        error={error}
        errorMessage={errorMessage}
      />
      <BasicCardList items={listItems} type="articles" />
    </SectionLayout>
  );
}
