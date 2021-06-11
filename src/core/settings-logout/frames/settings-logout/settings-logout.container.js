import { authLogout } from '../../../../lib/common/auth';

import { AuthVerificateEmailComponent } from './settings-logout.component';

export function AuthVerificateEmailContainer() {
  return <AuthVerificateEmailComponent onClick={authLogout} />;
}
