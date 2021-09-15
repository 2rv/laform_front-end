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

export function HomeContainer() {
  const dispatch = useDispatch();
  const {
    masterClassState,
    sewingGoodsState,
    articleState,
    pageLoading,
    currentLang,
  } = useSelector((state) => ({
    masterClassState: state[HOME_STORE_NAME].masterClassState,
    sewingGoodsState: state[HOME_STORE_NAME].sewingGoodsState,
    articleState: state[HOME_STORE_NAME].articleState,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch(masterClassUploadData(currentLang));
    dispatch(sewingGoodsUploadData(currentLang));
    dispatch(articleUploadData(currentLang));
  }, []);

  return (
    <HomeComponent
      pageLoading={pageLoading}
      catalogListItems={catalogListItems}
      //------------
      masterClassIsPending={isRequestPending(masterClassState)}
      masterClassIsSuccess={isRequestSuccess(masterClassState)}
      masterClassIsError={isRequestError(masterClassState)}
      masterClassErrorMessage={getRequestErrorMessage(masterClassState)}
      masterClassListItems={getRequestData(masterClassState, [
        ...masterClassTestState,
      ])}
      //------------
      sewingGoodsIsPending={isRequestPending(sewingGoodsState)}
      sewingGoodsIsSuccess={isRequestSuccess(sewingGoodsState)}
      sewingGoodsIsError={isRequestError(sewingGoodsState)}
      sewingGoodsErrorMessage={getRequestErrorMessage(sewingGoodsState)}
      sewingGoodsListItems={getRequestData(sewingGoodsState, [
        ...sewingGoodsTestState,
      ])}
      //------------
      articleIsPending={isRequestPending(articleState)}
      articleIsSuccess={isRequestSuccess(articleState)}
      articleIsError={isRequestError(articleState)}
      articleErrorMessage={getRequestErrorMessage(articleState)}
      articleListItems={getRequestData(articleState, [...articleTestState])}
    />
  );
}

export const catalogListItems = [
  {
    title: 'HOME.CATALOG_LIST.E_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.E_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-1.png',
    path: '/patterns',
    pathConfig: { query: { type: 'electronic' } },
  },
  {
    title: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-2.png',
    path: '/patterns',
    pathConfig: { query: { type: 'printed' } },
  },
  {
    title: 'HOME.CATALOG_LIST.MASTER_CLASSES.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-3.png',
    path: '/master-classes',
  },
  {
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    backgroundImage: '/static/image/catalog-list-4.png',
    path: '/sewing-goods',
  },
];

export const masterClassTestState = [
  {
    id: 1,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    bestseller: true,
    select: false,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 5,
      max: null,
    },
  },
  {
    id: 2,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: true,
    select: true,
    like: false,
    type: 0,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 3,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: false,
    select: true,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 3,
      max: 1000,
    },
  },
];
export const sewingGoodsTestState = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    select: true,
    like: true,
    type: 3,
    price: {
      min: 500,
      discount: 0,
      max: null,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    select: false,
    like: false,
    bestseller: true,
    type: 3,
    price: {
      min: 200,
      discount: null,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    select: false,
    like: false,
    bestseller: true,
    type: 3,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
export const articleTestState = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    date: '1 неделю назад',
    type: 4,
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    date: '1 неделю назад',
    type: 4,
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    date: '2 недели назад',
    type: 4,
  },
];
