import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { FormFilter } from '../../lib/element/form-filter';

export function PatternsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    addToCart,
    //-----
    activeTab,
    setActiveTab,
    tabItems,
    //-----
    filterOptions,
    filterSelectName,
    findFieldName,
    setFilter,
    initialValue,
    //-----
    pending,
    success,
    error,
    errorMessage,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <FormFilter
        findPlaceholderTid={'PATTERNS.PATTERNS.FIELD.FIND_PATTERNS'}
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
    </SectionLayout>
  );
}
