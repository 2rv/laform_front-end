import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { HeaderComponent } from './header.component';
import {
  MASTER_CLASSES_ROUTE_PATH,
  PATTERNS_ROUTE_PATH,
  SEWING_GOODS_ROUTE_PATH,
  ARTICLES_ROUTE_PATH,
  FAQ_PAGE_ROUTE_PATH,
} from './header.constants';

export function HeaderContainer(props) {
  const { activePath, auth } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    auth: state[AUTH_STORE_NAME],
  }));

  return (
    <HeaderComponent
      items={headerNavMenuItems}
      activePath={activePath}
      logged={auth.logged}
      user={auth.user?.login}
      role={auth.user?.role}
      isMobile={props.isMobile}
    />
  );
}
export const headerNavMenuItems = [
  { name: 'HEADER.MENU_ITEMS.PATTERNS', path: PATTERNS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.SEWING_GOODS', path: SEWING_GOODS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.MASTER_CLASSES', path: MASTER_CLASSES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ARTICLES', path: ARTICLES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ABOUT', path: FAQ_PAGE_ROUTE_PATH },
];
