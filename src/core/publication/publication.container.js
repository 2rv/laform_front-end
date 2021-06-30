import { useSelector } from 'react-redux';
import { PublicationComponent } from './publication.component';
import {
  PUBLICATION_SUB_MENU_ITEMS,
  TEST_PUBLICATION_ITEMS,
} from './publication.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
export function PublicationContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <PublicationComponent
      activePath={activePath}
      items={TEST_PUBLICATION_ITEMS}
      menuItems={PUBLICATION_SUB_MENU_ITEMS}
    />
  );
}
