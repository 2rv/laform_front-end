import React from 'react';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { LoaderPrimary } from '../../lib/element/loader';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    <React.Fragment>
      {isPending && <LoaderPrimary />}
      <SectionLayout>
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
    </React.Fragment>
  );
}
