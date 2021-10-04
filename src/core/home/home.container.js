import { useEffect } from 'react';
import { HomeComponent } from './home.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import {
  masterClassUploadData,
  sewingGoodsUploadData,
  articleUploadData,
} from './home.action';
import { HOME_STORE_NAME } from './home.constant';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { addToBasket } from '../basket';
import { PATTERNS_ROUTE_PATH } from '../patterns/patterns.constant';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes/master-classes.constant';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods/sewing-goods.constant';

export function HomeContainer() {
  const dispatch = useDispatch();
  const {
    masterClassState,
    sewingGoodsState,
    articleState,
    pageLoading,
    currentLang,
    logged,
  } = useSelector((state) => ({
    masterClassState: state[HOME_STORE_NAME].masterClassState,
    sewingGoodsState: state[HOME_STORE_NAME].sewingGoodsState,
    articleState: state[HOME_STORE_NAME].articleState,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    logged: state[AUTH_STORE_NAME].logged,
  }));

  useEffect(() => {
    dispatch(masterClassUploadData(currentLang, logged));
    dispatch(sewingGoodsUploadData(currentLang, logged));
    dispatch(articleUploadData(currentLang, logged));
  }, []);

  const addToCart = (values) => dispatch(addToBasket(values, currentLang));

  return (
    <HomeComponent
      pageLoading={pageLoading}
      catalogListItems={catalogListItems}
      addToCart={addToCart}
      //------------
      masterClassIsPending={isRequestPending(masterClassState)}
      masterClassIsSuccess={isRequestSuccess(masterClassState)}
      masterClassIsError={isRequestError(masterClassState)}
      masterClassErrorMessage={getRequestErrorMessage(masterClassState)}
      masterClassListItems={getRequestData(masterClassState, [])}
      //------------
      sewingGoodsIsPending={isRequestPending(sewingGoodsState)}
      sewingGoodsIsSuccess={isRequestSuccess(sewingGoodsState)}
      sewingGoodsIsError={isRequestError(sewingGoodsState)}
      sewingGoodsErrorMessage={getRequestErrorMessage(sewingGoodsState)}
      sewingGoodsListItems={getRequestData(sewingGoodsState, [])}
      //------------
      articleIsPending={isRequestPending(articleState)}
      articleIsSuccess={isRequestSuccess(articleState)}
      articleIsError={isRequestError(articleState)}
      articleErrorMessage={getRequestErrorMessage(articleState)}
      articleListItems={getRequestData(articleState, [])}
    />
  );
}

export const catalogListItems = [
  {
    title: 'HOME.CATALOG_LIST.E_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.E_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-1.png',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { query: { type: 'electronic' } },
  },
  {
    title: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-2.png',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { query: { type: 'printed' } },
  },
  {
    title: 'HOME.CATALOG_LIST.MASTER_CLASSES.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-3.png',
    path: MASTER_CLASSES_ROUTE_PATH,
  },
  {
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-4.png',
    path: SEWING_GOODS_ROUTE_PATH,
  },
];
