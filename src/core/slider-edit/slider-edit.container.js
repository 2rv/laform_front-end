import { SliderEditComponent } from './slider-edit.component';
import {
  TEST_SLIDER_FIELDS_DATA,
  TEST_SLIDE_PREVIEW_DATA,
} from './slider-edit.constant';

export function SliderEditContainer() {
  return (
    <SliderEditComponent
      previewSlideData={TEST_SLIDE_PREVIEW_DATA}
      slideFieldsData={TEST_SLIDER_FIELDS_DATA}
    />
  );
}
