import { useEffect, useState } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { createProductUploadData } from './create-product.action';
import { CreateProductComponent } from './create-product.component';
import { CREATE_PRODUCT_STORE_NAME } from './create-product.constant';
import { PRODUCT_FIELD_NAME } from './create-product.type';
import { createProuctValidation } from './create-product.validation';

export function CreateProductContainer() {
  const dispatch = useDispatch();
  const [imagesData, setImages] = useState([]);
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[CREATE_PRODUCT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  useEffect(() => {
    if (user && user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
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
    [PRODUCT_FIELD_NAME.NAME]: '',
    [PRODUCT_FIELD_NAME.MODIFIER]: '',
    [PRODUCT_FIELD_NAME.DESCRIPTION]: '',
    [PRODUCT_FIELD_NAME.PRICE]: '',
    [PRODUCT_FIELD_NAME.DISCOUNT]: '',
  });
  const onSubmitForm = (values) => {
    console.log(values); // значения формы
    console.log(imagesData); // фотки товара
  };

  const pickImage = ({ target: { files } }) => {
    if (files[0].type.split('/')[0] !== 'image') {
      alert('Please upload only image');
      return;
    }

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const copyImages = [...imagesData];
        copyImages.push(reader?.result);
        setImages(copyImages);
      };
      reader.readAsDataURL(files[0]);
    }
  };
  const deleteImage = (index) => {
    const copyImages = [...imagesData];
    copyImages.splice(index, 1);
    setImages(copyImages);
  };
  return (
    <CreateProductComponent
      isPending={isRequestPending(state.createProduct)}
      isError={isRequestError(state.createProduct)}
      isSuccess={isRequestSuccess(state.createProduct)}
      errorMessage={getRequestErrorMessage(state.createProduct)}
      pageLoading={pageLoading}
      initialCategoriesItem={initialCategoriesItem}
      initialPositionsItem={initialPositionsItem}
      initialOptionsItem={initialOptionsItem}
      initialValues={initialValues()}
      onSubmitForm={onSubmitForm}
      validation={createProuctValidation}
      pickImage={pickImage}
      imagesData={imagesData}
      deleteImage={deleteImage}
    />
  );
}
