import { httpRequest } from '../../main/http';
import { MASTER_CLASS_PRODUCT_API } from './master-class-product.constant';
import { MASTER_CLASS_PRODUCT_ACTION_TYPE } from './master-class-product.type';
import { performMasterClassProductData } from './master-class-product.convert';
import { BASKET_STORE_NAME } from '../basket';

export function masterClassProductUploadData(currentLang, id) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.TYPE,
        url: MASTER_CLASS_PRODUCT_API.MASTER_CLASS_PRODUCT_UPLOAD.ENDPOINT(
          currentLang,
          id,
        ),
      });
      const data = performMasterClassProductData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_SUCCESS,
        data: data,
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
