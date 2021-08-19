import { SectionLayout } from '../../lib/element/layout';
import { SewingGoodsFilter } from './frames';
import { BasicCardList } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';

export function SewingGoodsComponent(props) {
  const {
    initialValue,
    categoryOptions,
    tagsOptions,
    listItems,
    fieldName,
    onSubmit,
    validation,
    pending,
    success,
    error,
    errorMessage,
    filterProducts,
    sortProductsByDate,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.SEWING_GOODS.TITLE" />
      <SewingGoodsFilter
        findPlaceholderTid={'SEWING_GOODS.SEWING_GOODS.FIELD.FIND_SEWING_GOODS'}
        categoryOptions={categoryOptions}
        tagsOptions={tagsOptions}
        initialValue={initialValue}
        fieldName={fieldName}
        onSubmit={onSubmit}
        validation={validation}
        pending={pending}
        success={success}
        error={error}
        errorMessage={errorMessage}
        filterProducts={filterProducts}
        sortProductsByDate={sortProductsByDate}
      />
      <BasicCardList items={listItems} type="sewing-goods" />
    </SectionLayout>
  );
}
