import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { createElectronicPatternPreUploadData } from './patterns-create-electronic.action';
import { CreateElectronicPatternComponent } from './patterns-create-electronic.component';
import { ELECTRONIC_PATTERN_STORE_NAME } from './patterns-create-electronic.constant';
import { ELECTRONIC_PATTERN_FIELD_NAME } from './patterns-create-electronic.type';
import { formValidation } from './patterns-create-electronic.validation';

export function CreateElectronicPatternContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ELECTRONIC_PATTERN_STORE_NAME].createElectronicPattern,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (formValues) => {
    dispatch(createElectronicPatternPreUploadData(formValues));
  };

  const initialValues = () => ({
    [ELECTRONIC_PATTERN_FIELD_NAME.NAME]: '',
    [ELECTRONIC_PATTERN_FIELD_NAME.DESCRIPTION]: '',
    [ELECTRONIC_PATTERN_FIELD_NAME.TYPE]: 0,
    [ELECTRONIC_PATTERN_FIELD_NAME.MODIFIER]: '',
    [ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT]: 0,
    [ELECTRONIC_PATTERN_FIELD_NAME.CATEGORIES]: [],
    [ELECTRONIC_PATTERN_FIELD_NAME.IMAGES]: [],

    [ELECTRONIC_PATTERN_FIELD_NAME.MATERIAL]: '',
    [ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY]: 1,
    [ELECTRONIC_PATTERN_FIELD_NAME.SIZES]: [initialSizes],
    [ELECTRONIC_PATTERN_FIELD_NAME.RECOMMENDATIONS]: [],
  });
  const initialSizes = {
    [ELECTRONIC_PATTERN_FIELD_NAME.SIZE_NAME]: '',
    [ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE]: 0,
    [ELECTRONIC_PATTERN_FIELD_NAME.FILE]: undefined,
  };

  //--------------------------------------------------------------------------

  return (
    <CreateElectronicPatternComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      initialValues={initialValues()}
      initialSizes={initialSizes}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
