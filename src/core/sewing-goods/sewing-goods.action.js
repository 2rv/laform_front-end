import { httpRequest } from '../../main/http';
import { SEWING_GOODS_API } from './sewing-goods.constant';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';
import { BASKET_STORE_NAME } from '../basket';
import { convertSewingGoodProducts } from 'src/lib/common/product-converters';

export function sewingGoodsUploadData(isAuth, query) {
  return async (dispatch, getState) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.ENDPOINT(query),
          })
        : await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT(query),
          });
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: convertSewingGoodProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
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
