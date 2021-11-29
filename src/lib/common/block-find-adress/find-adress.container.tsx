import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useDispatch, useSelector } from 'react-redux';
import { FindAdressComponent } from './find-adress.component';
import { adressValueType } from './find-adress.type';
import {
  getCountry,
  getCity,
  getStreet,
  getHouse,
  getPostalCode,
  getCityCodeByKladr,
} from './find-adress.action';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';
import { FIND_ADRESS_STORE_NAME } from './find-adress.constant';
import { useFormik } from 'formik';
import { getRequestData } from 'src/main/store/store.service';

export function FindAdressContainer() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      country: '',
      city: '',
      street: '',
      house: '',
      postal_code: '',
    },
    onSubmit: () => {},
  });

  const { currentLang, cityCode } = useSelector((state: any) => ({
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    cityCode: state[FIND_ADRESS_STORE_NAME].cityCode,
  }));

  const findMethods = {
    country: (querry: string) => getCountry(querry, currentLang),
    city: (querry: string) => getCity(querry, formik.values, currentLang),
    street: (querry: string) => getStreet(querry, formik.values, currentLang),
    house: (querry: string) => getHouse(querry, formik.values, currentLang),
    postal_code: (querry: string) => getPostalCode(querry),
  };
  const changeMethods = {
    country: (value: adressValueType) => {
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.COUNTRY, value);
    },
    city: (value: adressValueType) => {
      dispatch(getCityCodeByKladr(value.kladr_id));
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, value);
    },
    street: (value: adressValueType) => {
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, value);
    },
    house: (value: adressValueType) => {
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, '');
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, value);
    },
    postal_code: (value: adressValueType) => {
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, value);
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
