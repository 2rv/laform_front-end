import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { PATTERNS_TABS } from './patterns.constant';

export function PatternsComponent(props) {
  const {
    products,
    onPagination,
    total,
    filterOptions,
    categories,
    onFilter,
    activePath,
    pageLoading,
    isPending,
    isPagination,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <TabLinkBlock
        activePath={activePath}
        pathItems={PATTERNS_TABS}
        disabled={pageLoading || isPending}
      />
      <SearchBlock
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={onFilter}
        disabled={pageLoading || isPending}
      />
      <InfiniteScroll
        dataLength={products.length}
        next={onPagination}
        hasMore={products.length < +total}
      >
        <BasicCardList
          isLoading={isPending}
          isPagination={isPagination}
          items={products}
          emptyText="OTHER.LIST_IS_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
