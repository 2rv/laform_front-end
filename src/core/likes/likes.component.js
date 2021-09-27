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
        <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
        <FilterTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabItems={tabItems}
          disabled={isPending}
        />
        {listItems === null ? null : listItems.length ? (
          <BasicCardList items={listItems} />
        ) : (
          <TextSecondary tid="ALL_LIKES.CATEGORY_EMPTY" />
        )}
      </SectionLayout>
    </React.Fragment>
  );
}
