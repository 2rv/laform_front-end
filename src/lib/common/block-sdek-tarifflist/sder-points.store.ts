import {
  SdekTariffListType,
  SDEK_TARIFFLIST_ACTION_TYPE,
} from './sdek-tarifflist.type';

const initialState: SdekTariffListType = {
  sdekTariffList: [],
  sdekTariff: {},
  pending: false,
  errorMessage: undefined,
};

export function sdekTariffListStore(state = initialState, action: any) {
  switch (action.type) {
    case SDEK_TARIFFLIST_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        errorMessage: undefined,
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.SUCCCESS:
      return {
        ...state,
        sdekTariffList: action.data,
        pending: false,
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_PENDING:
      return {
        ...state,
        pending: true,
        errorMessage: undefined,
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_SUCCCESS:
      return {
        ...state,
        sdekTariff: action.data,
        pending: false,
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
}
