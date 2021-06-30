import { TEST_ITEMS_POPULAR_MASTER_CLASSES } from './popular-master-classes.constant';
import { PopularMasterClassesComponent } from './popular-master-classes.component';

export function PopularMasterClassesContainer() {
  return (
    <PopularMasterClassesComponent items={TEST_ITEMS_POPULAR_MASTER_CLASSES} />
  );
}
