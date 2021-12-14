import React from 'react';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { LoaderPrimary } from 'src/lib/element/loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export function PatternsComponent(props) {
  const {
    listItems,
    activeTabText,
    activeTab,
    setActiveTab,
    tabItems,

    pageLoading,
    isPending,
    isPagination,

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
        <InfiniteScroll
          dataLength={listItems?.length ?? 0}
          next={fetchData}
          hasMore={hasMore}
        >
          <BasicCardList
            isLoading={isPending}
            isPagination={isPagination}
            pending={isPending}
            items={listItems}
            emptyText="ALL_LIKES.CATEGORY_EMPTY"
          />
        </InfiniteScroll>
      </SectionLayout>
    </React.Fragment>
  );
}
