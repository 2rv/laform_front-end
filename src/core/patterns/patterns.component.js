import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { TextSecondary } from 'src/lib/element/text';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { SearchFilter } from 'src/lib/common/search-filter';
import { TabFilter } from '../../lib/common/tab-filter';

export function PatternsComponent(props) {
  const {
    listItems,
    onDeleteProduct,
    isAdmin,
    addToCart,
    activeTab,
    setActiveTab,
    tabItems,
    filterOptions,
    handleFilter,
    isPending,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
      <TabFilter
        isPending={isPending}
        activeTab={activeTab}
        handleFilter={setActiveTab}
        tabItems={tabItems}
      />
      <SearchFilter
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
        filterOptions={filterOptions}
        handleFilter={handleFilter}
      />
      <BasicCardList
        items={listItems}
        onCart={addToCart}
        onDelete={onDeleteProduct}
        admin={isAdmin}
        emptyText="Список пустой"
      />
    </SectionLayout>
  );
}
