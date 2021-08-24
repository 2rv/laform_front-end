import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { FormFilter } from '../../lib/element/form-filter';

export function SewingGoodsComponent(props) {
  const {
    listItems,
    //-----
    filterOptions,
    filterSelectName,
    findFieldName,
    onSubmit,
    initialValue,
    //-----
    pending,
    success,
    error,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.SEWING_GOODS.TITLE" />
      <FormFilter
        findPlaceholderTid="SEWING_GOODS.SEWING_GOODS.FIELD.FIND_SEWING_GOODS"
        filterOptions={filterOptions}
        filterSelectName={filterSelectName}
        findFieldName={findFieldName}
        initialValue={initialValue}
        onSubmit={onSubmit}
      />
      <BasicCardList items={listItems} />
    </SectionLayout>
  );
}
