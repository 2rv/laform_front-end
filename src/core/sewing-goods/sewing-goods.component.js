import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { SearchFilter } from 'src/lib/common/search-filter';
import InfiniteScroll from 'react-infinite-scroll-component';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    filterOptions,
    categories,
    handleFilter,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <SearchFilter
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
        <BasicCardList
          items={listItems}
          onDelete={onDeleteProduct}
          admin={isAdmin}
          emptyText="Список пустой" //TODO: change to tid
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
