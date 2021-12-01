import { httpRequest } from 'src/main/http';
import { GET_CITY_CODE } from './sdek-points.constant';
import { sdekDataProps, SDEK_POINTS_ACTION_TYPE } from './sdek-points.type';

export function getPickUpPoint(kladr_id: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: SDEK_POINTS_ACTION_TYPE.PEINDING,
    });
    try {
      const response = await httpRequest({
        method: GET_CITY_CODE.TYPE,
        url: GET_CITY_CODE.URL + kladr_id,
      });

      const result = response.data.map((item: sdekDataProps) => {
        item.label = item.location.address_full;
        return item;
      });

      dispatch({
        type: SDEK_POINTS_ACTION_TYPE.SUCCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SDEK_POINTS_ACTION_TYPE.ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
