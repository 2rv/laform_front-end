import { IndentLayout } from '../../lib/element/layout';
import {
  NotificationFormContainer,
  NotificationHeaderComponent,
} from './frames';

export function NotificationComponent(props) {
  return (
    <IndentLayout type="small">
      <NotificationHeaderComponent />
      <NotificationFormContainer {...props} />
    </IndentLayout>
  );
}
