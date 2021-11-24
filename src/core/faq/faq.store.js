import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { FAQ_ACTION_TYPE } from './faq.type';

const initialState = {
  faq: initRequestState(),
  save: initRequestState(),
};

export function faqStore(state = initialState, action) {
  switch (action.type) {
    case FAQ_ACTION_TYPE.FAQ_DATA_SAVE_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case FAQ_ACTION_TYPE.FAQ_DATA_SAVE_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case FAQ_ACTION_TYPE.FAQ_DATA_SAVE_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    case FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_PENDING:
      return {
        ...state,
        faq: setRequestPending(state.faq),
      };
    case FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        faq: setRequestSuccess(state.faq, action.data),
      };
    case FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_ERROR:
      return {
        ...state,
        faq: setRequestError(state.faq, action.errorMessage),
      };
    default:
      return state;
  }
}
