import { AsyncReactSelect, BasicField } from 'src/lib/element/field';
import React from 'react';
import { FIND_ADRESS_FIELD_NAME } from '.';
import { FindAdreccComponentProps } from './find-adress.type';

export function FindAdressComponent(props: FindAdreccComponentProps) {
  const {
    handleChange,
    values,
    findCountry,
    findCity,
    findStreet,
    findHouse,
    changePostalCode,
    handleBlur,
  } = props;

  return (
    <React.Fragment>
      <AsyncReactSelect
        titleTid="Страна"
        placeholderTid="Выберите страну"
        value={values[FIND_ADRESS_FIELD_NAME.COUNTRY]}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.COUNTRY)}
        loadOptions={findCountry}
      />
      <AsyncReactSelect
        titleTid="Город"
        placeholderTid="Выберите город"
        value={values[FIND_ADRESS_FIELD_NAME.CITY]}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.CITY)}
        loadOptions={findCity}
      />
      <AsyncReactSelect
        titleTid="Улица"
        placeholderTid="Выберите улицу"
        value={values[FIND_ADRESS_FIELD_NAME.STREET]}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.STREET)}
        loadOptions={findStreet}
      />
      <AsyncReactSelect
        titleTid="Дом"
        placeholderTid="Выберите дом"
        value={values[FIND_ADRESS_FIELD_NAME.HOUSE]}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.HOUSE)}
        loadOptions={findHouse}
      />
      <BasicField
        titleTid="Почтовый индекс"
        placeholderTid="Введите почтовый индекс"
        name={FIND_ADRESS_FIELD_NAME.POSTAL_CODE}
        value={values[FIND_ADRESS_FIELD_NAME.POSTAL_CODE]}
        onChange={changePostalCode}
        onBlur={handleBlur}
      />
    </React.Fragment>
  );
}
