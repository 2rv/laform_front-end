import { httpRequest } from '../../main/http';
import { SEWING_GOODS_API } from './sewing-goods.constant';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';
import { performSewingGoodsData } from './sewing-goods.convert';

export function sewingGoodsUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
        url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT(currentLang),
      });
      const data = performSewingGoodsData(response.data);
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: data,
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
