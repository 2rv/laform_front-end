import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { FOOTER_STORE_NAME } from './footer.constant';
import { SUBSCRIBE_FIELD_NAME, SUBSCRIBE_FORM_FIELD_NAME } from './footer.type';
import { FooterComponent } from './footer.component';
import { subscribeFormUploadData } from './footer.action';
import { parseSubscribeData } from './footer.convert';
import { subscribeFormValidation } from './footer.validation';

export function FooterContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[FOOTER_STORE_NAME]);

  const subscribeFormSubmit = (values) => {
    const data = parseSubscribeData(values);

    dispatch(subscribeFormUploadData(data));
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
      validation={subscribeFormValidation}
      onSubmitForm={subscribeFormSubmit}
      fieldName={SUBSCRIBE_FORM_FIELD_NAME}
    />
  );
}
