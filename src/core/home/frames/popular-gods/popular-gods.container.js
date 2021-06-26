import { TEST_ITEMS_POPULAR_GODS } from './popular-gods.constant';
import { PopularGodsComponent } from './popular-gods.component';

export function PopularGodsContainer() {
  return <PopularGodsComponent items={TEST_ITEMS_POPULAR_GODS} />;
}
