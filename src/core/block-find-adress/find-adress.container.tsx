import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindAdressComponent } from './find-adress.component';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { FIND_ADRESS_STORE_NAME } from './find-adress.constant';
import { FIND_ADRESS_FIELD_NAME, adressValueType } from './find-adress.type';
import {
  getCountry,
  getCity,
  getStreet,
  getHouse,
  getPostalCode,
  saveAdressAction,
  getAdressAction,
} from './find-adress.action';

interface FindAdressContainer {
  onChange?: Function;
  name?: string;
}

export function FindAdressContainer(props: FindAdressContainer) {
  const { onChange, name } = props;
  const dispatch = useDispatch();
  const { saveState, dataState, isAuth } = useSelector((store: any) => ({
    saveState: store[FIND_ADRESS_STORE_NAME].save,
    dataState: store[FIND_ADRESS_STORE_NAME].data,
    isAuth: store[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    if (isAuth) {
      dispatch(getAdressAction());
    }
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getRequestData(dataState, {
      [FIND_ADRESS_FIELD_NAME.COUNTRY]: {},
      [FIND_ADRESS_FIELD_NAME.CITY]: {},
      [FIND_ADRESS_FIELD_NAME.STREET]: {},
      [FIND_ADRESS_FIELD_NAME.HOUSE]: {},
      [FIND_ADRESS_FIELD_NAME.POSTAL_CODE]: {},
      [FIND_ADRESS_FIELD_NAME.FULL_ADRESS]: {
        country: '',
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      },
    }),
    onSubmit: (values) => {
      dispatch(saveAdressAction(values));
    },
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
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.COUNTRY, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      isAuth && typeof onChange === 'function' && onChange(name, newValue);
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
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.CITY, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      isAuth && typeof onChange === 'function' && onChange(name, newValue);
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
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.STREET, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      isAuth && typeof onChange === 'function' && onChange(name, newValue);
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
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.HOUSE, value);
      formik.setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, newValue);
      isAuth && typeof onChange === 'function' && onChange(name, newValue);
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
      isAuth && typeof onChange === 'function' && onChange(name, newValue);
    },
  };
  return (
    <FindAdressComponent
      isAuth={isAuth}
      formik={formik}
      find={findMethods}
      change={changeMethods}
      savePending={isRequestPending(saveState)}
      saveSuccess={isRequestSuccess(saveState)}
      saveError={isRequestError(saveState)}
      saveErrorMessage={getRequestErrorMessage(saveState)}
    />
  );
}
