import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
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
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    user: state[AUTH_STORE_NAME].user,
  }));

  const data = [
    ...getRequestData(state.products, []),
    ...getRequestData(state.masterClasses, []),
    ...getRequestData(state.articles, []),
  ];

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(productsLoadData(currentLang));
    dispatch(masterClassesLoadData(currentLang));
    dispatch(articlesLoadData(currentLang));
  }, []);

  return (
    <CompilationComponent
      isPending={isRequestPending(state.articles)}
      isError={isRequestError(state.articles)}
      isSuccess={isRequestSuccess(state.articles)}
      errorMessage={getRequestErrorMessage(state.articles)}
      pageLoading={pageLoading}
      data={filterByType(data, activeTab)}
      tabItems={tabItems}
      currentLang={currentLang}
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
