import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { formValidation } from './patterns-create-print.validation';
import { createPrintPatternPreUploadData } from './patterns-create-print.action';
import { CreatePrintPatternComponent } from './patterns-create-print.component';
import { CREATE_PRINT_PATTERN_STORE_NAME } from './patterns-create-print.constant';
import { PRINT_PATTERN_FIELD_NAME } from './patterns-create-print.type';

export function CreatePrintPatternContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_PRINT_PATTERN_STORE_NAME].createPrintPattern,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (formValues) => {
    dispatch(createPrintPatternPreUploadData(formValues));
  };

  const initialValues = () => ({
    [PRINT_PATTERN_FIELD_NAME.NAME]: '',
    [PRINT_PATTERN_FIELD_NAME.MODIFIER]: '',
    [PRINT_PATTERN_FIELD_NAME.MATERIAL]: '',
    [PRINT_PATTERN_FIELD_NAME.COMPLEXITY]: 1,
    [PRINT_PATTERN_FIELD_NAME.CATEGORIES]: [],
    [PRINT_PATTERN_FIELD_NAME.DESCRIPTION]: '',
    [PRINT_PATTERN_FIELD_NAME.IMAGES]: [],
    [PRINT_PATTERN_FIELD_NAME.OPTIONS]: [productOption],
    [PRINT_PATTERN_FIELD_NAME.RECOMMENDATIONS]: [],
  });
  const productOption = {
    [PRINT_PATTERN_FIELD_NAME.OPTION_SIZE]: '',
    [PRINT_PATTERN_FIELD_NAME.OPTION_PRICE]: 0,
    [PRINT_PATTERN_FIELD_NAME.OPTION_DISCOUNT]: 0,
  };
  //--------------------------------------------------------------------------

  return (
    <CreatePrintPatternComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      productOption={productOption}
      //-------------
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
