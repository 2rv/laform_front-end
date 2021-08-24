import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SLIDER_LIST_ACTION_TYPE } from './slider-list.type';

const initialState = {
  sliderList: initRequestState(),
};

export function sliderListStore(state = initialState, action) {
  switch (action.type) {
    case SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_PENDING:
      return {
        ...state,
        sliderList: setRequestPending(state.sliderList),
      };
    case SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_SUCCESS:
      return {
        ...state,
        sliderList: setRequestSuccess(state.sliderList, action.sliderList),
      };
    case SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_ERROR:
      return {
        ...state,
        sliderList: setRequestError(state.sliderList, action.errorMessage),
      };
    default:
      return state;
  }
}
