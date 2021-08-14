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
      {listItems ? (
        <>
          <FilterTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabItems={tabItems}
          />
          <BasicCardList items={listItems} type="mixed" />
        </>
      ) : (
        <TextSecondary tid="В вашем списке лайков ещё ничего нет" />
      )}
    </SectionLayout>
  );
}
