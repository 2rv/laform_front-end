import { useDispatch } from 'react-redux';
import { authLogout } from '../../lib/common/auth';
import { clearBasketAction } from '../basket/basket.action';
import { SettingsLogutComponent } from './settings-logout.component';

export function SettingsLogutContainer() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearBasketAction());
    authLogout();
  };

  return <SettingsLogutComponent onClick={logout} />;
}
