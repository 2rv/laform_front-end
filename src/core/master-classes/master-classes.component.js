import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { SearchFilter } from '../../lib/common/search-filter';
import { TextSecondary } from 'src/lib/element/text';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function MasterClassesComponent(props) {
  const {
    addToCart,
    listItems,
    onDeleteProduct,
    isAdmin,
    //-----
    filterOptions,
    filterSelectName,
    findFieldName,
    handleFilter,
    initialValue,
    //-----
    isPending,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <SearchFilter
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
        filterOptions={filterOptions}
        handleFilter={handleFilter}
      />
      {!listItems || listItems.length === 0 ? (
        <TextSecondary tid="Список пуст" />
      ) : isPending ? (
        <CenteredSpinner />
      ) : (
        <BasicCardList
          onSetCart={addToCart}
          items={listItems}
          onDeleteProduct={onDeleteProduct}
          isAdmin={isAdmin}
        />
      )}
    </SectionLayout>
  );
}
