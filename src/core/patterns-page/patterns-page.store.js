import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PATTERNS_PAGE_ACTION_TYPE } from './patterns-page.type';

const initialState = {
  product: initRequestState(),
  productPdf: initRequestState(),
};

export function patternsPageStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.payload),
      };
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_PENDING:
      return {
        ...state,
        productPdf: setRequestPending(state.productPdf),
      };
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_SUCCESS:
      return {
        ...state,
        productPdf: setRequestSuccess(state.productPdf),
      };
    case PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_ERROR:
      return {
        ...state,
        productPdf: setRequestError(state.productPdf, action.errorMessage),
      };
    default:
      return state;
  }
}
