import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { TextSecondary } from 'src/lib/element/text';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabFilter } from 'src/lib/common/tab-filter';
import InfiniteScroll from 'react-infinite-scroll-component';

export function PatternsComponent(props) {
  const {
    listItems,
    activeTab,
    setActiveTab,
    tabItems,
    filterOptions,
    categories,
    handleFilter,
    isPending,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <TabFilter
        isPending={isPending}
        activeTab={activeTab}
        handleFilter={setActiveTab}
        tabItems={tabItems}
      />
      <SearchBlock
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
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
