import { httpRequest } from '../../main/http';
import { SEWING_GOODS_API } from './sewing-goods.constant';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';
import { performSewingGoodsData } from './sewing-goods.convert';
import { BASKET_STORE_NAME } from '../basket';

export function sewingGoodsUploadData(currentLang, page, size) {
  return async (dispatch, getState) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
        url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT(currentLang, page, size),
      });
      const data = performSewingGoodsData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        payload: {
          products: data,
          totalCount: response.headers['total-records'],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sewingGoodsUpdateData(currentLang, id, body) {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_API.SEWING_GOODS_UPDATE.TYPE,
        url: SEWING_GOODS_API.SEWING_GOODS_UPDATE.ENDPOINT(id),
        data: { sewingProduct: body },
      });

      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_SUCCESS,
      });
      dispatch(sewingGoodsUploadData(currentLang));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
