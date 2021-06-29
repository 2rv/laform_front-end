import { useSelector } from 'react-redux';
import { SewingGoodsComponent } from './sewing-goods.component';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  SEWING_GOODS_SUB_MENU_ITEMS,
  TEST_SEWING_GOODS_ITEMS,
} from './sewing-goods.constant';

export function SewingGoodsContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <SewingGoodsComponent
      activePath={activePath}
      items={TEST_SEWING_GOODS_ITEMS}
      menuItems={SEWING_GOODS_SUB_MENU_ITEMS}
    />
  );
}
