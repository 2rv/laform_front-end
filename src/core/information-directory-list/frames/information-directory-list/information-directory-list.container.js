import { INFORMATION_DIRECTORY_LIST_ITEMS } from './information-directory-list.constant';
import { InformationDirectoryListComponent } from './information-directory-list.component';

export function InformationDirectoryListContainer() {
  return (
    <InformationDirectoryListComponent
      items={INFORMATION_DIRECTORY_LIST_ITEMS}
    />
  );
}
