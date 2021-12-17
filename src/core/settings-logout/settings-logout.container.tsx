import { useDispatch } from 'react-redux';
import { authSetData } from 'src/lib/common/auth';
import { redirect } from 'src/main/navigation';
import { clearCartAction } from '../basket/basket.action';
import { SettingsLogutComponent } from './settings-logout.component';

export function SettingsLogutContainer() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearCartAction());
    dispatch(authSetData(null));
    redirect('/');
  };

  return <SettingsLogutComponent onClick={logout} />;
}
