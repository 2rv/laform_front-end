import { SliderListComponent } from './slider-list.component';
import { TEST_SLIDER_LIST_ITEMS } from './slider-list.constant';

export function SliderListContainer() {
  return <SliderListComponent {...TEST_SLIDER_LIST_ITEMS} />;
}
