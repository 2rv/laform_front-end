import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SLIDER_EDIT_ACTION_TYPE } from './slider-edit.type';

const initialState = {
  sliderEdit: initRequestState(),
};

export function sliderEditStore(state = initialState, action) {
  switch (action.type) {
    case SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING:
      return {
        ...state,
        sliderEdit: setRequestPending(state.sliderEdit),
      };
    case SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_SUCCESS:
      return {
        ...state,
        sliderEdit: setRequestSuccess(state.sliderEdit, action.sliderEdit),
      };
    case SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_ERROR:
      return {
        ...state,
        sliderEdit: setRequestError(state.sliderEdit, action.errorMessage),
      };
    case SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPDATE_IMAGE:
      return {
        ...state,
        sliderEdit: setRequestSuccess(state.sliderEdit, { ...state.sliderEdit.data, image: action.image }),
      };
    default:
      return state;
  }
}
