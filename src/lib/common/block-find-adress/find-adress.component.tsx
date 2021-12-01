import React from 'react';
import { AsyncReactSelect } from 'src/lib/element/field';
import { FindAdreccComponentProps } from './find-adress.type';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';

export function FindAdressComponent(props: FindAdreccComponentProps) {
  const {
    formik: { values },
    find,
    change,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <AsyncReactSelect
          titleTid="Страна"
          placeholderTid="Выберите страну"
          value={values.country}
          onChange={change.country}
          loadOptions={find.country}
          noResults={() => 'Нет результатов'}
        />
        <AsyncReactSelect
          titleTid="Город"
          placeholderTid="Выберите город"
          value={values.city}
          onChange={change.city}
          loadOptions={find.city}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.country}
        />
        <AsyncReactSelect
          titleTid="Улица"
          placeholderTid="Выберите улицу"
          value={values.street}
          onChange={change.street}
          loadOptions={find.street}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.city}
        />
        <AsyncReactSelect
          titleTid="Дом"
          placeholderTid="Выберите дом"
          value={values.house}
          onChange={change.house}
          loadOptions={find.house}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.street}
        />
        <AsyncReactSelect
          titleTid="Почтовый индекс"
          placeholderTid="Введите город или индекс"
          value={values.postal_code}
          onChange={change.postal_code}
          loadOptions={find.postal_code}
          noResults={() => 'Нет результатов'}
        />
      </FieldLayout>
    </SectionLayout>
  );
}
