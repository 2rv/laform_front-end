import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { SearchFilter } from '../../lib/common/search-filter';
import { BasicCardList } from 'src/lib/element/card-list';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MasterClassesComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    filterOptions,
    categories,
    handleFilter,
    isAdmin,
    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <SearchFilter
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
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
