import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { SearchFilter } from '../../lib/common/search-filter';
import { TextSecondary } from 'src/lib/element/text';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function ArticlesComponent(props) {
  const {
    listItems,
    //-----
    filterOptions,
    handleFilter,
    //-----
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <SearchFilter
        findPlaceholderTid="ARTICLES.ARTICLES.FIELD.FIND_ARTICLES"
        filterOptions={filterOptions}
        handleFilter={handleFilter}
      />
      {!listItems || listItems.length === 0 ? (
        <TextSecondary tid="Список пуст" />
      ) : isPending ? (
        <CenteredSpinner />
      ) : (
        <BasicCardList items={listItems} />
      )}
    </SectionLayout>
  );
}
