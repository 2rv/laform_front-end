import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
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
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));
  const [compilationName, setCompilationName] = useState('');
  const [modalVisibilty, setModalVisibility] = useState(false);
  const products = getRequestData(state.products, []);

  useEffect(() => {
    dispatch(bestArticlesLoadData(currentLang));
    dispatch(bestMasterClassesLoadData(currentLang));
    dispatch(bestProductsLoadData(currentLang));
  }, []);

  const fetchProductsToSelectBestCompilation = ({ target: { value } }) => {
    const compName =
      value === '1'
        ? 'sewing-product'
        : value === '2'
        ? 'master-class'
        : value === '3'
        ? 'post'
        : '';
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
          fetchProductsToSelectBestCompilation={
            fetchProductsToSelectBestCompilation
          }
          currentLang={currentLang}
        />
      </PageWrapper>
      <ModalPopup
        modalVisibilty={modalVisibilty}
        onClose={() => setModalVisibility(false)}
      >
        {isRequestPending(state.products) ? (
          <Spinner />
        ) : (
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
                    image={
                      product.images?.[0]?.fileUrl || product.image?.fileUrl
                    }
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
