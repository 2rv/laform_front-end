import { useEffect } from 'react';
import { HomeComponent } from './home.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  isRequestPending,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { compilationLoadData } from './home.action';
import { HOME_STORE_NAME } from './home.constant';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function HomeContainer() {
  const dispatch = useDispatch();
  const { compilationState, isAuth } = useSelector((state) => ({
    compilationState: state[HOME_STORE_NAME].compilation,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    dispatch(compilationLoadData(isAuth));
  }, []);

  return (
    <HomeComponent
      compilationPending={isRequestPending(compilationState)}
      compilationBlock={getRequestData(compilationState, [])}
    />
  );
}
