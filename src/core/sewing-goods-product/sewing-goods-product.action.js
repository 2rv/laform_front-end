import { httpRequest } from '../../main/http';
import { SEWING_GOODS_PRODUCT_API } from './sewing-goods-product.constant';
import { SEWING_GOODS_PRODUCT_ACTION_TYPE } from './sewing-goods-product.type';

export function sewingGoodsProductUploadData() {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SEWING_GOODS_PRODUCT_API.SEWING_GOODS_PRODUCT_UPLOAD.TYPE,
        url: SEWING_GOODS_PRODUCT_API.SEWING_GOODS_PRODUCT_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
