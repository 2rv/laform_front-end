

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { EditCompilationComponent } from './edit-compilation.component';
import { TEST_EDIT_COMPILATION_ITEMS, EDIT_COMPILATION_STORE_NAME } from './edit-compilation.constant';

import {
  bestMasterClassesLoadData,
  bestArticlesLoadData,
  bestProductsLoadData,
} from './edit-compilation.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function EditCompilationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  React.useEffect(() => {
    dispatch(bestArticlesLoadData(currentLang.toLowerCase()));
    dispatch(bestMasterClassesLoadData(currentLang.toLowerCase()));
    dispatch(bestProductsLoadData(currentLang.toLowerCase()));
  }, []);

  return (
    <EditCompilationComponent
      isPendingBestProducts={isRequestPending(state.bestProducts)}
      isErrorBestProducts={isRequestError(state.bestProducts)}
      isSuccessBestProducts={isRequestSuccess(state.bestProducts)}
      errorMessageBestProducts={getRequestErrorMessage(state.bestProducts)}

      isPendingBestMasterClasses={isRequestPending(state.bestMasterClasses)}
      isErrorBestMasterClasses={isRequestError(state.bestMasterClasses)}
      isSuccessBestMasterClasses={isRequestSuccess(state.bestMasterClasses)}
      errorMessageBestMasterClasses={getRequestErrorMessage(state.bestMasterClasses)}

      isPendingBestArticles={isRequestPending(state.bestArticles)}
      isErrorBestArticles={isRequestError(state.bestArticles)}
      isSuccessBestArticles={isRequestSuccess(state.bestArticles)}
      errorMessageBestArticles={getRequestErrorMessage(state.bestArticles)}

      bestProducts={getRequestData(state.bestProducts, [])}
      bestMasterClasses={getRequestData(state.bestMasterClasses, [])}
      bestArticles={getRequestData(state.bestArticles, [])}
      pageLoading={pageLoading}
      currentLang={currentLang}
      // {...TEST_EDIT_COMPILATION_ITEMS}
    />
  );
}

