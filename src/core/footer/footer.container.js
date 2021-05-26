import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import {
  SUBSCRIBE_STORE_NAME,
  subscribeFormUploadData,
} from '../../lib/common/subscribe';

import { FooterComponent } from './footer.component';
import { SUBSCRIBE_FIELD_NAME, SUBSCRIBE_FORM_FIELD_NAME } from './footer.type';

export function FooterContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[SUBSCRIBE_STORE_NAME]);

  const subscribeFormSubmit = (values) => {
    dispatch(subscribeFormUploadData(values));
  };

  const subscribeFormGetInitialValue = () => ({
    [SUBSCRIBE_FIELD_NAME.EMAIL]: '',
  });

  return (
    <FooterComponent
      isPending={isRequestPending(state.subscribeForm)}
      errorMessage={getRequestErrorMessage(state.subscribeForm)}
      isSuccess={isRequestSuccess(state.subscribeForm)}
      isError={isRequestError(state.subscribeForm)}
      initialValue={subscribeFormGetInitialValue()}
      // validation={loginFormValidation}
      onSubmitForm={subscribeFormSubmit}
      fieldName={SUBSCRIBE_FORM_FIELD_NAME}
    />
  );
}
