import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import { MasterClassesComponent } from './master-classes.component';
import { TEST_MASTER_CLASSES_ITEMS } from './master-classes.constant';

export function MasterClassesContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <MasterClassesComponent
      activePath={activePath}
      items={TEST_MASTER_CLASSES_ITEMS}
    />
  );
}
