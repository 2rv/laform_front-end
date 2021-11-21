import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';

const initialState = {
  country: initRequestState(),
  region: initRequestState(),
  city: initRequestState(),
  area: initRequestState(),
  settlement: initRequestState(),
  street: initRequestState(),
  house: initRequestState(),
};

export function findAdressStore(state = initialState, action: any) {
  switch (action.type) {
    case FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_PENDING:
      return {
        ...state,
        country: setRequestPending(state.country),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_SUCCESS:
      return {
        ...state,
        country: setRequestSuccess(state.country, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_COUNTRY_ERROR:
      return {
        ...state,
        country: setRequestError(state.country, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_REGION_PENDING:
      return {
        ...state,
        region: setRequestPending(state.region),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_REGION_SUCCESS:
      return {
        ...state,
        region: setRequestSuccess(state.region, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_REGION_ERROR:
      return {
        ...state,
        region: setRequestError(state.region, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_CITY_PENDING:
      return {
        ...state,
        city: setRequestPending(state.city),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_CITY_SUCCESS:
      return {
        ...state,
        city: setRequestSuccess(state.city, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_CITY_ERROR:
      return {
        ...state,
        city: setRequestError(state.city, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_AREA_PENDING:
      return {
        ...state,
        area: setRequestPending(state.area),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_AREA_SUCCESS:
      return {
        ...state,
        area: setRequestSuccess(state.area, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_AREA_ERROR:
      return {
        ...state,
        area: setRequestError(state.area, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_SETTLEMENT_PENDING:
      return {
        ...state,
        settlement: setRequestPending(state.settlement),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_SETTLEMENT_SUCCESS:
      return {
        ...state,
        settlement: setRequestSuccess(state.settlement, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_SETTLEMENT_ERROR:
      return {
        ...state,
        settlement: setRequestError(state.settlement, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_STREET_PENDING:
      return {
        ...state,
        street: setRequestPending(state.street),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_STREET_SUCCESS:
      return {
        ...state,
        street: setRequestSuccess(state.street, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_STREET_ERROR:
      return {
        ...state,
        street: setRequestError(state.street, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.FIND_HOUSE_PENDING:
      return {
        ...state,
        house: setRequestPending(state.house),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_HOUSE_SUCCESS:
      return {
        ...state,
        house: setRequestSuccess(state.house, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_HOUSE_ERROR:
      return {
        ...state,
        house: setRequestError(state.house, action.errorMessage),
      };

    default:
      return state;
  }
}
