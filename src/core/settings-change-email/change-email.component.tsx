import { Formik } from 'formik';
import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import {
  ChangeEmailComponentProps,
  CHANGE_EMAIL_FIELD_NAME,
} from './change-email.type';

export function ChangeEmailComponent(props: ChangeEmailComponentProps) {
  const {
    state: {
      pending,
      delay,

      getError,

      changeSuccess,

      updateStarted,

      updateSuccess,
      updateError,
    },
    initialValues,
    validation,
    onSubmit,
    onUpdate,
    count,
    emailConfirmed,
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

        function getFieldError(name: CHANGE_EMAIL_FIELD_NAME): string {
          return (touched[name] && errors[name] && errors[name]) || '';
        }
        return (
          <form onSubmit={handleSubmit}>
            <SectionLayout type="SMALL">
              <Title tid="SETTINGS.CHANGE_EMAIL.TITLE" />
              <SectionLayout type="TEXT">
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.PLACEHOLDER"
                  name={CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL}
                  value={values[CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]}
                  error={getFieldError(CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.PLACEHOLDER"
                  name={CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL}
                  value={values[CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]}
                  error={getFieldError(CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BasicField
                  titleTid="SETTINGS.CHANGE_EMAIL.PASSWORD.TITLE"
                  placeholderTid="SETTINGS.CHANGE_EMAIL.PASSWORD.PLACEHOLDER"
                  name={CHANGE_EMAIL_FIELD_NAME.PASSWORD}
                  type="password"
                  value={values[CHANGE_EMAIL_FIELD_NAME.PASSWORD]}
                  error={getFieldError(CHANGE_EMAIL_FIELD_NAME.PASSWORD)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldLayout type="double" adaptive>
                  <ButtonSecondary
                    tid={delay ? count + '' : 'SETTINGS.CHANGE_EMAIL.SUBMIT'}
                    type="submit"
                    disabled={pending || delay}
                  />
                </FieldLayout>
                {updateStarted && (
                  <SectionLayout type="SMALL">
                    {emailConfirmed && (
                      <BasicField
                        titleTid="Код с текущей почты"
                        placeholderTid="Введите код с текущей почты"
                        name={CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL}
                        value={values[CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL]}
                        error={getFieldError(
                          CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL,
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                    <BasicField
                      titleTid="Код с новой почты"
                      placeholderTid="Введите код с новой почты"
                      name={CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL}
                      value={values[CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL]}
                      error={getFieldError(
                        CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL,
                      )}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FieldLayout type="double" adaptive>
                      <ButtonSecondary
                        tid="Подтвердить смену"
                        onClick={() => onUpdate(values)}
                        disabled={
                          !values[CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL] ||
                          (emailConfirmed &&
                            !values[CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL])
                        }
                      />
                    </FieldLayout>
                  </SectionLayout>
                )}

                {changeSuccess && (
                  <InfoAlert tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />
                )}
                {updateSuccess && <SuccessAlert tid="Почта успешно изменена" />}

                {getError && <ErrorAlert tid={getError} />}
                {updateError && <ErrorAlert tid={updateError} />}
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
