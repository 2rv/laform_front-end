import { HomeComponent } from './home.component';
import { SLIDER_TEST_ITEMS } from './home.constant';
export function HomeContainer() {
  return <HomeComponent sliderData={SLIDER_TEST_ITEMS} />;
}
