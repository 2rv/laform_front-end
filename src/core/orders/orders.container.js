import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  ORDERS_TEST_ITEMS,
  ORDERS_TEST_SUB_MENU_ITEMS,
} from './orders.constant';
import { OrdersComponent } from './orders.component';

export function OrdersContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));
  return (
    <OrdersComponent
      activePath={activePath}
      subMenu={ORDERS_TEST_SUB_MENU_ITEMS}
      ordersData={ORDERS_TEST_ITEMS}
    />
  );
}
