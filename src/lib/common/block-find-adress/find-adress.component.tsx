import React from 'react';
import { AsyncReactSelect } from 'src/lib/element/field';
import { FIND_ADRESS_FIELD_NAME } from '.';
import { FindAdreccComponentProps } from './find-adress.type';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TextPrimary } from 'src/lib/element/text';
import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';

export function FindAdressComponent(props: FindAdreccComponentProps) {
  const {
    values,
    handleChange,
    findCountry,
    findCity,
    findStreet,
    findHouse,
    findIndex,
  } = props;
  const { country, city, street, house, postal_code } =
    values[FIND_ADRESS_FIELD_NAME.FULL_ADRESS];
  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <AsyncReactSelect
          titleTid="Страна"
          placeholderTid="Выберите страну"
          value={values[FIND_ADRESS_FIELD_NAME.COUNTRY]}
          onChange={handleChange(FIND_ADRESS_FIELD_NAME.COUNTRY)}
          loadOptions={findCountry}
          noResults={() => 'Нет результатов'}
        />
        <AsyncReactSelect
          titleTid="Город"
          placeholderTid="Выберите город"
          value={values[FIND_ADRESS_FIELD_NAME.CITY]}
          onChange={handleChange(FIND_ADRESS_FIELD_NAME.CITY)}
          loadOptions={findCity}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values[FIND_ADRESS_FIELD_NAME.COUNTRY]}
        />
        <AsyncReactSelect
          titleTid="Улица"
          placeholderTid="Выберите улицу"
          value={values[FIND_ADRESS_FIELD_NAME.STREET]}
          onChange={handleChange(FIND_ADRESS_FIELD_NAME.STREET)}
          loadOptions={findStreet}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values[FIND_ADRESS_FIELD_NAME.CITY]}
        />
        <AsyncReactSelect
          titleTid="Дом"
          placeholderTid="Выберите дом"
          value={values[FIND_ADRESS_FIELD_NAME.HOUSE]}
          onChange={handleChange(FIND_ADRESS_FIELD_NAME.HOUSE)}
          loadOptions={findHouse}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values[FIND_ADRESS_FIELD_NAME.STREET]}
        />
        <AsyncReactSelect
          titleTid="Почтовый индекс"
          placeholderTid="Введите город или индекс"
          value={values[FIND_ADRESS_FIELD_NAME.POSTAL_CODE]}
          onChange={handleChange(FIND_ADRESS_FIELD_NAME.POSTAL_CODE)}
          loadOptions={findIndex}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
        />
        <TextCase>
          <div>
            <TextPrimary tid="Полный адрес -" />
            <SmallTitle
              tid={`
		${country ? country + ', ' : ''}
		${city ? city + ', ' : ''}
		${street ? street + ', ' : ''}
		${house ? house + ', ' : ''}
		${postal_code ? postal_code + '.' : '.'}
		`}
            />
          </div>
        </TextCase>
      </FieldLayout>
    </SectionLayout>
  );
}
const TextCase = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
`;
const SmallTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
