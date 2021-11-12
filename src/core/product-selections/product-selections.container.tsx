import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { ProductSelectionsComponent } from './product-selections.component';
import {
  productsLoadData,
  productsUploadData,
  deleteOneBlock,
} from './product-selections.action';
import { PRODUCT_SELECTIONS_STORE_NAME } from './product-selections.constant';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import {
  formNames,
  productSelectionFormValues,
} from './product-selections.type';

export function ProductSelectionsContainer() {
  const dispatch = useDispatch();
  const {
    productsState,
    compilationUploadState,
    compilationDeleteState,
    currentLang,
  } = useSelector((state: any) => ({
    productsState: state[PRODUCT_SELECTIONS_STORE_NAME].productsState,
    compilationUploadState:
      state[PRODUCT_SELECTIONS_STORE_NAME].compilationUpload,
    compilationDeleteState:
      state[PRODUCT_SELECTIONS_STORE_NAME].compilationDelete,

    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));
  const { listItems, products } = getRequestData(productsState, {
    listItems: [],
    products: [],
  });

  useEffect(() => {
    dispatch(productsLoadData(currentLang));
  }, []);

  function initialValues(): productSelectionFormValues {
    if (Boolean(products.length)) return { products };
    return {
      products: [initialBlock],
    };
  }

  const initialBlock = {
    [formNames.blockName]: 'Блок',
    [formNames.blockItems]: [],
  };

  function onSubmit(values: productSelectionFormValues) {
    dispatch(productsUploadData(values));
  }

  function compilationDelete(id: string) {
    if (id) {
      dispatch(deleteOneBlock(id));
    }
  }

  return (
    <ProductSelectionsComponent
      uploadSuccess={isRequestSuccess(compilationUploadState)}
      uploadPending={isRequestPending(compilationUploadState)}
      uploadError={isRequestError(compilationUploadState)}
      uploadErrorMessage={getRequestErrorMessage(compilationUploadState)}
      listItems={listItems}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      initialBlock={initialBlock}
      compilationDelete={compilationDelete}
      deleteSuccess={isRequestSuccess(compilationDeleteState)}
      deletePending={isRequestPending(compilationDeleteState)}
      deleteError={isRequestError(compilationDeleteState)}
      deleteErrorMessage={getRequestErrorMessage(compilationDeleteState)}
    />
  );
}
