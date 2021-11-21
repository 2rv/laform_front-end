import { httpRequest } from 'src/main/http';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';
import { FIND_ADRESS_API } from './find-adress.constant';

export function getCountry(value: string, currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_PENDING,
    });
    try {
      const response = await httpRequest({
        url: FIND_ADRESS_API.URL,
        method: FIND_ADRESS_API.TYPE,
        data: {
          query: value,
          count: 20,
          language: currentLang,
          from_bound: { value: 'country' },
          to_bound: { value: 'country' },
          locations: [
            {
              country_iso_code: '*',
            },
          ],
        },
      });
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_SUCCESS,
        data: response.data.suggestions,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getRegion(value: string, country: string, currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_PENDING,
    });
    try {
      const response = await httpRequest({
        url: FIND_ADRESS_API.URL,
        method: FIND_ADRESS_API.TYPE,
        data: {
          query: value,
          count: 20,
          language: currentLang,
          from_bound: { value: 'region' },
          to_bound: { value: 'region' },
          locations: [
            {
              country: country,
            },
          ],
        },
      });
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_SUCCESS,
        data: response.data.suggestions,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getCity(value: string, country: string, currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_PENDING,
    });
    try {
      const response = await httpRequest({
        url: FIND_ADRESS_API.URL,
        method: FIND_ADRESS_API.TYPE,
        data: {
          query: 'Ле',
          locations: [
            {
              region_fias_id: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
            },
          ],
          from_bound: {
            value: 'city',
          },
          to_bound: {
            value: 'city',
          },
          restrict_value: true,
        },
      });
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_SUCCESS,
        data: response.data.suggestions,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.FIND_REGION_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
