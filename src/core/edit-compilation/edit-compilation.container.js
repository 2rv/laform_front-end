import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { EditCompilationComponent } from './edit-compilation.component';
import { EDIT_COMPILATION_STORE_NAME } from './edit-compilation.constant';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import {
  bestMasterClassesLoadData,
  bestArticlesLoadData,
  bestProductsLoadData,
  productsLoadData,
} from './edit-compilation.action';

export function EditCompilationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    user: state[AUTH_STORE_NAME].user,
  }));
  const [compilationName, setCompilationName] = useState('');
  const [modalVisibilty, setModalVisibility] = useState(false);

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(bestArticlesLoadData(currentLang));
    dispatch(bestMasterClassesLoadData(currentLang));
    dispatch(bestProductsLoadData(currentLang));
  }, []);

  const fetchProductsToSelectBestCompilation = ({ target: { value } }) => {
    const compName = value === '1' ? 'sewing-product' : value === '2' ? 'master-class' : value === '3' ? 'post' : '';
    setCompilationName(compName);
    dispatch(productsLoadData(compName, currentLang));

    if (isRequestError(state.products) === false) {
      setModalVisibility(true);
    }
  };

  return (
    <EditCompilationComponent
      bestProducts={getRequestData(state.bestProducts, [])}
      bestMasterClasses={getRequestData(state.bestMasterClasses, [])}
      bestArticles={getRequestData(state.bestArticles, [])}
      products={getRequestData(state.products, [])}
      compilationName={compilationName}
      isPendingProducts={isRequestPending(state.products)}
      fetchProductsToSelectBestCompilation={fetchProductsToSelectBestCompilation}
      modalVisibilty={modalVisibilty}
      setModalVisibility={setModalVisibility}
      pageLoading={pageLoading}
      currentLang={currentLang}
    />
  );
}
