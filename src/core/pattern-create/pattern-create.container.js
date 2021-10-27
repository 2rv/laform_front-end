import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { formValidation } from './pattern-create.validation';
import {
  createPatternPreUploadData,
  updatePatternProductPreUpload,
  patternLoadData,
} from './pattern-create.action';
import { CreatePatternComponent } from './pattern-create.component';
import { CREATE_PATTERN_STORE_NAME } from './pattern-create.constant';
import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';
import { getQuery } from 'src/main/navigation';
import { useEffect } from 'react';

export function CreatePatternContainer() {
  const dispatch = useDispatch();

  const patternProductId = getQuery('id');

  const { state, pageLoading, productState, updatePatternState } = useSelector(
    (state) => ({
      state: state[CREATE_PATTERN_STORE_NAME].createPattern,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      productState: state[CREATE_PATTERN_STORE_NAME].product,
      updatePatternState: state[CREATE_PATTERN_STORE_NAME].updatePattern,
    }),
  );

  useEffect(() => {
    if (Boolean(patternProductId)) {
      dispatch(patternLoadData(patternProductId));
    }
  }, [patternProductId]);

  const onSubmit = (formValues) => {
    if (Boolean(patternProductId)) {
      dispatch(updatePatternProductPreUpload(patternProductId, formValues));
    } else {
      dispatch(createPatternPreUploadData(formValues));
    }
  };

  const initialValues = () => {
    const data = getRequestData(productState, {
      [CREATE_PATTERN_FIELD_NAME.NAME]: '',
      [CREATE_PATTERN_FIELD_NAME.MODIFIER]: '',
      [CREATE_PATTERN_FIELD_NAME.MATERIAL]: '',
      [CREATE_PATTERN_FIELD_NAME.COMPLEXITY]: 1,
      [CREATE_PATTERN_FIELD_NAME.CATEGORIES]: [],
      [CREATE_PATTERN_FIELD_NAME.DESCRIPTION]: '',
      [CREATE_PATTERN_FIELD_NAME.IMAGES]: [],
      [CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS]: [],
      [CREATE_PATTERN_FIELD_NAME.COUNT]: '',
      [CREATE_PATTERN_FIELD_NAME.IS_COUNT]: false,
      [CREATE_PATTERN_FIELD_NAME.FILE]: undefined,
      [CREATE_PATTERN_FIELD_NAME.TYPE]: 2,
      [CREATE_PATTERN_FIELD_NAME.PRICE]: '',
      [CREATE_PATTERN_FIELD_NAME.DISCOUNT]: '',
      [CREATE_PATTERN_FIELD_NAME.OPTION_TYPE]: 0,
      [CREATE_PATTERN_FIELD_NAME.OPTIONS]: [],
    });
    return data;
  };
  const initialOption = {
    [CREATE_PATTERN_FIELD_NAME.OPTION_SIZE]: '',
    [CREATE_PATTERN_FIELD_NAME.OPTION_PRICE]: '',
    [CREATE_PATTERN_FIELD_NAME.OPTION_DISCOUNT]: '',
    [CREATE_PATTERN_FIELD_NAME.OPTION_COUNT]: '',
    [CREATE_PATTERN_FIELD_NAME.OPTION_FILE]: undefined,
  };
  //--------------------------------------------------------------------------

  return (
    <CreatePatternComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      initialOption={initialOption}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
      isEdit={Boolean(patternProductId)}
      updateIsPending={isRequestPending(updatePatternState)}
      updateIsError={isRequestError(updatePatternState)}
      updateIsSuccess={isRequestSuccess(updatePatternState)}
      updateErrorMessage={getRequestErrorMessage(updatePatternState)}
    />
  );
}
