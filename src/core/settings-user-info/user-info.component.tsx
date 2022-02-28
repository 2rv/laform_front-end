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
    if (errors[name] && touched[name]) {
      return errors[name] + '';
    }
  };

  const { country, city, settlement, street, house, postal_code } =
    values[USER_INFO_FIELD_NAME.FULL_ADDRESS];

  return (
    <SectionLayout type="SMALL">
      <Title tid="SETTINGS.USER_INFO.TITLE" />
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="SETTINGS.USER_INFO.FULLNAME_TITLE"
          placeholderTid="SETTINGS.USER_INFO.FULLNAME_PLACEHOLDER"
          name={USER_INFO_FIELD_NAME.FULL_NAME}
          value={values[USER_INFO_FIELD_NAME.FULL_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(USER_INFO_FIELD_NAME.FULL_NAME)}
        />
        <BasicField
          titleTid="SETTINGS.USER_INFO.PHONE_TITLE"
          placeholderTid="SETTINGS.USER_INFO.PHONE_PLACEHOLDER"
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
          titleTid="SETTINGS.USER_INFO.COUNTRY_TITLE"
          placeholderTid="SETTINGS.USER_INFO.COUNTRY_PLACEHOLDER"
          value={values.country?.label ? values.country : ''}
          onChange={change.country}
          loadOptions={find.country}
          noResults={() => 'SETTINGS.USER_INFO.NO_RESULT'}
        />
        <AsyncReactSelect
          titleTid="SETTINGS.USER_INFO.CITY_TITLE"
          placeholderTid="SETTINGS.USER_INFO.CITY_PLACEHOLDER"
          value={values.city?.label ? values.city : ''}
          onChange={change.city}
          loadOptions={find.city}
          noResults={() => 'SETTINGS.USER_INFO.NO_RESULT'}
          isDisabled={!values.country}
        />
        <AsyncReactSelect
          titleTid="SETTINGS.USER_INFO.STREET_TITLE"
          placeholderTid="SETTINGS.USER_INFO.STREET_PLACEHOLDER"
          value={values.street?.label ? values.street : ''}
          onChange={change.street}
          loadOptions={find.street}
          noResults={() => 'SETTINGS.USER_INFO.NO_RESULT'}
          isDisabled={!values.city}
        />
        <AsyncReactSelect
          titleTid="SETTINGS.USER_INFO.HOUSE_TITLE"
          placeholderTid="SETTINGS.USER_INFO.HOUSE_PLACEHOLDER"
          value={values.house?.label ? values.house : ''}
          onChange={change.house}
          loadOptions={find.house}
          noResults={() => 'SETTINGS.USER_INFO.NO_RESULT'}
          isDisabled={!values.street}
        />
        <AsyncReactSelect
          titleTid="SETTINGS.USER_INFO.POSTAL_CODE_TITLE"
          placeholderTid="SETTINGS.USER_INFO.POSTAL_CODE_PLACEHOLDER"
          value={values.postal_code?.label ? values.postal_code : ''}
          onChange={change.postal_code}
          loadOptions={find.postal_code}
          noResults={() => 'SETTINGS.USER_INFO.NO_RESULT'}
        />
      </FieldLayout>

      <TextCase>
        <div>
          <SecondatyText tid="SETTINGS.USER_INFO.YOUR_ADDRESS" />
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
          <SecondatyText tid="SETTINGS.USER_INFO.DIDNT_FIND_ADDRESS" />
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
