import { useDispatch } from 'react-redux';
import { authLogout } from '../../lib/common/auth';
import { clearCartAction } from '../basket/basket.action';
import { SettingsLogutComponent } from './settings-logout.component';

export function SettingsLogutContainer() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearCartAction());
    authLogout();
  };

  return <SettingsLogutComponent onClick={logout} />;
}
