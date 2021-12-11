import { Formik } from 'formik';
import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SETTINGS_CHANGE_EMAIL_FIELD_NAME } from './settings-change-email.type';
import { SettingsConfirmEmailComponent } from './settings-confirm-email.component';

export function SettingsChangeEmailComponent(props) {
  const {
    savePending,
    saveErrorMessage,
    saveSuccess,
    saveError,
    loadPending,
    pageLoading,
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
          handleChange,
          handleBlur,
          handleSubmit,
        } = formik;
        const getFieldError = (name) => {
          return errors[name] && touched[name] && errors[name];
        };
        const isSubmitDisabled = () => {
          return pageLoading || savePending || loadPending;
        };
        return (
          <form onSubmit={handleSubmit}>
            {isSubmitDisabled() && <LoaderPrimary />}
            <SectionLayout type="SMALL">
              <Title tid="SETTINGS.CHANGE_EMAIL.TITLE" />
              <SectionLayout type="TEXT">
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.PLACEHOLDER"
                  name={SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL}
                  value={values[SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]}
                  error={getFieldError(
                    SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL,
                  )}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.PLACEHOLDER"
                  name={SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL}
                  value={values[SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]}
                  error={getFieldError(
                    SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL,
                  )}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.PASSWORD.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.PASSWORD.PLACEHOLDER"
                  name={SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD}
                  type="password"
                  value={values[SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]}
                  error={getFieldError(
                    SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD,
                  )}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldLayout type="double" adaptive>
                  <ButtonSecondary
                    tid="SETTINGS.CHANGE_EMAIL.SUBMIT"
                    type="submit"
                    disabled={isSubmitDisabled()}
                  />
                </FieldLayout>
                {saveSuccess && <SettingsConfirmEmailComponent />}
                {saveSuccess && (
                  <SuccessAlert tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />
                )}
                {(saveError || saveErrorMessage) && (
                  <ErrorAlert tid={saveErrorMessage} />
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
