import { httpRequest } from '../../main/http';
import { SEWING_GOODS_PAGE_API } from './sewing-goods-page.constant';
import { SEWING_GOODS_PAGE_ACTION_TYPE } from './sewing-goods-page.type';
import { convertSewingGoodData } from './sewing-goods-page.convert';

export function sewingGoodsPageUploadData(id) {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_PAGE_API.SEWING_GOODS_PAGE_UPLOAD.TYPE,
        url: SEWING_GOODS_PAGE_API.SEWING_GOODS_PAGE_UPLOAD.ENDPOINT(id),
      });

      dispatch({
        type: SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_SUCCESS,
        payload: convertSewingGoodData(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
