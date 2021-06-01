import { httpRequest } from '../../main/http';

import { FOOTER_API } from './footer.constant';
import { SUBSCRIBE_ACTION_TYPE } from './footer.type';
import { parseSubscribeData } from './footer.convert';

export function subscribeFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: FOOTER_API.SUBSCRIBE_FORM_UPLOAD.METHOD,
        url: FOOTER_API.SUBSCRIBE_FORM_UPLOAD.ENDPOINT,
        data: parseSubscribeData(data),
      });

      dispatch({
        type: SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
