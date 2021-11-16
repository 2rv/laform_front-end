import { httpRequest } from 'src/main/http';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';
import { FIND_ADRESS_API } from './find-adress.constant';

export function findAdressAction(value: string, currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_PENDING,
    });
    try {
      const response = await httpRequest({
        url: FIND_ADRESS_API.URL,
        method: FIND_ADRESS_API.TYPE,
        data: { query: value, language: currentLang },
      });
      console.log(response.data);
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_SUCCESS,
        data: response.data?.suggestions?.map((item: any) => item.value),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
