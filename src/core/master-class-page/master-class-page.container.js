import { TEST_MASTER_CLASS_PAGE_DATA } from './master-class-page.constant';
import { MasterClassPageComponent } from './master-class-page.component';

export function MasterClassPageContainer() {
  return <MasterClassPageComponent {...TEST_MASTER_CLASS_PAGE_DATA} />;
}
