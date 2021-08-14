import { httpRequest } from '../../main/http';
import { SEWING_GOODS_PAGE_API } from './sewing-goods-page.constant';
import { SEWING_GOODS_PAGE_ACTION_TYPE } from './sewing-goods-page.type';

export function sewingGoodsPageUploadData() {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SEWING_GOODS_PAGE_API.SEWING_GOODS_PAGE_UPLOAD.TYPE,
        url: SEWING_GOODS_PAGE_API.SEWING_GOODS_PAGE_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_SUCCESS,
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
