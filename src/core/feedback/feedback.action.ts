import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  FeedbackActionType,
  FeedbackValues,
  FEEDBACK_ACTION_TYPE,
} from './feedback.type';

export function createFeedbackAction(values: FeedbackValues) {
  return async (dispatch: Dispatch<FeedbackActionType>) => {
    dispatch({
      type: FEEDBACK_ACTION_TYPE.PENDING,
    });
    try {
      await httpRequest({
        method: 'POST',
        url: '/mail/send-feedback',
        data: values,
      });
      dispatch({
        type: FEEDBACK_ACTION_TYPE.SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FEEDBACK_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
