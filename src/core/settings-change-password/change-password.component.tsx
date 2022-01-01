import { Formik } from 'formik';
import styled from 'styled-components';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { THEME_SIZE } from 'src/lib/theme';
import {
  ChangePasswordComponentProps,
  CHANGE_PASSWORD_FIELD_NAME,
} from './change-password.type';

export function ChangePasswordComponent(props: ChangePasswordComponentProps) {
  const {
    initialValues,
    validation,
    onSubmit,
    state: { pending, success, error },
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
        } = formik;

        const getFieldError = (name: CHANGE_PASSWORD_FIELD_NAME) => {
          return errors[name] && touched[name] && errors[name];
        };

        return (
          <form onSubmit={handleSubmit}>
            <SectionLayout type="SMALL">
              <Title tid="SETTINGS.CHANGE_PASSWORD.TITLE" />
              <SectionLayout type="TEXT">
                <BasicField
                  titleTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.TITLE"
                  placeholderTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.PLACEHOLDER"
                  name={CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD}
                  type="password"
                  value={values[CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]}
                  error={getFieldError(CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
                  placeholderTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
                  name={CHANGE_PASSWORD_FIELD_NAME.PASSWORD}
                  type="password"
                  value={values[CHANGE_PASSWORD_FIELD_NAME.PASSWORD]}
                  error={getFieldError(CHANGE_PASSWORD_FIELD_NAME.PASSWORD)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
                  placeholderTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
                  name={CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT}
                  type="password"
                  value={values[CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]}
                  error={getFieldError(
                    CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT,
                  )}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldLayout type="double" adaptive>
                  <ButtonSecondary
                    tid="SETTINGS.CHANGE_PASSWORD.SUBMIT"
                    type="submit"
                    disabled={pending}
                  />
                </FieldLayout>
                {success && (
                  <SuccessAlert tid="SETTINGS.CHANGE_PASSWORD.SUCCESS" />
                )}
                {error && <ErrorAlert tid={error} />}
              </SectionLayout>
              {pending && <LoaderPrimary />}
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
