import { INFORMATION_LIST_ITEMS } from './information-list.constant';
import { InformationListComponent } from './information-list.component';

export function InformationListContainer(props) {
  return <InformationListComponent items={INFORMATION_LIST_ITEMS} {...props} />;
}
