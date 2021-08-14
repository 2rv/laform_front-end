import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { FAQ_PAGE_ACTION_TYPE } from './faq-page.type';

const initialState = {
  faqPage: initRequestState(),
};

export function faqPageStore(state = initialState, action) {
  switch (action.type) {
    case FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_PENDING:
      return {
        ...state,
        faqPage: setRequestPending(state.faqPage),
      };
    case FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        faqPage: setRequestSuccess(state.faqPage),
      };
    case FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_ERROR:
      return {
        ...state,
        faqPage: setRequestError(state.faqPage, action.errorMessage),
      };
    default:
      return state;
  }
}
