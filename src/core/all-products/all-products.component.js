import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SearchFilter } from 'src/lib/common/search-filter';

export function AllProductsComponent(props) {
  const {
    products,
    activeTabText,
    activeTab,
    setActiveTab,
    tabItems,
    onDeleteProduct,
    isAdmin,
    filterOptions,
    categories,
    handleFilter,

    pageLoading,
    isPending,

    fetchData,
    hasMore,
  } = props;

  return (
    <SectionLayout>
      {isPending && <LoaderPrimary />}
      <TitlePrimary tid={activeTabText} />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
        disabled={isPending}
      />
      <SearchFilter
        findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={handleFilter}
      />
      <InfiniteScroll
        dataLength={products?.length ?? 0}
        next={fetchData}
        hasMore={hasMore}
      >
        <BasicCardList
          onDelete={onDeleteProduct}
          admin={isAdmin}
          items={products}
          emptyText="ALL_PRODUCTS.CATEGORY_EMPTY"
          isCreateList
          isAllProductsPage
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
