import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { EditCompilationComponent } from './edit-compilation.component';
import { EDIT_COMPILATION_STORE_NAME } from './edit-compilation.constant';
import { PageWrapper } from 'src/lib/common/page-wrapper';
import { ModalPopup } from 'src/lib/element/modal';
import { spacing } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { Spinner } from 'src/lib/element/spinner';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SelectCompilationComponent } from './frames';

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
  const products = getRequestData(state.products, []);

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
    <>
      {pageLoading && <LoaderPrimary />}
      <PageWrapper>
        <EditCompilationComponent
          bestProducts={getRequestData(state.bestProducts, [])}
          bestMasterClasses={getRequestData(state.bestMasterClasses, [])}
          bestArticles={getRequestData(state.bestArticles, [])}
          fetchProductsToSelectBestCompilation={fetchProductsToSelectBestCompilation}
          currentLang={currentLang}
        />
      </PageWrapper>
      <ModalPopup modalVisibilty={modalVisibilty} onClose={() => setModalVisibility(false)}>
        {isRequestPending(state.products) ? <Spinner /> : (
          <ModalContent>
            {Boolean(products.length > 0) ? (
              products.filter(({ pinned }) => pinned).length >= 3 ? (
                <TextSecondary tid="COMPILATION.MAX_BEST_PRODUCTS" />
              ) : (
                products.map((product) => (
                  <SelectCompilationComponent
                    key={product.id}
                    id={product.id}
                    title={product.titleRu}
                    pinned={product.pinned}
                    image={(product.images ? product.images[0] : product.imageUrl)?.fileUrl}
                    compilationName={compilationName}
                    currentLang={currentLang}
                    setModalVisibility={setModalVisibility}
                  />
                ))
              )
            ) : (
              <TextSecondary tid="COMPILATION.LIST_IS_EMPTY" />
            )}
          </ModalContent>
        )}
      </ModalPopup>
    </>
  );
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
