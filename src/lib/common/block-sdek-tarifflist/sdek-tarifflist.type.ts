import { basicSdekPoints } from '../block-sdek-points';

export interface basicTariffType {
  label: string;
  delivery_mode: number;
  delivery_sum: number;
  period_max: number;
  period_min: number;
  tariff_code: number;
  tariff_description: string;
  tariff_name: string;
  weight_calc?: number;
  total_sum?: number;
  currency?: string;
}

export type SdekTariffListStateType = {
  sdekTariffList?: basicTariffType[];
  sdekTariff?: basicTariffType;
  pending: boolean;
  error?: string;
};
export type SdekTariffListActionType = {
  type: SDEK_TARIFFLIST_ACTION_TYPE;
  error?: string;
  data?: basicTariffType[];
  basicTariff?: basicTariffType;
};
export enum SDEK_TARIFFLIST_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCCESS = 'SUCCCESS',
  ERROR = 'ERROR',

  TARIFF_PENDING = 'TARIFF_PENDING',
  TARIFF_SUCCCESS = 'TARIFF_SUCCCESS',
  TARIFF_ERROR = 'TARIFF_ERROR',
}

export interface SdekTariffListComponentProps {
  state: SdekTariffListStateType;
  value: basicTariffType | undefined;
  onChange: (value: basicTariffType) => void;
  onClear: () => void;
  isDisabled: boolean;
  error?: string;
}
export interface SdekTariffListContainerProps {
  data: basicSdekPoints | undefined;
  value: basicTariffType | undefined;
  onChange: Function;
  name: string;
  basketCount: number;
  error?: string;
}
