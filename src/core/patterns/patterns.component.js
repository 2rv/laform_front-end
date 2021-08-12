import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { PatternsFormFilter } from './frames';
import { BasicCardList } from '../../lib/element/card-list';
import { FilterTabs } from '../../lib/element/filter-tabs';

export function PatternsComponent(props) {
  const {
    activeTab,
    setActiveTab,
    tabItems,
    initialValue,
    categoryOptions,
    tagsOptions,
    listItems,
    fieldName,
    onSubmit,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <PatternsFormFilter
        categoryOptions={categoryOptions}
        tagsOptions={tagsOptions}
        initialValue={initialValue}
        fieldName={fieldName}
        onSubmitForm={onSubmit}
        validation={null}
        dataPending={null}
        formPending={null}
        formSuccess={null}
        formError={null}
        errorMessage={null}
      />
      <BasicCardList type="pattern" items={listItems} />
    </SectionLayout>
  );
}
