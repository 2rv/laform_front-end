import styled from 'styled-components';
import { AsyncReactSelect, BasicField } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { UserInfoComponentProps } from './user-info.type';
import { USER_INFO_FIELD_NAME } from './user-info.type';

export function UserInfoComponent(props: UserInfoComponentProps) {
  const {
    formik: { values, errors, touched, handleSubmit, handleChange, handleBlur },
    find,
    change,
    isAuth,
    savePending,
    saveSuccess,
    saveError,
    saveErrorMessage,
    children,
  } = props;

  const getFieldError = (name: USER_INFO_FIELD_NAME) => {
    return errors[name] && touched[name] && errors[name];
  };

  const { country, city, settlement, street, house, postal_code } =
    values[USER_INFO_FIELD_NAME.FULL_ADDRESS];

  return (
    <SectionLayout type="SMALL">
      <Title tid="BASKET.FORM.FIELDS.TITLES.DELIVERY_DATA" />
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="SETTINGS.USER_INFO.FULLNAME.TITLE"
          placeholderTid="SETTINGS.USER_INFO.FULLNAME.PLACEHOLDER"
          name={USER_INFO_FIELD_NAME.FULL_NAME}
          value={values[USER_INFO_FIELD_NAME.FULL_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(USER_INFO_FIELD_NAME.FULL_NAME)}
        />
        <BasicField
          titleTid="SETTINGS.USER_INFO.PHONE.TITLE"
          placeholderTid="SETTINGS.USER_INFO.PHONE.PLACEHOLDER"
          name={USER_INFO_FIELD_NAME.PHONE}
          value={values[USER_INFO_FIELD_NAME.PHONE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(USER_INFO_FIELD_NAME.PHONE)}
        />
      </FieldLayout>
      {children}
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
      </FieldLayout>

      <TextCase>
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
        {(!street || !house) && (
          <SecondatyText tid="Не нашли свой адрес? — введите его в примечание к заказу!" />
        )}
      </TextCase>

      {isAuth && (
        <FieldLayout type="double" adaptive>
          <ButtonSecondary
            tid="SETTINGS.USER_INFO.SUBMIT"
            onClick={() => handleSubmit()}
            disabled={savePending}
          />
        </FieldLayout>
      )}
      {savePending && <LoaderPrimary />}
      {saveSuccess && <SuccessAlert tid="SETTINGS.USER_INFO.SUCCESS" />}
      {saveError && <ErrorAlert tid={saveErrorMessage} />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SecondatyText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const PrimaryText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const TextCase = styled.div`
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`;
