import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { FormFilter } from '../../lib/element/form-filter';

export function ArticlesComponent(props) {
  const {
    listItems,
    //-----
    addToCart,
    //-----
    filterOptions,
    filterSelectName,
    findFieldName,
    setFilter,
    initialValue,
    //-----
    pending,
    success,
    error,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <FormFilter
        findPlaceholderTid={'ARTICLES.ARTICLES.FIELD.FIND_ARTICLES'}
        filterOptions={filterOptions}
        filterSelectName={filterSelectName}
        findFieldName={findFieldName}
        initialValue={initialValue}
        setFilter={setFilter}
      />
      <BasicCardList items={listItems} />
    </SectionLayout>
  );
}
