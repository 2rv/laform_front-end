import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { FormFilter } from '../../lib/element/form-filter';
import { Spinner } from 'src/lib/element/spinner';
import styled from 'styled-components';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    addToCart,
    //-----
    filterOptions,
    filterSelectName,
    findFieldName,
    setFilter,
    initialValue,
    //-----
    isPending,
    //-----
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.TITLE" />
      <FormFilter
        findPlaceholderTid="SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
        filterOptions={filterOptions}
        filterSelectName={filterSelectName}
        findFieldName={findFieldName}
        initialValue={initialValue}
        setFilter={setFilter}
      />
      <BasicCardList
        onSetCart={addToCart}
        items={listItems}
        onDeleteProduct={onDeleteProduct}
        isAdmin={isAdmin}
      />
      {isPending && <CenteredSpinner />}
    </SectionLayout>
  );
}

const CenteredSpinner = styled(Spinner)`
  display: flex;
  justify-self: center;
`;
