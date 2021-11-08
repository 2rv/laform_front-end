import { httpRequest } from '../../main/http';
import { FEEDBACK_API } from './feedback.constant';
import { FEEDBACK_ACTION_TYPE } from './feedback.type';

export function sendFeedback(data) {
  return async (dispatch) => {
    dispatch({
      type: FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: FEEDBACK_API.SEND_FEEDBACK.TYPE,
        url: FEEDBACK_API.SEND_FEEDBACK.ENDPOINT,
        data,
      });

      dispatch({
        type: FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FEEDBACK_ACTION_TYPE.FEEDBACK_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
