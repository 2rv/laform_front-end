import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { filterByType } from '../../lib/common/filter-list-card';
import { compilationUploadData } from './compilation.action';
import { CompilationComponent } from './compilation.component';
import { COMPILATION_STORE_NAME } from './compilation.constant';

export function CompilationContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(compilationUploadData());
  }, []);

  return (
    <CompilationComponent
      isPending={isRequestPending(state.compilation)}
      isError={isRequestError(state.compilation)}
      isSuccess={isRequestSuccess(state.compilation)}
      errorMessage={getRequestErrorMessage(state.compilation)}
      pageLoading={pageLoading}
      itemsTable={filterByType(itemsTable, activeTab)}
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
