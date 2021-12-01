import { SDEK_POINTS_ACTION_TYPE } from './sdek-points.type';

export interface sdekPointsType {
  sdekPoints: any[];
  pending: true | false;
  errorMessage?: string;
}

const initialState: sdekPointsType = {
  sdekPoints: [],
  pending: false,
  errorMessage: undefined,
};

export function sdekPointsStore(state = initialState, action: any) {
  switch (action.type) {
    case SDEK_POINTS_ACTION_TYPE.PEINDING:
      return {
        ...state,
        pending: true,
        errorMessage: undefined,
      };
    case SDEK_POINTS_ACTION_TYPE.SUCCCESS:
      return {
        ...state,
        sdekPoints: action.data,
        pending: false,
      };
    case SDEK_POINTS_ACTION_TYPE.ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
}
