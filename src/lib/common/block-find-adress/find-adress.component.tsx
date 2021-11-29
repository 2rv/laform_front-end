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
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.country}
        />
        <AsyncReactSelect
          titleTid="Улица"
          placeholderTid="Выберите улицу"
          value={values.street}
          onChange={change.street}
          loadOptions={find.street}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.city}
        />
        <AsyncReactSelect
          titleTid="Дом"
          placeholderTid="Выберите дом"
          value={values.house}
          onChange={change.house}
          loadOptions={find.house}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
          isDisabled={!values.street}
        />
        <AsyncReactSelect
          titleTid="Почтовый индекс"
          placeholderTid="Введите город или индекс"
          value={values.postal_code}
          onChange={change.postal_code}
          loadOptions={find.postal_code}
          cacheOptions={false}
          noResults={() => 'Нет результатов'}
        />
      </FieldLayout>
    </SectionLayout>
  );
}

// import { TextPrimary } from 'src/lib/element/text';
// import styled from 'styled-components';
// import { TitlePrimary } from 'src/lib/element/title';
// import { THEME_SIZE } from 'src/lib/theme';
// const { country, city, street, house, postal_code } =
// values[FIND_ADRESS_FIELD_NAME.FULL_ADRESS];
// 	<TextCase>
// 	  <div>
// 		<TextPrimary tid="Полный адрес -" />
// 		<SmallTitle
// 		  tid={`
// 	${country ? country + ', ' : ''}
// 	${city ? city + ', ' : ''}
// 	${street ? street + ', ' : ''}
// 	${house ? house + ', ' : ''}
// 	${postal_code ? postal_code + '.' : '.'}
// 	`}
// 		/>
// 	  </div>
// 	</TextCase>
// const TextCase = styled.div`
//   margin-top: 19px;
//   display: flex;
//   align-items: center;
// `;
// const SmallTitle = styled(TitlePrimary)`
//   font-size: ${THEME_SIZE.FONT.DEFAULT};
//   line-height: 1.5;
// `;
