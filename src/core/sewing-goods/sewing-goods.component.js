import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { TitlePrimary } from 'src/lib/element/title';
import { SearchBlock } from 'src/lib/common/block-search';
import InfiniteScroll from 'react-infinite-scroll-component';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    filterOptions,
    categories,
    handleFilter,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <SearchBlock
        findPlaceholderTid="SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={handleFilter}
      />
      <InfiniteScroll
        dataLength={listItems?.length ?? 0}
        next={fetchData}
        hasMore={hasMore}
      >
        <BasicCardList items={listItems} emptyText="OTHER.LIST_IS_EMPTY" />
      </InfiniteScroll>
    </SectionLayout>
  );
}
