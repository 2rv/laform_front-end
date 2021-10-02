import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { SearchFilter } from 'src/lib/common/search-filter';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    addToCart,
    filterOptions,
    handleFilter,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <SearchFilter
        findPlaceholderTid="SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
        filterOptions={filterOptions}
        handleFilter={handleFilter}
      />
      <BasicCardList
        onSetCart={addToCart}
        items={listItems}
        onDeleteProduct={onDeleteProduct}
        isAdmin={isAdmin}
      />
    </SectionLayout>
  );
}
