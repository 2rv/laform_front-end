import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
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
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  React.useEffect(() => {
    // dispatch(bestArticlesLoadData(currentLang.toLowerCase()));
    // dispatch(bestMasterClassesLoadData(currentLang.toLowerCase()));
    // dispatch(bestProductsLoadData(currentLang.toLowerCase()));
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
