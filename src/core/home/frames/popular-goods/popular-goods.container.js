import { TEST_ITEMS_POPULAR_GOODS } from './popular-goods.constant';
import { PopularGoodsComponent } from './popular-goods.component';

export function PopularGoodsContainer() {
  return <PopularGoodsComponent items={TEST_ITEMS_POPULAR_GOODS} />;
}
