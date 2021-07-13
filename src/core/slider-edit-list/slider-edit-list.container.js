import { SliderEditListComponent } from './slider-edit-list.component';
import { TEST_SLIDER_LIST_ITEMS } from './slider-edit-list.constant';

export function SliderEditListContainer() {
  return <SliderEditListComponent {...TEST_SLIDER_LIST_ITEMS} />;
}
