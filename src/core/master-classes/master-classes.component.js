import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { MasterClassesFormFilter } from './frames';

export function MasterClassesComponent(props) {
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
      <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <MasterClassesFormFilter
        findPlaceholderTid={
          'MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES'
        }
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
      <BasicCardList type="master-classes" items={listItems} />
    </SectionLayout>
  );
}
