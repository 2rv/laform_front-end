import { httpRequest } from '../../main/http';
import { MASTER_CLASS_PRODUCT_API } from './master-class-product.constant';
import { MASTER_CLASS_PRODUCT_ACTION_TYPE } from './master-class-product.type';

export function masterClassProductUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.TYPE,
        url: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
