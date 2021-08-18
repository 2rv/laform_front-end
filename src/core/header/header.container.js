import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME } from '../../lib/common/auth';

import { HEADER_MENU_ITEMS } from './header.constants';
import { HeaderComponent } from './header.component';

export function HeaderContainer(props) {
  const { activePath, auth } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    auth: state[AUTH_STORE_NAME],
  }));

  return (
    <HeaderComponent
      items={HEADER_MENU_ITEMS}
      activePath={activePath}
      logged={auth.logged}
      user={auth.user?.login}
      role={auth.user?.role}
      isMobile={props.isMobile}
    />
  );
}
