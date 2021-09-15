import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { TableList } from '../block-table-list';

export function OrdersComponent(props) {
  const { activeTab, setActiveTab, tabItems, headersTable, itemsTable } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="ORDERS.ORDERS" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <TableList items={itemsTable} headers={headersTable} />
    </SectionLayout>
  );
}
