import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { SewingGoodsFilter } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function SewingGoodsComponent(props) {
  const {
    initialValue,
    categoryOptions,
    tagsOptions,
    listItems,
    fieldName,
    onSubmit,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.SEWING_GOODS.TITLE" />
      <SewingGoodsFilter
        categoryOptions={categoryOptions}
        tagsOptions={tagsOptions}
        initialValue={initialValue}
        fieldName={fieldName}
        onSubmit={onSubmit}
      />
      <BasicCardList
        items={listItems}
        actions={['OTHER.SELECTED', 'OTHER.SELECT']}
      />
    </SectionLayout>
  );
}
