import { FormikHandlers, FormikHelpers, FormikState } from 'formik';
import { BasicAddressType } from 'src/lib/basic-types';

export interface FormikObject
  extends FormikHandlers,
    FormikHelpers<userInfoValues>,
    FormikState<userInfoValues> {}
export interface UserInfoComponentProps {
  formik: FormikHandlers &
    FormikHelpers<userInfoValues> &
    FormikState<userInfoValues>;
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
  children: any;
}
export interface addressValueType {
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

export enum USER_INFO_FIELD_NAME {
  COUNTRY = 'country',
  CITY = 'city',
  STREET = 'street',
  HOUSE = 'house',
  POSTAL_CODE = 'postal_code',
  FULL_ADDRESS = 'address',
  FULL_NAME = 'fullName',
  PHONE = 'phone',
}
export interface userInfoValues {
  [USER_INFO_FIELD_NAME.COUNTRY]: CountryType;
  [USER_INFO_FIELD_NAME.CITY]: CityType;
  [USER_INFO_FIELD_NAME.STREET]: StreetType;
  [USER_INFO_FIELD_NAME.HOUSE]: HouseType;
  [USER_INFO_FIELD_NAME.POSTAL_CODE]: PostalCodeType;
  [USER_INFO_FIELD_NAME.FULL_ADDRESS]: BasicAddressType;
  [USER_INFO_FIELD_NAME.FULL_NAME]: string;
  [USER_INFO_FIELD_NAME.PHONE]: string;
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

export enum USER_INFO_ACTION_TYPE {
  GET_DATA_PENDING = 'USER_INFO_ACTION_TYPE.GET_DATA_PENDING',
  GET_DATA_SUCCESS = 'USER_INFO_ACTION_TYPE.GET_DATA_SUCCESS',
  GET_DATA_ERROR = 'USER_INFO_ACTION_TYPE.GET_DATA_ERROR',

  SAVE_DATA_PENDING = 'USER_INFO_ACTION_TYPE.SAVE_DATA_PENDING',
  SAVE_DATA_SUCCESS = 'USER_INFO_ACTION_TYPE.SAVE_DATA_SUCCESS',
  SAVE_DATA_ERROR = 'USER_INFO_ACTION_TYPE.SAVE_DATA_ERROR',
}
