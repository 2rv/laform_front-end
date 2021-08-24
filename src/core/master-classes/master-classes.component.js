import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FormFilter } from '../../lib/element/form-filter';

export function MasterClassesComponent(props) {
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
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <FormFilter
        findPlaceholderTid="MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES"
        filterOptions={filterOptions}
        filterSelectName={filterSelectName}
        findFieldName={findFieldName}
        initialValue={initialValue}
        onSubmit={onSubmit}
      />
      <BasicCardList type="master-classes" items={listItems} />
    </SectionLayout>
  );
}
