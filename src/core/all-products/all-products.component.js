import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { LoaderPrimary } from 'src/lib/element/loader';
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
    onDisable,
    onPagination,
    onFilter,
    filterOptions,
  } = props;

  return (
    <SectionLayout>
      {isPending && <LoaderPrimary />}
      <TabLinkBlock
        activePath={activePath}
        pathItems={ALL_PRODUCTS_TABS}
        disabled={pageLoading || isPending}
      />
      <SearchBlock
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={onFilter}
      />
      <InfiniteScroll
        dataLength={products.length}
        next={onPagination}
        hasMore={products.length < +total}
      >
        <BasicCardList
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
