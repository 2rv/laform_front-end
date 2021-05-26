import { Dispatch } from 'redux';
import { Method } from 'axios';

import { httpRequest } from 'src/main/http';

import { SUBSCRIBE_API } from './subscribe.constant';
import { SubscribeDto, SUBSCRIBE_ACTION_TYPE } from './subscribe.type';
import { parseSubscribeData } from './subscribe.convert';

export function subscribeFormUploadData(data: SubscribeDto) {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SUBSCRIBE_ACTION_TYPE.UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SUBSCRIBE_API.SUBSCRIBE_FORM_UPLOAD.METHOD as Method,
        url: SUBSCRIBE_API.SUBSCRIBE_FORM_UPLOAD.ENDPOINT,
        data: parseSubscribeData(data),
      });

      dispatch({
        type: SUBSCRIBE_ACTION_TYPE.UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SUBSCRIBE_ACTION_TYPE.UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
