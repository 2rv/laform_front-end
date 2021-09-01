import {
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
import { createMasterClassPreUploadData } from './master-class-create.action';
import { formValidation } from './master-class-create.validation';

export function CreateMasterClassContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_MASTER_CLASS_STORE_NAME].createMasterClass,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (formValues) => {
    console.log(formValues);
    // dispatch(createMasterClassPreUploadData(formValues));
  };

  const initialValues = () => ({
    [CREATE_MASTER_CLASS_FIELD_NAME.NAME]: '',
    [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]: '',
    [CREATE_MASTER_CLASS_FIELD_NAME.TYPE]: 0,
    [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]: '',
    [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]: 0,
    [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]: [],
    [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]: [],
    [CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS]: [programsInit],
  });

  const programsInit = {
    [CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_NAME]: '',
    [CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE]: 0,
  };

  return (
    <CreateMasterClassComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      programsInit={programsInit}
      //-------------
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
