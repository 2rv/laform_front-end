import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { SearchBlock } from 'src/lib/common/block-search';
import { BasicCardList } from 'src/lib/element/card-list';
import { MasterClassesComponentProps } from './master-classes.type';

export function MasterClassesComponent(props: MasterClassesComponentProps) {
  const {
    onFilter,
    onPagination,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <SearchBlock
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
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
