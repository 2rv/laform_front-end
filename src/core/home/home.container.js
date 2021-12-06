import { useEffect } from 'react';
import { HomeComponent } from './home.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  isRequestPending,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { compilationLoadData } from './home.action';
import { HOME_STORE_NAME } from './home.constant';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  PATTERNS_ELECTRONIC_ROUTE_PATH,
  PATTERNS_PRINT_ROUTE_PATH,
} from '../patterns';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';

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
      catalogListItems={catalogListItems}
      compilationPending={isRequestPending(compilationState)}
      compilationBlock={getRequestData(compilationState, [])}
    />
  );
}
export const catalogListItems = [
  {
    title: 'HOME.CATALOG_LIST.E_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.E_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-image-1.jpg',
    path: PATTERNS_ELECTRONIC_ROUTE_PATH,
  },
  {
    title: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-image-2.jpg',
    path: PATTERNS_PRINT_ROUTE_PATH,
  },
  {
    title: 'HOME.CATALOG_LIST.MASTER_CLASSES.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-image-3.jpg',
    path: MASTER_CLASSES_ROUTE_PATH,
  },
  {
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-image-4.jpg',
    path: SEWING_GOODS_ROUTE_PATH,
  },
];
