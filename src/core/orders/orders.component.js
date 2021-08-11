import { OrdersListComponent, OrdersSubMenuComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';

export function OrdersComponent(props) {
  const { activePath, subMenu, ordersData } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Заказы" />
      <OrdersSubMenuComponent activePath={activePath} items={subMenu} />
      <OrdersListComponent items={ordersData} />
    </SectionLayout>
  );
}
