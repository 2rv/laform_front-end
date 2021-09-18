import { httpRequest } from '../../main/http';
import { SEWING_GOODS_PRODUCT_API } from './sewing-goods-product.constant';
import { SEWING_GOODS_PRODUCT_ACTION_TYPE } from './sewing-goods-product.type';
import { performSewingGoodsProductData } from './sewing-goods-product.convert';
import { BASKET_STORE_NAME } from '../basket';

export function sewingGoodsProductUploadData(currentLang, id) {
  return async (dispatch, getState) => {
    dispatch({
      type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_PRODUCT_API.SEWING_GOODS_PRODUCT_UPLOAD.TYPE,
        url: SEWING_GOODS_PRODUCT_API.SEWING_GOODS_PRODUCT_UPLOAD.ENDPOINT(
          currentLang,
          id,
        ),
      });
      const data = performSewingGoodsProductData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );

      dispatch({
        type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_SUCCESS,
        data: data,
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
