import { useState } from 'react';
import styled from 'styled-components';
import { AsyncReactSelect } from 'src/lib/element/field';
import { FindAdreccComponentProps } from './find-adress.type';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';
import { TitlePrimary } from 'src/lib/element/title';
import { TextButton } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SuccessAlert } from 'src/lib/element/alert';

export function FindAdressComponent(props: FindAdreccComponentProps) {
  const {
    formik: { values, handleSubmit },
    find,
    change,
    isAuth,
    savePending,
    saveSuccess,
    saveError,
    saveErrorMessage,
  } = props;

  const [edit, setEdit] = useState(false);

  const { country, city, settlement, street, house, postal_code } =
    values[FIND_ADRESS_FIELD_NAME.FULL_ADRESS];

  return (
    <SectionLayout type="SMALL">
      <HeaderCase>
        <Title tid="BASKET.FORM.FIELDS.TITLES.DELIVERY_DATA" />
        {isAuth && (
          <Button
            tid={edit ? 'Сохранить адрес' : 'Изменить адрес'}
            onClick={() => {
              if (edit) {
                handleSubmit();
              }
              setEdit(!edit);
            }}
          />
        )}
      </HeaderCase>

      <div>
        <SecondatyText tid="Ваш адрес —" />
        <PrimaryText
          tid={`
				${Boolean(country) ? country + ', ' : ''}
				${Boolean(city) ? city + ', ' : ''}
				${Boolean(settlement) ? settlement + ', ' : ''}
				${Boolean(street) ? street + ', ' : ''}
				${Boolean(house) ? house + ', ' : ''}
				${Boolean(postal_code) ? postal_code : ''}
			`}
        />
      </div>
      {(edit || !isAuth) && (
        <FieldLayout type="double" adaptive>
          <AsyncReactSelect
            titleTid="Страна"
            placeholderTid="Выберите страну"
            value={values.country?.label ? values.country : ''}
            onChange={change.country}
            loadOptions={find.country}
            noResults={() => 'Нет результатов'}
          />
          <AsyncReactSelect
            titleTid="Город"
            placeholderTid="Выберите город"
            value={values.city?.label ? values.city : ''}
            onChange={change.city}
            loadOptions={find.city}
            noResults={() => 'Нет результатов'}
            isDisabled={!values.country}
          />
          <AsyncReactSelect
            titleTid="Улица"
            placeholderTid="Выберите улицу"
            value={values.street?.label ? values.street : ''}
            onChange={change.street}
            loadOptions={find.street}
            noResults={() => 'Нет результатов'}
            isDisabled={!values.city}
          />
          <AsyncReactSelect
            titleTid="Дом"
            placeholderTid="Выберите дом"
            value={values.house?.label ? values.house : ''}
            onChange={change.house}
            loadOptions={find.house}
            noResults={() => 'Нет результатов'}
            isDisabled={!values.street}
          />
          <AsyncReactSelect
            titleTid="Почтовый индекс"
            placeholderTid="Введите город или индекс"
            value={values.postal_code?.label ? values.postal_code : ''}
            onChange={change.postal_code}
            loadOptions={find.postal_code}
            noResults={() => 'Нет результатов'}
          />
          {(!street || !house) && (
            <TextCase>
              <SecondatyText tid="Не нашли свой адрес? — введите его в примечание к заказу!" />
            </TextCase>
          )}
        </FieldLayout>
      )}
      {savePending && <LoaderPrimary />}
      {saveSuccess && <SuccessAlert tid="Адресс успешно сохранён" />}
      {saveError && <SuccessAlert tid={saveErrorMessage} />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Button = styled(TextButton)`
  width: max-content;
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: baseline;
  justify-content: space-between;
`;

const SecondatyText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const PrimaryText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const TextCase = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
`;
