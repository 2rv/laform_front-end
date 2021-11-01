import { httpRequest } from '../../main/http';
import { STATISTICS_API } from './statistics.constant';
import { STATISTICS_ACTION_TYPE } from './statistics.type';

export function LoadDataAction() {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.LOAD_DATA_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.LOAD_DATA.TYPE,
        url: STATISTICS_API.LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: STATISTICS_ACTION_TYPE.LOAD_DATA_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.LOAD_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
