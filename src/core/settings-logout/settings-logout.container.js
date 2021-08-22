import { authLogout } from '../../lib/common/auth';
import { SettingsLogutComponent } from './settings-logout.component';

export function SettingsLogutContainer() {
  return <SettingsLogutComponent onClick={authLogout} />;
}
