import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { PATTERNS_TABS } from './patterns.constant';
import { PatternsComponentProps } from './patterns.type';

export function PatternsComponent(props: PatternsComponentProps) {
  const {
    activePath,
    onFilter,
    onPagination,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <TabLinkBlock
        activePath={activePath}
        pathItems={PATTERNS_TABS}
        disabled={getPending}
      />
      <SearchBlock
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={onFilter}
        disabled={getPending}
      />
      <InfiniteScroll
        loader={<></>}
        dataLength={products.length}
        next={onPagination}
        hasMore={products.length < +total}
      >
        <BasicCardList
          isLoading={getPending}
          isPagination={paginatePending}
          items={products}
          emptyText="OTHER.LIST_IS_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
