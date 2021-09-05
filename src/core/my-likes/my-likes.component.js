import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from '../../lib/element/text';

export function MyLikesComponent(props) {
  const { listItems, activeTab, setActiveTab, tabItems } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="Мои лайки" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      {Boolean(listItems.length > 0) ? (
        <BasicCardList items={listItems} />
      ) : (
        <TextSecondary tid="В этом списке лайков ещё нет" />
      )}
    </SectionLayout>
  );
}
