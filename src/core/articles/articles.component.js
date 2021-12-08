import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { TitlePrimary } from 'src/lib/element/title';
import { SearchBlock } from 'src/lib/common/block-search';
import { TextSecondary } from 'src/lib/element/text';
import InfiniteScroll from 'react-infinite-scroll-component';

export function ArticlesComponent(props) {
  const {
    listItems,
    filterOptions,
    categories,
    handleFilter,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <SearchBlock
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
        <BasicCardList items={listItems} emptyText="OTHER.LIST_IS_EMPTY" />
      </InfiniteScroll>
    </SectionLayout>
  );
}
