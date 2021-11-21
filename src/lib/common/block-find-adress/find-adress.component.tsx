import { DataListField } from 'src/lib/element/field';
import React from 'react';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';

export function FindAdressComponent(props: any) {
  const {
    countryHints,
    regionHints,
    cityHints,
    areaHints,
    settlementHints,
    streetHints,
    houseHints,
    values,
    handleChange,
  } = props;

  return (
    <React.Fragment>
      <DataListField
        titleTid="Страна"
        placeholderTid="Выберите страну"
        hints={countryHints}
        value={values.country.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.COUNTRY)}
        name={FIND_ADRESS_FIELD_NAME.COUNTRY}
      />
      <DataListField
        titleTid="Регион"
        placeholderTid="Выберите регион"
        hints={regionHints}
        value={values.region.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.REGION)}
        name={FIND_ADRESS_FIELD_NAME.REGION}
      />
      <DataListField
        titleTid="Город"
        placeholderTid="Выберите город"
        hints={cityHints}
        value={values.city.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.CITY)}
        name={FIND_ADRESS_FIELD_NAME.CITY}
      />
      <DataListField
        titleTid="Район региона"
        placeholderTid="Выберите район региона"
        hints={areaHints}
        value={values.area.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.AREA)}
        name={FIND_ADRESS_FIELD_NAME.AREA}
      />
      <DataListField
        titleTid="Населенный пункт"
        placeholderTid="Выберите населенный пункт"
        hints={settlementHints}
        value={values.settlement.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.SETTLEMENT)}
        name={FIND_ADRESS_FIELD_NAME.SETTLEMENT}
      />
      <DataListField
        titleTid="Улица"
        placeholderTid="Выберите улицу"
        hints={streetHints}
        value={values.street.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.STREET)}
        name={FIND_ADRESS_FIELD_NAME.STREET}
      />
      <DataListField
        titleTid="Дом"
        placeholderTid="Выберите дом"
        hints={houseHints}
        value={values.house.value}
        onChange={handleChange(FIND_ADRESS_FIELD_NAME.HOUSE)}
        name={FIND_ADRESS_FIELD_NAME.HOUSE}
      />
    </React.Fragment>
  );
}
