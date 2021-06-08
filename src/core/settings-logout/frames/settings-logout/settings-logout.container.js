import { authLogout } from '../../../../lib/common/auth';

import { AuthVerificateEmailComponent } from './settings-logout.components';

export function AuthVerificateEmailContainer() {
  return <AuthVerificateEmailComponent onClick={authLogout} />;
}
