import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
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
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <PatternsFormFilter
        findPlaceholderTid={'PATTERNS.PATTERNS.FIELD.FIND_PATTERNS'}
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
      <BasicCardList items={listItems} />
    </SectionLayout>
  );
}
