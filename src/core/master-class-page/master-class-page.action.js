import { httpRequest } from '../../main/http';
import { MASTER_CLASS_PAGE_API } from './master-class-page.constant';
import { MASTER_CLASS_PAGE_ACTION_TYPE } from './master-class-page.type';
import { convertPurchasedMasterClassData } from './master-class-page.convert';

export function purchasedMasterClassUploadData(id) {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASS_PAGE_API.MASTER_CLASS_DATA_UPLOAD.TYPE,
        url: MASTER_CLASS_PAGE_API.MASTER_CLASS_DATA_UPLOAD.ENDPOINT(id),
      });

      dispatch({
        type: MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_SUCCESS,
        data: convertPurchasedMasterClassData(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
