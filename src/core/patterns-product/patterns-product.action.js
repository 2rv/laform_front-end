import { httpRequest } from '../../main/http';
import { PATTERNS_PRODUCT_API } from './patterns-product.constant';
import { PATTERNS_PRODUCT_ACTION_TYPE } from './patterns-product.type';
import { performPatternProductData } from './patterns-product.convert';

export function patternProductUploadData(currentLang, id) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_UPLOAD.TYPE,
        url: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_UPLOAD.ENDPOINT(
          currentLang,
          id,
        ),
      });
      const data = performPatternProductData(response.data);
      dispatch({
        type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
