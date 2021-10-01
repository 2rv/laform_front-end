import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { SearchFilter } from 'src/lib/common/search-filter';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    addToCart,
    filterOptions,
    handleFilter,
    isPending,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <SearchFilter
        findPlaceholderTid="SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
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
