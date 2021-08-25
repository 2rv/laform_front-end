import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { EditCompilationComponent } from './edit-compilation.component';
import { EDIT_COMPILATION_STORE_NAME } from './edit-compilation.constant';
import { getRequestData } from '../../main/store/store.service';

import {
  bestMasterClassesLoadData,
  bestArticlesLoadData,
  bestProductsLoadData,
} from './edit-compilation.action';

export function EditCompilationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    user: state[AUTH_STORE_NAME].user,
  }));

  React.useEffect(() => {
    if (user && user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(bestArticlesLoadData(currentLang));
    dispatch(bestMasterClassesLoadData(currentLang));
    dispatch(bestProductsLoadData(currentLang));
  }, []);

  return (
    <EditCompilationComponent
      bestProducts={getRequestData(state.bestProducts, [])}
      bestMasterClasses={getRequestData(state.bestMasterClasses, [])}
      bestArticles={getRequestData(state.bestArticles, [])}
      pageLoading={pageLoading}
      currentLang={currentLang}
    />
  );
}
