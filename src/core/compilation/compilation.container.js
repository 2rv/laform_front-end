import { CompilationComponent } from './compilation.component';
import { useSelector } from 'react-redux';
import {
  COMPILATION_SUB_MENU_ITEMS,
  TEST_COMPILATION_ITEMS,
} from './compilation.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

export function CompilationContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <CompilationComponent
      activePath={activePath}
      subMenuItems={COMPILATION_SUB_MENU_ITEMS}
      items={TEST_COMPILATION_ITEMS}
    />
  );
}
