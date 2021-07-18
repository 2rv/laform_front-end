import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SLIDER_ACTION_TYPE } from './slider.type';

const initialState = {
  slider: initRequestState(),
};

export function sliderStore(state = initialState, action) {
  switch (action.type) {
    case SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_PENDING:
      return {
        ...state,
        slider: setRequestPending(state.slider),
      };

    case SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        slider: setRequestSuccess(state.slider, action.data),
      };

    case SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_ERROR:
      return {
        ...state,
        slider: setRequestError(state.slider, action.errorMessage),
      };

    default:
      return state;
  }
}
