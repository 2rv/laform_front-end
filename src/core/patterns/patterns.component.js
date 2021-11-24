import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TextSecondary } from 'src/lib/element/text';
import { SearchFilter } from 'src/lib/common/search-filter';
import { TabFilter } from '../../lib/common/tab-filter';
import InfiniteScroll from 'react-infinite-scroll-component';

export function PatternsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
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
      <SearchFilter
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
        <BasicCardList
          items={listItems}
          onDelete={onDeleteProduct}
          admin={isAdmin}
          emptyText="OTHER.LIST_IS_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
