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
} from './product-selections.action';
import { PRODUCT_SELECTIONS_STORE_NAME } from './product-selections.constant';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { productSelectionFormValues } from './product-selections.type';

export function ProductSelectionsContainer() {
  const dispatch = useDispatch();
  const { productsState, currentLang } = useSelector((state: any) => ({
    productsState: state[PRODUCT_SELECTIONS_STORE_NAME].productsState,
    compilationUploadState:
      state[PRODUCT_SELECTIONS_STORE_NAME].compilationUpload,

    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch(productsLoadData(currentLang));
  }, []);

  function initialValues(): productSelectionFormValues {
    return {
      products: [initialBlock],
    };
  }

  const initialBlock = {
    title: 'Блок',
    items: [],
  };

  function onSubmit(values: productSelectionFormValues) {
    console.log(values);

    dispatch(productsUploadData(values));
  }

  return (
    <ProductSelectionsComponent
      success={isRequestSuccess(productsState)}
      error={isRequestError(productsState)}
      errorMessage={getRequestErrorMessage(productsState)}
      listItems={getRequestData(productsState)}
      pending={isRequestPending(productsState)}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      initialBlock={initialBlock}
    />
  );
}
