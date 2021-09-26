import { useDispatch } from 'react-redux';
import { getQuery, redirect } from '../../main/navigation';
import { authSetData } from '../../lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';
import { useEffect } from 'react';

export function SocialAuthAccessPage() {
  const dispatch = useDispatch();
  const token = getQuery('data');

  useEffect(() => {
    dispatch(authSetData(token));
    redirect(HOME_ROUTE_PATH);
  }, []);

  return <></>;
}
