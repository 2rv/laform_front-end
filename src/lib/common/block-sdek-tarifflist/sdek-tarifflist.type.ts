import { basicSdekPoints } from '../block-sdek-points';

export interface SdekTariffListType {
  sdekTariffList: basicTariffType[];
  sdekTariff?: basicTariffType;
  pending: true | false;
  errorMessage?: string;
}

export interface SdekTariffListComponentProps {
  store: SdekTariffListType;
  value: basicTariffType;
  onChange: Function;
  isDisabled: boolean;
  error: any;
}
export interface SdekTariffListContainerProps {
  data: basicSdekPoints;
  value: basicTariffType;
  onChange: Function;
  name: string;
  basketCount: number;
  error: any;
}
export enum SDEK_TARIFFLIST_ACTION_TYPE {
  PENDING = 'SDEK_TARIFFLIST_ACTION_TYPE.PENDING',
  SUCCCESS = 'SDEK_TARIFFLIST_ACTION_TYPE.SUCCCESS',
  ERROR = 'SDEK_TARIFFLIST_ACTION_TYPE.ERROR',

  TARIFF_PENDING = 'SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_PENDING',
  TARIFF_SUCCCESS = 'SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_SUCCCESS',
  TARIFF_ERROR = 'SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_ERROR',
}
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
