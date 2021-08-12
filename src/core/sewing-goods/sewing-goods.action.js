import { httpRequest } from '../../main/http';
import { SEWING_GOODS_API } from './sewing-goods.constant';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

export function sewingGoodsUploadData() {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
        url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
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
