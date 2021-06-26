import { TEST_ITEMS_POPULAR_PUBLICATION } from './popular-publication.constant';
import { PopularPublicationComponent } from './popular-publication.component';

export function PopularPublicationContainer() {
  return <PopularPublicationComponent items={TEST_ITEMS_POPULAR_PUBLICATION} />;
}
