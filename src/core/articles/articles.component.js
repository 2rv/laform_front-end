import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { SearchFilter } from '../../lib/common/search-filter';
import { TextSecondary } from 'src/lib/element/text';
import { CenteredSpinner } from 'src/lib/element/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export function ArticlesComponent(props) {
  const {
    listItems,
    filterOptions,
    categories,
    handleFilter,
    onDelete,
    isAdmin,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <SearchFilter
        findPlaceholderTid="ARTICLES.ARTICLES.FIELD.FIND_ARTICLES"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={handleFilter}
      />
      <InfiniteScroll
        dataLength={listItems?.length ?? 0}
        next={fetchData}
        hasMore={hasMore}
      >
        <BasicCardList
          items={listItems}
          onDelete={onDelete}
          admin={isAdmin}
          emptyText="OTHER.LIST_IS_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
