import { ADVANTAGE_LIST_ITEMS } from './advantage-list.constant';
import { AdvantageListComponent } from './advantage-list.component';

export function AdvantageListContainer(props) {
  return <AdvantageListComponent items={ADVANTAGE_LIST_ITEMS} {...props} />;
}
