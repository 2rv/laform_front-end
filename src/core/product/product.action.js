import { httpRequest } from '../../main/http';
import { PRODUCT_API } from './product.constant';
import { PRODUCT_ACTION_TYPE } from './product.type';

export function productUploadData() {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: PRODUCT_API.PRODUCT_UPLOAD.TYPE,
        url: PRODUCT_API.PRODUCT_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
