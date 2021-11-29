import { FormikHandlers, FormikHelpers, FormikState } from 'formik';

export interface FindAdressValues {
  country: string;
  city: string;
  street: string;
  house: string;
  postal_code: string;
}
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
}

export enum FIND_ADRESS_ACTION_TYPE {
  GET_CITY_CODE_PENDING = 'FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_PENDING',
  GET_CITY_CODE_SUCCESS = 'FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_SUCCESS',
  GET_CITY_CODE_ERROR = 'FIND_ADRESS_ACTION_TYPE.GET_CITY_CODE_ERROR',
}
