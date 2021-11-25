import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';
import { CREATE_MASTER_CLASS_STORE_NAME } from './master-class-create.constant';
import { CreateMasterClassComponent } from './master-class-create.component';
import { formValidation } from './master-class-create.validation';
import {
  createMasterClassPreUploadData,
  masterClassDelete,
  masterClassLoadData,
  updateMasterClassPreUpload,
} from './master-class-create.action';
import { getQuery } from 'src/main/navigation';
import { useEffect } from 'react';

export function CreateMasterClassContainer() {
  const dispatch = useDispatch();
  const masterClassId = getQuery('id');

  const {
    state,
    pageLoading,
    productState,
    updateMasterClassState,
    deleteMasterClassState,
  } = useSelector((state) => ({
    state: state[CREATE_MASTER_CLASS_STORE_NAME].createMasterClass,
    productState: state[CREATE_MASTER_CLASS_STORE_NAME].product,
    updateMasterClassState:
      state[CREATE_MASTER_CLASS_STORE_NAME].updateMasterClass,
    deleteMasterClassState:
      state[CREATE_MASTER_CLASS_STORE_NAME].deleteMasterClass,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    if (Boolean(masterClassId)) {
      dispatch(masterClassLoadData(masterClassId));
    }
  }, [masterClassId]);

  const onSubmit = (formValues) => {
    if (Boolean(masterClassId)) {
      dispatch(updateMasterClassPreUpload(masterClassId, formValues));
    } else {
      dispatch(createMasterClassPreUploadData(formValues));
    }
  };

  const deleteProduct = () => {
    dispatch(masterClassDelete(masterClassId));
  };

  const initialValues = () => {
    const data = getRequestData(productState, {
      [CREATE_MASTER_CLASS_FIELD_NAME.NAME]: '',
      [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]: '',
      [CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE]: '',
      [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]: [],
      [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]: '',
      [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]: [],
      [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]: 0,
      [CREATE_MASTER_CLASS_FIELD_NAME.PRICE]: 0,
      [CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: [],
      [CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE]: null,
      [CREATE_MASTER_CLASS_FIELD_NAME.DELETED]: false,
    });
    return data;
  };
  return (
    <CreateMasterClassComponent
      pageLoading={pageLoading}
      isEdit={Boolean(masterClassId)}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      updateIsPending={isRequestPending(updateMasterClassState)}
      updateIsError={isRequestError(updateMasterClassState)}
      updateIsSuccess={isRequestSuccess(updateMasterClassState)}
      updateErrorMessage={getRequestErrorMessage(updateMasterClassState)}
      //-------------
      deleteProduct={deleteProduct}
      deleteIsPending={isRequestPending(deleteMasterClassState)}
      deleteIsError={isRequestError(deleteMasterClassState)}
      deleteErrorMessage={getRequestErrorMessage(deleteMasterClassState)}
      //-------------
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
