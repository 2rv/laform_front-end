import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  basicSdekPoints,
  sdekPointsActionType,
  SDEK_POINTS_ACTION_TYPE,
} from './sdek-points.type';

export function getPickUpPoint(kladr_id: string) {
  return async (dispatch: Dispatch<sdekPointsActionType>) => {
    dispatch({
      type: SDEK_POINTS_ACTION_TYPE.PEINDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'sdek/city-code/' + kladr_id,
      });

      const result: basicSdekPoints[] = response.data.map(
        (item: basicSdekPoints) => {
          item.label = item.location.address_full.toLowerCase().trim();
          return item;
        },
      );

      dispatch({
        type: SDEK_POINTS_ACTION_TYPE.SUCCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SDEK_POINTS_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
