import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { SearchBlock } from 'src/lib/common/block-search';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { ProductsLikeComponentProps } from './products-like.type';
import { PRODUCTS_LIKE_TABS } from './products-like.constant';

export function ProductsLikeComponent(props: ProductsLikeComponentProps) {
  const {
    activePath,
    onFilter,
    onPagination,
    onRemoveLike,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;
  return (
    <SectionLayout>
      <TabLinkBlock
        activePath={activePath}
        pathItems={PRODUCTS_LIKE_TABS}
        disabled={getPending}
      />
      <SearchBlock
        findPlaceholderTid="Искать товар"
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
          onRemoveLike={onRemoveLike}
          emptyText="ALL_LIKES.CATEGORY_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
