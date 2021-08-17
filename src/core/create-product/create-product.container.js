import { useEffect } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { createProductUploadData } from './create-product.action';
import { CreateProductComponent } from './create-product.component';
import { CREATE_PRODUCT_STORE_NAME } from './create-product.constant';
import { PRODUCT_FIELD_NAME } from './create-product.type';

export function CreateProductContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_PRODUCT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(createProductUploadData());
  }, []);

  //---------------------------- для fieldArray
  const initialCategoriesItem = {
    [PRODUCT_FIELD_NAME.ONE_CATEGORY]: '',
  };
  const initialPositionsItem = {
    [PRODUCT_FIELD_NAME.ONE_POSITION_NAME]: '',
    [PRODUCT_FIELD_NAME.ONE_POSITION_PRICE]: '',
  };
  const initialOptionsItem = {
    [PRODUCT_FIELD_NAME.ONE_OPTION_CATEGORY]: 0,
    [PRODUCT_FIELD_NAME.POSITIONS]: [initialPositionsItem],
  };
  //---------------------------- initialValues
  const initialValues = () => ({
    [PRODUCT_FIELD_NAME.CATEGORIES]: [initialCategoriesItem],
    [PRODUCT_FIELD_NAME.OPTIONS]: [initialOptionsItem],
  });
  const onSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <CreateProductComponent
      isPending={isRequestPending(state.createProduct)}
      isError={isRequestError(state.createProduct)}
      isSuccess={isRequestSuccess(state.createProduct)}
      errorMessage={getRequestErrorMessage(state.createProduct)}
      pageLoading={pageLoading}
      imagesData={testImagesData}
      initialCategoriesItem={initialCategoriesItem}
      initialPositionsItem={initialPositionsItem}
      initialOptionsItem={initialOptionsItem}
      initialValues={initialValues()}
      onSubmitForm={onSubmitForm}
    />
  );
}

export const testImagesData = [
  { backgroundImage: '/static/test/product-image-3.png' },
  { backgroundImage: '/static/test/product-image-2.png' },
  { backgroundImage: '/static/test/product-image-1.png' },
];
