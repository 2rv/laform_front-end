import { httpRequest } from '../../main/http';
import { compilationsPerform } from './home.convert';
import { HOME_API } from './home.constant';
import { HOME_ACTION_TYPE } from './home.type';

export function compilationLoadData(isAuth) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_PENDING,
    });
    try {
      const response = isAuth
        ? await httpRequest({
            method: HOME_API.COMPILATION_LOAD_DATA_AUTH.TYPE,
            url: HOME_API.COMPILATION_LOAD_DATA_AUTH.ENDPOINT,
          })
        : await httpRequest({
            method: HOME_API.COMPILATION_LOAD_DATA.TYPE,
            url: HOME_API.COMPILATION_LOAD_DATA.ENDPOINT,
          });
      dispatch({
        type: HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_SUCCESS,
        data: compilationsPerform(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
