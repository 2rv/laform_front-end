import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { HeaderComponent } from './header.component';
import {
  NAV_MENU_ITEMS,
  USER_MENU_ITEMS,
  ADMIN_MENU_ITEMS,
} from './header.constants';
import { USER_ROLE } from '../../lib/common/auth';
import { BASKET_STORE_NAME } from '../basket';

export function HeaderContainer(props) {
  const { setSidebarOpen, sidebarIsOpen, width } = props;
  const { activePath, auth, currentLang, cartCount } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    auth: state[AUTH_STORE_NAME],
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    cartCount: state[BASKET_STORE_NAME].basket.length,
  }));

  const modalMenuItems = () => {
    if (auth?.user?.role === USER_ROLE.ADMIN) {
      return USER_MENU_ITEMS.concat(ADMIN_MENU_ITEMS);
    } else {
      return USER_MENU_ITEMS;
    }
  };

  return (
    <HeaderComponent
      cartCount={cartCount}
      setSidebarOpen={setSidebarOpen}
      sidebarIsOpen={sidebarIsOpen}
      isMobile={width < 720}
      isTablet={width < 1070}
      activePath={activePath}
      isAuth={auth.logged}
      userName={auth?.user?.login}
      currentLang={currentLang}
      navMenuItems={NAV_MENU_ITEMS}
      modalMenuItems={modalMenuItems()}
    />
  );
}
