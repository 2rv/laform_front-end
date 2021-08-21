import { httpRequest } from '../../main/http';
import { PROMOCODES_API } from './promocodes.constant';
import { PROMOCODES_ACTION_TYPE } from './promocodes.type';

export function promocodesUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PROMOCODES_API.PROMOCODES_LOAD_DATA.TYPE,
        url: PROMOCODES_API.PROMOCODES_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS,
        promocodes: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
