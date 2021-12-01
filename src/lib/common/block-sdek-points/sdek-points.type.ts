import { adressType } from 'src/core/basket/basket.type';

export interface sdekPointsType {
  sdekPoints: basicSdekPoints[];
  pending: true | false;
  errorMessage?: string;
}
export interface SdekPointsComponentProps {
  store: sdekPointsType;
  value: basicSdekPoints;
  onChange: Function;
}
export interface SdekPointsContainerProps {
  data: adressType;
  value: basicSdekPoints;
  onChange: Function;
  name: string;
}
export enum SDEK_POINTS_ACTION_TYPE {
  PEINDING = 'SDEK_POINTS_ACTION_TYPE.PEINDING',
  SUCCCESS = 'SDEK_POINTS_ACTION_TYPE.SUCCCESS',
  ERROR = 'SDEK_POINTS_ACTION_TYPE.ERROR',
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
