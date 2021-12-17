import styled from 'styled-components';
import { Formik } from 'formik';
import { spacing } from 'src/lib/theme';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import {
  ChangePasswordComponentProps,
  CHANGE_PASSWORD_FIELD_NAME,
} from './change-password.type';

export function ChangePasswordComponent(props: ChangePasswordComponentProps) {
  const {
    initialValues,
    validation,
    onSubmit,
    state: { pending, error, success },
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
          <Container>
            <Content onSubmit={handleSubmit}>
              <TitlePrimary tid="AUTH.CHANGE_PASSWORD.TITLE" />
              <BasicField
                titleTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
                placeholderTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
                name={CHANGE_PASSWORD_FIELD_NAME.PASSWORD}
                type="password"
                value={values[CHANGE_PASSWORD_FIELD_NAME.PASSWORD]}
                error={getFieldError(CHANGE_PASSWORD_FIELD_NAME.PASSWORD)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <BasicField
                titleTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
                placeholderTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
                name={CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT}
                type="password"
                value={values[CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]}
                error={getFieldError(
                  CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT,
                )}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ButtonPrimary
                tid="AUTH.CHANGE_PASSWORD.SUBMIT"
                type="submit"
                disabled={pending}
              />
              {pending && <LoaderPrimary />}
              {error && <ErrorAlert tid={error} />}
              {success && <SuccessAlert tid="AUTH.CHANGE_PASSWORD.SUCCESS" />}
            </Content>
          </Container>
        );
      }}
    </Formik>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
  max-width: 500px;
`;
