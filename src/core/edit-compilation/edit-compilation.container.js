import { EditCompilationComponent } from './edit-compilation.component';
import { TEST_EDIT_COMPILATION_ITEMS } from './edit-compilation.constant';

export function EditCompilationContainer() {
  return <EditCompilationComponent {...TEST_EDIT_COMPILATION_ITEMS} />;
}
