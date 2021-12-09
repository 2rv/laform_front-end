import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { USER_INFO_STORE_NAME } from './user-info.constant';
import {
  USER_INFO_FIELD_NAME,
  addressValueType,
  FormikObject,
} from './user-info.type';
import { UserInfoComponent } from './user-info.component';
import {
  getCountry,
  getCity,
  getStreet,
  getHouse,
  getPostalCode,
  saveAdressAction,
  getAdressAction,
} from './user-info.action';
import { BasicAddressType } from 'src/lib/basic-types';

interface UserInfoContainerProps {
  onChange?: (name: USER_INFO_FIELD_NAME, value: any) => void;
  name?: string;
  children?: any;
}

export function UserInfoContainer(props: UserInfoContainerProps) {
  const { onChange, children } = props;
  const dispatch = useDispatch();
  const { saveState, dataState, isAuth } = useSelector((store: any) => ({
    saveState: store[USER_INFO_STORE_NAME].save,
    dataState: store[USER_INFO_STORE_NAME].data,
    isAuth: store[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    if (isAuth) {
      dispatch(getAdressAction());
    }
  }, []);

  const initialValues = () => {
    return getRequestData(dataState, {
      [USER_INFO_FIELD_NAME.COUNTRY]: {},
      [USER_INFO_FIELD_NAME.CITY]: {},
      [USER_INFO_FIELD_NAME.STREET]: {},
      [USER_INFO_FIELD_NAME.HOUSE]: {},
      [USER_INFO_FIELD_NAME.POSTAL_CODE]: {},
      [USER_INFO_FIELD_NAME.FULL_ADDRESS]: {
        country: '',
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      },
      [USER_INFO_FIELD_NAME.PHONE]: '',
      [USER_INFO_FIELD_NAME.FULL_NAME]: '',
    });
  };

  const formik: FormikObject = useFormik({
    enableReinitialize: true,
    initialValues: initialValues(),
    onSubmit: (values) => {
      dispatch(saveAdressAction(values));
    },
  });

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(
        USER_INFO_FIELD_NAME.COUNTRY,
        formik.values[USER_INFO_FIELD_NAME.COUNTRY],
      );
      onChange(
        USER_INFO_FIELD_NAME.CITY,
        formik.values[USER_INFO_FIELD_NAME.CITY],
      );
      onChange(
        USER_INFO_FIELD_NAME.STREET,
        formik.values[USER_INFO_FIELD_NAME.STREET],
      );
      onChange(
        USER_INFO_FIELD_NAME.HOUSE,
        formik.values[USER_INFO_FIELD_NAME.HOUSE],
      );
      onChange(
        USER_INFO_FIELD_NAME.POSTAL_CODE,
        formik.values[USER_INFO_FIELD_NAME.POSTAL_CODE],
      );
      onChange(
        USER_INFO_FIELD_NAME.FULL_ADDRESS,
        formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS],
      );
      onChange(
        USER_INFO_FIELD_NAME.FULL_NAME,
        formik.values[USER_INFO_FIELD_NAME.FULL_NAME],
      );
      onChange(
        USER_INFO_FIELD_NAME.PHONE,
        formik.values[USER_INFO_FIELD_NAME.PHONE],
      );
    }
  }, [formik.values]);

  const findMethods = {
    country: (querry: string) => getCountry(querry),
    city: (querry: string) => getCity(querry, formik.values),
    street: (querry: string) => getStreet(querry, formik.values),
    house: (querry: string) => getHouse(querry, formik.values),
    postal_code: (querry: string) => getPostalCode(querry),
  };

  const changeMethods = {
    country: (value: addressValueType) => {
      const newValue: BasicAddressType = {
        country: value?.country,
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(USER_INFO_FIELD_NAME.CITY, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.STREET, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.COUNTRY, value);
      formik.setFieldValue(USER_INFO_FIELD_NAME.FULL_ADDRESS, newValue);
    },
    city: (value: addressValueType) => {
      const newValue: BasicAddressType = {
        country: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].country,
        city: value?.city,
        settlement: value?.settlement,
        kladr_id: value?.kladr_id,
        street: '',
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(USER_INFO_FIELD_NAME.STREET, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.CITY, value);
      formik.setFieldValue(USER_INFO_FIELD_NAME.FULL_ADDRESS, newValue);
    },
    street: (value: addressValueType) => {
      const newValue: BasicAddressType = {
        country: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].country,
        city: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].city,
        settlement: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].settlement,
        kladr_id: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].kladr_id,
        street: value?.street,
        house: '',
        postal_code: '',
      };
      formik.setFieldValue(USER_INFO_FIELD_NAME.HOUSE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.STREET, value);
      formik.setFieldValue(USER_INFO_FIELD_NAME.FULL_ADDRESS, newValue);
    },
    house: (value: addressValueType) => {
      const newValue: BasicAddressType = {
        country: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].country,
        city: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].city,
        settlement: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].settlement,
        kladr_id: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].kladr_id,
        street: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].street,
        house: value?.house,
        postal_code: '',
      };
      formik.setFieldValue(USER_INFO_FIELD_NAME.POSTAL_CODE, {});
      formik.setFieldValue(USER_INFO_FIELD_NAME.HOUSE, value);
      formik.setFieldValue(USER_INFO_FIELD_NAME.FULL_ADDRESS, newValue);
    },
    postal_code: (value: addressValueType) => {
      const newValue: BasicAddressType = {
        country: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].country,
        city: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].city,
        settlement: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].settlement,
        kladr_id: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].kladr_id,
        street: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].street,
        house: formik.values[USER_INFO_FIELD_NAME.FULL_ADDRESS].house,
        postal_code: value?.postal_code,
      };
      formik.setFieldValue(USER_INFO_FIELD_NAME.POSTAL_CODE, value);
      formik.setFieldValue(USER_INFO_FIELD_NAME.FULL_ADDRESS, newValue);
    },
  };

  return (
    <UserInfoComponent
      isAuth={isAuth}
      formik={formik}
      find={findMethods}
      change={changeMethods}
      savePending={isRequestPending(saveState)}
      saveSuccess={isRequestSuccess(saveState)}
      saveError={isRequestError(saveState)}
      saveErrorMessage={getRequestErrorMessage(saveState)}
      children={children}
    />
  );
}
