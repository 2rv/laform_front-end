import { httpRequest } from '../../main/http';
import { CREATE_PRODUCT_API } from './create-product.constant';
import { CREATE_PRODUCT_ACTION_TYPE } from './create-product.type';

export function createProductUploadData() {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_PRODUCT_API.CREATE_PRODUCT_UPLOAD.TYPE,
        url: CREATE_PRODUCT_API.CREATE_PRODUCT_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
