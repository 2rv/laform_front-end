import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { filterByType } from '../../lib/common/filter-list-card';
import { COMPILATION_STORE_NAME } from './compilation.constant';
import { CompilationComponent } from './compilation.component';
import {
  productsLoadData,
  masterClassesLoadData,
  articlesLoadData,
} from './compilation.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CompilationContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  const convertedData = [
    ...getRequestData(state.products, []),
    ...getRequestData(state.masterClasses, []),
    ...getRequestData(state.articles, [])
  ];

  useEffect(() => {
    dispatch(productsLoadData(currentLang.toLowerCase()));
    dispatch(masterClassesLoadData(currentLang.toLowerCase()));
    dispatch(articlesLoadData(currentLang.toLowerCase()));
  }, []);

  return (
    <CompilationComponent
      isPending={isRequestPending(state.articles)}
      isError={isRequestError(state.articles)}
      isSuccess={isRequestSuccess(state.articles)}
      errorMessage={getRequestErrorMessage(state.articles)}
      pageLoading={pageLoading}
      itemsTable={filterByType(convertedData, activeTab)}
      tabItems={tabItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}

const tabItems = [
  { name: 'COMPILATION.SUB_MENU.POPULAR_GOODS', type: 0 },
  { name: 'COMPILATION.SUB_MENU.BEST_MASTER_CLASSES', type: 1 },
  { name: 'COMPILATION.SUB_MENU.BEST_ARCTICLES', type: 2 },
];

const itemsTable = [
  {
    name: 'Товары для шитья',
    type: 0,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    type: 0,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    type: 0,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    type: 1,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    type: 1,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    type: 0,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    type: 2,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    type: 2,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    type: 2,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
];
