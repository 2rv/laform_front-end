import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { PRODUCTS_LIST_TABS } from './products-list.constant';
import { ProductsListComponentProps } from './products-list.type';

export function ProductsListComponent(props: ProductsListComponentProps) {
  const {
    activePath,
    isAdmin,
    onFilter,
    onPagination,
    onDisable,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;

  return (
    <SectionLayout>
      <TabLinkBlock
        activePath={activePath}
        pathItems={PRODUCTS_LIST_TABS}
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
