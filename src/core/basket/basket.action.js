import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE } from './basket.type';

export function basketUploadData() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.BASKET_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: BASKET_API.BASKET_UPLOAD.TYPE,
        url: BASKET_API.BASKET_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: BASKET_ACTION_TYPE.BASKET_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.BASKET_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
