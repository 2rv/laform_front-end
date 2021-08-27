import { useEffect, useState } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { createProductUploadData } from './create-product.action';
import { CreateProductComponent } from './create-product.component';
import {
  CREATE_PRODUCT_STORE_NAME,
  SELECT_OPTIONS_DATA,
} from './create-product.constant';
import { PRODUCT_FIELD_NAME } from './create-product.type';
import { createProuctValidation } from './create-product.validation';

export function CreateProductContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_PRODUCT_STORE_NAME].createProduct,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //--------------------------------------------------------------------------

  const [imageUrls, setImageUrls] = useState([]);

  const onSubmitForm = (formValues) => {
    console.log('onSubmit');
    dispatch(createProductUploadData(imageUrls, formValues));
  };

  //--------------------------------------------------------------------------

  const setImage = (image) => {
    const imageUrlsCopy = [...imageUrls];
    imageUrlsCopy.push(image);
    setImageUrls(imageUrlsCopy);
  };
  const removeImage = (index) => {
    const imageUrlsCopy = [...imageUrls];
    imageUrlsCopy.splice(index, 1);
    setImageUrls(imageUrlsCopy);
  };
  const changeImage = (image, index) => {
    const imageUrlsCopy = [...imageUrls];
    imageUrlsCopy.splice(index, 1, image);
    setImageUrls(imageUrlsCopy);
  };

  //--------------------------------------------------------------------------

  const initialData = {
    [PRODUCT_FIELD_NAME.CATEGORIES]: {
      [PRODUCT_FIELD_NAME.CATEGORY_NAME]: 0,
    },
    [PRODUCT_FIELD_NAME.SIZES]: {
      [PRODUCT_FIELD_NAME.SIZE_NAME]: '',
      [PRODUCT_FIELD_NAME.SIZE_PRICE]: 0,
    },
    [PRODUCT_FIELD_NAME.COLORS]: {
      [PRODUCT_FIELD_NAME.COLOR_NAME]: '',
      [PRODUCT_FIELD_NAME.COLOR_PRICE]: 0,
    },
    [PRODUCT_FIELD_NAME.PROGRAMS]: {
      [PRODUCT_FIELD_NAME.PROGRAM_NAME]: '',
      [PRODUCT_FIELD_NAME.PROGRAM_PRICE]: 0,
    },
  };
  const initialValues = () => ({
    [PRODUCT_FIELD_NAME.CATEGORIES]: [
      initialData[PRODUCT_FIELD_NAME.CATEGORIES],
    ],
    [PRODUCT_FIELD_NAME.SIZES]: [initialData[PRODUCT_FIELD_NAME.SIZES]],
    [PRODUCT_FIELD_NAME.COLORS]: [initialData[PRODUCT_FIELD_NAME.COLORS]],
    [PRODUCT_FIELD_NAME.PROGRAMS]: [initialData[PRODUCT_FIELD_NAME.PROGRAMS]],
    [PRODUCT_FIELD_NAME.TYPE]: 0,
    [PRODUCT_FIELD_NAME.NAME]: '',
    [PRODUCT_FIELD_NAME.MODIFIER]: '',
    [PRODUCT_FIELD_NAME.DESCRIPTION]: '',
    [PRODUCT_FIELD_NAME.MATERIAL]: '',
    [PRODUCT_FIELD_NAME.DISCOUNT]: 0,
    [PRODUCT_FIELD_NAME.COMPLEXITY]: 1,
    [PRODUCT_FIELD_NAME.COUNT]: 0,
    [PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_PRICE]: 0,
    [PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_FILE]: null,
  });

  //--------------------------------------------------------------------------

  return (
    <CreateProductComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      initialData={initialData}
      selectOptionsData={SELECT_OPTIONS_DATA}
      //-------------
      initialValues={initialValues()}
      onSubmitForm={onSubmitForm}
      validation={createProuctValidation}
      //-------------
      setImage={setImage}
      removeImage={removeImage}
      changeImage={changeImage}
    />
  );
}
