import { BasicAddressType } from 'src/lib/basic-types';

export type sdekPointsStateType = {
  sdekPoints?: basicSdekPoints[];
  pending: boolean;
  error?: string;
};

export type sdekPointsActionType = {
  type: SDEK_POINTS_ACTION_TYPE;
  error?: string;
  data?: basicSdekPoints[];
};
export enum SDEK_POINTS_ACTION_TYPE {
  PEINDING = 'PEINDING',
  SUCCCESS = 'SUCCCESS',
  ERROR = 'ERROR',
}

export interface SdekPointsComponentProps {
  state: sdekPointsStateType;
  value: basicSdekPoints | undefined;
  onChange: (value: basicSdekPoints | undefined) => void;
  isDisabled: boolean;
  error?: string;
}
export interface SdekPointsContainerProps {
  data: BasicAddressType | undefined;
  value: basicSdekPoints | undefined;
  onChange: Function;
  name: string;
  error?: string;
}
export interface basicSdekPoints {
  address_comment: string;
  allowed_cod: boolean;
  code: string;
  email: string;
  fulfillment: boolean;
  have_cash: boolean;
  have_cashless: boolean;
  is_dressing_room: boolean;
  is_handout: boolean;
  is_reception: boolean;
  label: string;
  location: {
    address: string;
    address_full: string;
    city: string;
    city_code: number;
    country_code: string;
    fias_guid: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    region: string;
    region_code: number;
  };
  name: string;
  nearest_station: string;
  note: string;
  office_image_list: { url: string }[];
  owner_code: string;
  phones: { number: string }[];
  take_only: boolean;
  type: string;
  work_time: string;
  work_time_list: { day: number; time: string }[];
}
