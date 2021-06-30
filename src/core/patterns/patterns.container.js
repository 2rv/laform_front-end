import { useSelector } from 'react-redux';
import { PatternsComponent } from './patterns.component';
import {
  PATTERNS_SUB_MENU_ITEMS,
  TEST_PATTERNS_ITEMS,
} from './patterns.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
export function PatternsContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <PatternsComponent
      activePath={activePath}
      items={TEST_PATTERNS_ITEMS}
      menuItems={PATTERNS_SUB_MENU_ITEMS}
    />
  );
}
