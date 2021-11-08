import { httpRequest } from '../../main/http';
import { MASTER_CLASS_PRODUCT_API } from './master-class-product.constant';
import { MASTER_CLASS_PRODUCT_ACTION_TYPE } from './master-class-product.type';
import { performMasterClassProductData } from './master-class-product.convert';

export function masterClassProductUploadData(currentLang, id, logged) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      const response = logged
        ? await httpRequest({
            method:
              MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD_AUTH.TYPE,
            url: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              id,
            ),
          })
        : await httpRequest({
            method: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.TYPE,
            url: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.ENDPOINT(
              currentLang,
              id,
            ),
          });
      dispatch({
        type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_SUCCESS,
        data: performMasterClassProductData(response.data),
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
