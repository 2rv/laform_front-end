import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { TitlePrimary } from 'src/lib/element/title';
import { SearchBlock } from 'src/lib/common/block-search';
import { SewingGoodsComponentProps } from './sewing-goods.type';

export function SewingGoodsComponent(props: SewingGoodsComponentProps) {
  const {
    onFilter,
    onPagination,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <SearchBlock
        findPlaceholderTid="SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
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
