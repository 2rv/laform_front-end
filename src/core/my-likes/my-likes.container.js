import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { MyLikesComponent } from './my-likes.component';
import {
  MY_LIKES_SUB_MENU_ITEMS,
  TEST_MY_LIKES_ITEMS,
} from './my-likes.constant';

export function MyLikesContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <MyLikesComponent
      activePath={activePath}
      items={TEST_MY_LIKES_ITEMS}
      menuItems={MY_LIKES_SUB_MENU_ITEMS}
    />
  );
}
