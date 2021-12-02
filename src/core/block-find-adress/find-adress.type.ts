import { FormikHandlers, FormikHelpers, FormikState } from 'formik';
import { adressType } from 'src/core/basket/basket.type';

export interface FindAdreccComponentProps {
  formik: FormikHandlers &
    FormikHelpers<FindAdressValues> &
    FormikState<FindAdressValues>;
  find: {
    country: Function;
    city: Function;
    street: Function;
    house: Function;
    postal_code: Function;
  };
  change: {
    country: Function;
    city: Function;
    street: Function;
    house: Function;
    postal_code: Function;
  };
  isAuth: boolean;

  savePending: boolean;
  saveSuccess: boolean;
  saveError: boolean;
  saveErrorMessage: string;
}
export interface adressValueType {
  country: string;
  country_iso_code: string;
  city: string;
  city_fias_id: string;
  settlement: string;
  settlement_fias_id: string;
  street: string;
  street_fias_id: string;
  house: string;
  house_fias_id: string;
  postal_code: string;
  kladr_id: string;
}

export enum FIND_ADRESS_FIELD_NAME {
  COUNTRY = 'country',
  CITY = 'city',
  STREET = 'street',
  HOUSE = 'house',
  POSTAL_CODE = 'postal_code',
  FULL_ADRESS = 'full_adress',
}
export interface FindAdressValues {
  [FIND_ADRESS_FIELD_NAME.COUNTRY]: CountryType;
  [FIND_ADRESS_FIELD_NAME.CITY]: CityType;
  [FIND_ADRESS_FIELD_NAME.STREET]: StreetType;
  [FIND_ADRESS_FIELD_NAME.HOUSE]: HouseType;
  [FIND_ADRESS_FIELD_NAME.POSTAL_CODE]: PostalCodeType;
  [FIND_ADRESS_FIELD_NAME.FULL_ADRESS]: adressType;
}
export interface CountryType {
  label?: string;
  country?: string;
  country_iso_code?: string;
}
export interface CityType {
  label?: string;
  city?: string;
  settlement?: string;
  fias_id?: string;
  fias_level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
  kladr_id?: string;
}
export interface StreetType {
  label?: string;
  street?: string;
  fias_id?: string;
  fias_level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}
export interface HouseType {
  label?: string;
  house?: string;
  fias_id?: string;
  fias_level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}
export interface PostalCodeType {
  label?: string;
  postal_code?: string;
}

export interface locationsProps
  extends CountryType,
    CityType,
    StreetType,
    HouseType {}

export enum FIND_ADRESS_ACTION_TYPE {
  GET_DATA_PENDING = 'FIND_ADRESS_ACTION_TYPE.GET_DATA_PENDING',
  GET_DATA_SUCCESS = 'FIND_ADRESS_ACTION_TYPE.GET_DATA_SUCCESS',
  GET_DATA_ERROR = 'FIND_ADRESS_ACTION_TYPE.GET_DATA_ERROR',

  SAVE_DATA_PENDING = 'FIND_ADRESS_ACTION_TYPE.SAVE_DATA_PENDING',
  SAVE_DATA_SUCCESS = 'FIND_ADRESS_ACTION_TYPE.SAVE_DATA_SUCCESS',
  SAVE_DATA_ERROR = 'FIND_ADRESS_ACTION_TYPE.SAVE_DATA_ERROR',
}
