import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';

const initialState = {
  cityCode: initRequestState(),
};

export function findAdressStore(state = initialState, action: any) {
  switch (action.type) {
    case FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_PENDING:
      return {
        ...state,
        cityCode: setRequestPending(state.cityCode),
      };
    case FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_SUCCESS:
      return {
        ...state,
        cityCode: setRequestSuccess(state.cityCode, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_ERROR:
      return {
        ...state,
        cityCode: setRequestError(state.cityCode, action.errorMessage),
      };
    default:
      return state;
  }
}
