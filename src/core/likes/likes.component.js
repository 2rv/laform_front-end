import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { ALL_LIKES_TABS } from './likes.constant';

export function LikesComponent(props) {
  const {
    activePath,
    pageLoading,
    total,
    products,
    categories,
    isPending,
    isPagination,
    onPagination,
    onFilter,
    filterOptions,
  } = props;
  return (
    <SectionLayout>
      <TabLinkBlock
        activePath={activePath}
        pathItems={ALL_LIKES_TABS}
        disabled={pageLoading || isPending || isPagination}
      />
      <SearchBlock
        findPlaceholderTid="Искать товар"
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
          emptyText="ALL_LIKES.CATEGORY_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
