import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { ALL_PRODUCTS_TABS } from './all-products.constant';

export function AllProductsComponent(props) {
  const {
    isAdmin,
    activePath,
    pageLoading,
    total,
    products,
    categories,
    isPending,
    isPagination,
    onDisable,
    onPagination,
    onFilter,
    filterOptions,
  } = props;

  return (
    <SectionLayout>
      <TabLinkBlock
        activePath={activePath}
        pathItems={ALL_PRODUCTS_TABS}
        disabled={pageLoading || isPending || isPagination}
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
          onDelete={onDisable}
          admin={isAdmin}
          items={products}
          emptyText="ALL_PRODUCTS.CATEGORY_EMPTY"
          isCreateList
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
