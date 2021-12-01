import { FindAdressComponent } from './find-adress.component';
import { adressValueType } from './find-adress.type';
import {
  getCountry,
  getCity,
  getStreet,
  getHouse,
  getPostalCode,
} from './find-adress.action';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';
import { useFormik } from 'formik';

interface FindAdressContainer {
  onChange: Function;
  name: string;
}

export function FindAdressContainer(props: FindAdressContainer) {
  const { onChange, name } = props;
  const formik = useFormik({
    initialValues: {
      [FIND_ADRESS_FIELD_NAME.COUNTRY]: '',
      [FIND_ADRESS_FIELD_NAME.CITY]: '',
      [FIND_ADRESS_FIELD_NAME.STREET]: '',
      [FIND_ADRESS_FIELD_NAME.HOUSE]: '',
      [FIND_ADRESS_FIELD_NAME.POSTAL_CODE]: '',
      [FIND_ADRESS_FIELD_NAME.FULL_ADRESS]: {
        country: '',
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      },
    },
    onSubmit: () => {},
  });

  const findMethods = {
    country: (querry: string) => getCountry(querry),
    city: (querry: string) => getCity(querry, formik.values),
    street: (querry: string) => getStreet(querry, formik.values),
    house: (querry: string) => getHouse(querry, formik.values),
    postal_code: (querry: string) => getPostalCode(querry),
  };

  const changeMethods = {
    country: (value: adressValueType) => {
      const newValue = {
        country: value?.country,
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.COUNTRY, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      onChange(name, newValue);
    },
    city: (value: adressValueType) => {
      const newValue = {
        country: formik.values.full_adress.country,
        city: value?.city,
        settlement: value?.settlement,
        kladr_id: value?.kladr_id,
        street: '',
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      onChange(name, newValue);
    },
    street: (value: adressValueType) => {
      const newValue = {
        country: formik.values.full_adress.country,
        city: formik.values.full_adress.city,
        settlement: formik.values.full_adress.settlement,
        kladr_id: formik.values.full_adress.kladr_id,
        street: value?.street,
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      onChange(name, newValue);
    },
    house: (value: adressValueType) => {
      const newValue = {
        country: formik.values.full_adress.country,
        city: formik.values.full_adress.city,
        settlement: formik.values.full_adress.settlement,
        kladr_id: formik.values.full_adress.kladr_id,
        street: formik.values.full_adress.street,
        house: value?.house,
        postal_code: '',
      };
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      onChange(name, newValue);
    },
    postal_code: (value: adressValueType) => {
      const newValue = {
        country: formik.values.full_adress.country,
        city: formik.values.full_adress.city,
        settlement: formik.values.full_adress.settlement,
        kladr_id: formik.values.full_adress.kladr_id,
        street: formik.values.full_adress.street,
        house: formik.values.full_adress.house,
        postal_code: value?.postal_code,
      };
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      onChange(name, newValue);
    },
  };
  return (
    <FindAdressComponent
      formik={formik}
      find={findMethods}
      change={changeMethods}
    />
  );
}
