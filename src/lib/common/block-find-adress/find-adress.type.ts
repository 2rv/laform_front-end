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
  [FIND_ADRESS_FIELD_NAME.COUNTRY]: string;
  [FIND_ADRESS_FIELD_NAME.CITY]: string;
  [FIND_ADRESS_FIELD_NAME.STREET]: string;
  [FIND_ADRESS_FIELD_NAME.HOUSE]: string;
  [FIND_ADRESS_FIELD_NAME.POSTAL_CODE]: string;
  [FIND_ADRESS_FIELD_NAME.FULL_ADRESS]: adressType;
}
export interface locationsProps {
  country?: string;
  country_iso_code?: string;
  city?: string;
  city_fias_id?: string;
  settlement?: string;
  settlement_fias_id?: string;
  street?: string;
  street_fias_id?: string;
  house?: string;
  house_fias_id?: string;
}
