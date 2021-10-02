import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { PaginationContainer } from '../../lib/common/block-pagination';
import { SearchFilter } from '../../lib/common/search-filter';
import { BasicCardList } from 'src/lib/element/card-list';

export function MasterClassesComponent(props) {
  const {
    listItems,
    addToCart,
    onDeleteProduct,
    filterOptions,
    handleFilter,
    isAdmin,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <SearchFilter
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
        filterOptions={filterOptions}
        handleFilter={handleFilter}
      />
      <BasicCardList
        items={listItems}
        onSetCart={addToCart}
        onDeleteProduct={onDeleteProduct}
        isAdmin={isAdmin}
      />
    </SectionLayout>
  );
}
