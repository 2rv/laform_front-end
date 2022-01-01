import { Formik } from 'formik';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { BasicField } from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import {
  FieldLayout,
  SectionLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import { BlockSocialAuth } from '../auth-social';
import { SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';
import { LOGIN_FIELD_NAME, LoginComponentProps } from './login.type';

export function LoginComponent(props: LoginComponentProps) {
  const {
    initialValues,
    validate,
    onSubmit,
    state: { pending, success, error },
  } = props;
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="LOGIN.SECTION_TITLE" />
        <SectionLayout>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
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

              const getFieldError = (name: LOGIN_FIELD_NAME) => {
                return errors[name] && touched[name] && errors[name];
              };
              return (
                <form onSubmit={handleSubmit}>
                  <SectionLayout type="TEXT">
                    <FieldLayout>
                      <BasicField
                        titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={LOGIN_FIELD_NAME.LOGIN}
                        value={values[LOGIN_FIELD_NAME.LOGIN]}
                        error={getFieldError(LOGIN_FIELD_NAME.LOGIN)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <BasicField
                        titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
                        placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
                        name={LOGIN_FIELD_NAME.PASSWORD}
                        type="password"
                        value={values[LOGIN_FIELD_NAME.PASSWORD]}
                        error={getFieldError(LOGIN_FIELD_NAME.PASSWORD)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </FieldLayout>
                    <ButtonPrimary
                      tid="LOGIN.LOGIN_FORM.BUTTON.SUBMIT"
                      type="submit"
                      disabled={pending}
                    />
                    {error && <ErrorAlert tid={error} />}
                    {success && <SuccessAlert tid="Успешно" />}
                    {pending && <LoaderPrimary />}
                  </SectionLayout>
                </form>
              );
            }}
          </Formik>
          <BlockSocialAuth />
          <SectionLayout type="TEXT">
            <div>
              <TextSecondary tid="LOGIN.FOOTER.HAVENT_ACCOUNT_YET" />
              &nbsp;
              <LinkPrimary
                tid="LOGIN.FOOTER.REGISTER"
                path={SIGNUP_ROUTE_PATH}
              />
            </div>
            <div>
              <TextSecondary tid="LOGIN.FOOTER.FORGOT_PASSWORD" />
              &nbsp;
              <LinkPrimary
                tid="LOGIN.FOOTER.FORGOT_PASSWORD_LINK"
                path={AUTH_RECOVERY_ACCOUNT_ROUTE_PATH}
              />
            </div>
          </SectionLayout>
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
