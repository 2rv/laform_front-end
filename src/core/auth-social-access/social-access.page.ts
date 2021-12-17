import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuery, redirect } from 'src/main/navigation';
import { authSetData } from 'src/lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';

export function SocialAuthAccessPage() {
  const dispatch = useDispatch();
  const token = getQuery('data');

  useEffect(() => {
    dispatch(authSetData(token));
    redirect(HOME_ROUTE_PATH);
  }, []);

  return null;
}
