import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { FEEDBACK_ACTION_TYPE } from './feedback.type';

const initialState = {
  feedback: initRequestState(),
};

export function feedbackStore(state = initialState, action) {
  switch (action.type) {
    case FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_PENDING:
      return {
        ...state,
        feedback: setRequestPending(state.feedback),
      };
    case FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_SUCCESS:
      return {
        ...state,
        feedback: setRequestSuccess(state.feedback),
      };
    case FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_ERROR:
      return {
        ...state,
        feedback: setRequestError(
          state.feedback,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
