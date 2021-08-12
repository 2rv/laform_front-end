import { httpRequest } from '../../main/http';
import { MY_PURCHASES_API } from './my-purchases.constant';
import { MY_PURCHASES_ACTION_TYPE } from './my-purchases.type';

export function myPurchasesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MY_PURCHASES_API.MY_PURCHASES_UPLOAD.TYPE,
        url: MY_PURCHASES_API.MY_PURCHASES_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
