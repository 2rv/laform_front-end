import { useEffect, useReducer } from 'react';
import { SdekTariffListComponent } from './sdek-tarifflist.component';
import { getTariffList, getTariff } from './sdek-tarifflist.action';
import {
  basicTariffType,
  SdekTariffListContainerProps,
  SdekTariffListStateType,
  SdekTariffListActionType,
  SDEK_TARIFFLIST_ACTION_TYPE,
} from './sdek-tarifflist.type';

const initialState: SdekTariffListStateType = {
  pending: false,
  error: '',
  sdekTariffList: [],
  sdekTariff: undefined,
};

export function sdekTariffListReducer(
  state: SdekTariffListStateType,
  action: SdekTariffListActionType,
) {
  switch (action.type) {
    case SDEK_TARIFFLIST_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
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
        error: action.error,
      };

    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_SUCCCESS:
      return {
        ...state,
        sdekTariff: action.basicTariff,
        pending: false,
      };
    case SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}

export function SdekTariffListContainer(props: SdekTariffListContainerProps) {
  const { data, value, onChange, name, basketCount, error } = props;
  const [state, setState] = useReducer(sdekTariffListReducer, initialState);

  useEffect(() => {
    if (data?.location?.city_code) {
      getTariffList(data?.location?.city_code, basketCount)(setState);
    }
  }, [data?.location]);

  useEffect(() => {
    onChange(name, state.sdekTariff);
  }, [state.sdekTariff]);

  function handleChange(value: basicTariffType) {
    if (data) {
      getTariff(data?.location?.city_code, value, basketCount)(setState);
    }
  }
  function handleClear() {
    onChange(name, {});
  }
  return (
    <SdekTariffListComponent
      error={error}
      value={value}
      onChange={handleChange}
      onClear={handleClear}
      state={state}
      isDisabled={!data?.location}
    />
  );
}
