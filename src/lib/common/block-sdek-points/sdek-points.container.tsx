import { useEffect, useReducer } from 'react';
import { SdekPointsComponent } from './sdek-points.component';
import { getPickUpPoint } from './sdek-points.action';
import {
  SdekPointsContainerProps,
  basicSdekPoints,
  sdekPointsStateType,
  SDEK_POINTS_ACTION_TYPE,
  sdekPointsActionType,
} from './sdek-points.type';

const initialState: sdekPointsStateType = {
  pending: false,
  error: '',
  sdekPoints: [],
};

export function sdekPointsReducer(
  state: sdekPointsStateType,
  action: sdekPointsActionType,
) {
  switch (action.type) {
    case SDEK_POINTS_ACTION_TYPE.PEINDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case SDEK_POINTS_ACTION_TYPE.SUCCCESS:
      return {
        ...state,
        pending: false,
        sdekPoints: action.data,
      };
    case SDEK_POINTS_ACTION_TYPE.ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}

export function SdekPointsContainer(props: SdekPointsContainerProps) {
  const { data, value, onChange, name, error } = props;
  const [state, setState] = useReducer(sdekPointsReducer, initialState);

  useEffect(() => {
    if (data && data.kladr_id) {
      getPickUpPoint(data.kladr_id)(setState);
    }
  }, [data?.kladr_id]);

  function handleChange(value: basicSdekPoints | undefined) {
    onChange(name, value);
  }

  return (
    <SdekPointsComponent
      error={error}
      value={value}
      onChange={handleChange}
      state={state}
      isDisabled={!data?.kladr_id}
    />
  );
}
