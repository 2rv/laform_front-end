import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FormFilter } from '../../lib/element/form-filter';
import { TextSecondary } from 'src/lib/element/text';

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
    setFilter,
    initialValue,
    //-----
    pending,
    success,
    error,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <FormFilter
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
        filterOptions={filterOptions}
        filterSelectName={filterSelectName}
        findFieldName={findFieldName}
        initialValue={initialValue}
        setFilter={setFilter}
      />
      {!listItems || listItems.length === 0 ? (
        <TextSecondary tid="Список пуст" />
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
