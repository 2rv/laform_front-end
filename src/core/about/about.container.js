import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import { aboutUsLoadData } from './about.action';
import { AboutComponent } from './about.component';
import { ABOUT_STORE_NAME } from './about.constant';

export function AboutContainer() {
  const dispatch = useDispatch();
  const { state, user, isAuth, pageLoading } = useSelector((state) => ({
    state: state[ABOUT_STORE_NAME].about,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const about = getRequestData(state)?.about;

  useEffect(() => {
    dispatch(aboutUsLoadData());
  }, []);

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  if (isRequestPending(state)) {
    return <Spinner />;
  }

  return <AboutComponent about={about} user={user} isAuth={isAuth} />;
}
