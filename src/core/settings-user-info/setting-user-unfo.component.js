import { Formik } from 'formik';
import styled from 'styled-components';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { THEME_SIZE } from 'src/lib/theme';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { SETTINGS_USER_INFO_FIELD_NAME } from './settings-user-info.type';

export function SettingsUserInfoComponent(props) {
  const {
    saveSuccess,
    isPending,
    error,
    errorMessage,

    initialValues,
    validation,
    onSubmit,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formik) => {
        const {
          errors,
          touched,
          values,
          handleSubmit,
          handleChange,
          handleBlur,
        } = formik;

        const getFieldError = (name) => {
          return errors[name] && touched[name] && errors[name];
        };

        return (
          <form onSubmit={handleSubmit}>
            <SectionLayout type="SMALL">
              <Title tid="SETTINGS.USER_INFO.TITLE" />
              <SectionLayout type="TEXT">
                <FieldLayout type="double" adaptive>
                  <BasicField
                    titleTid="SETTINGS.USER_INFO.FULLNAME.TITLE"
                    placeholderTid="SETTINGS.USER_INFO.FULLNAME.PLACEHOLDER"
                    name={SETTINGS_USER_INFO_FIELD_NAME.FULLNAME}
                    value={values[SETTINGS_USER_INFO_FIELD_NAME.FULLNAME]}
                    error={getFieldError(
                      SETTINGS_USER_INFO_FIELD_NAME.FULLNAME,
                    )}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <BasicField
                    titleTid="SETTINGS.USER_INFO.PHONE.TITLE"
                    placeholderTid="SETTINGS.USER_INFO.PHONE.PLACEHOLDER"
                    name={SETTINGS_USER_INFO_FIELD_NAME.PHONE}
                    value={values[SETTINGS_USER_INFO_FIELD_NAME.PHONE]}
                    error={getFieldError(SETTINGS_USER_INFO_FIELD_NAME.PHONE)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FieldLayout>

                <FieldLayout type="double" adaptive>
                  <ButtonSecondary
                    tid="SETTINGS.USER_INFO.SUBMIT"
                    type="submit"
                    disabled={isPending}
                  />
                </FieldLayout>

                {isPending && <LoaderPrimary />}
                {error && <ErrorAlert tid={errorMessage} />}
                {saveSuccess && (
                  <SuccessAlert tid="SETTINGS.USER_INFO.SUCCESS" />
                )}
              </SectionLayout>
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
