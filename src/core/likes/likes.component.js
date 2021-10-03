import React from 'react';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { LoaderPrimary } from '../../lib/element/loader';

export function PatternsComponent(props) {
  const {
    listItems,
    activeTabText,
    activeTab,
    setActiveTab,
    tabItems,

    pageLoading,
    isPending,
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
        <BasicCardList items={listItems} emptyText="ALL_LIKES.CATEGORY_EMPTY" />
      </SectionLayout>
    </React.Fragment>
  );
}
