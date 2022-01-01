import { Formik } from 'formik';
import { SectionLayout, ContentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { BasicField } from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { BlockAuthSocial } from '../auth-social';
import { LOGIN_ROUTE_PATH } from '../auth-login';
import { SignupComponentProps, SIGNUP_FIELD_NAME } from './signup.type';

export function SignupComponent(props: SignupComponentProps) {
  const {
    initialValues,
    validate,
    onSubmit,
    state: { pending, success, error },
  } = props;
  return (
    <ContentLayout horizontal="center" vertical="center">
      <SectionLayout type="SMALL">
        <TitlePrimary tid="SIGNUP.SECTION_TITLE" />
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

              const getFieldError = (name: SIGNUP_FIELD_NAME) => {
                return errors[name] && touched[name] && errors[name];
              };

              return (
                <form onSubmit={handleSubmit}>
                  <SectionLayout type="SMALL">
                    <SectionLayout type="TEXT">
                      <BasicField
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={SIGNUP_FIELD_NAME.LOGIN}
                        value={values[SIGNUP_FIELD_NAME.LOGIN]}
                        error={getFieldError(SIGNUP_FIELD_NAME.LOGIN)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <BasicField
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.PLACEHOLDER"
                        name={SIGNUP_FIELD_NAME.EMAIL}
                        type="email"
                        value={values[SIGNUP_FIELD_NAME.EMAIL]}
                        error={getFieldError(SIGNUP_FIELD_NAME.EMAIL)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <BasicField
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
                        name={SIGNUP_FIELD_NAME.PASSWORD}
                        type="password"
                        value={values[SIGNUP_FIELD_NAME.PASSWORD]}
                        error={getFieldError(SIGNUP_FIELD_NAME.PASSWORD)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <BasicField
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.PLACEHOLDER"
                        name={SIGNUP_FIELD_NAME.PASSWORD_REPEAT}
                        type="password"
                        value={values[SIGNUP_FIELD_NAME.PASSWORD_REPEAT]}
                        error={getFieldError(SIGNUP_FIELD_NAME.PASSWORD_REPEAT)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {error && <ErrorAlert tid={error} />}
                      {success && (
                        <SuccessAlert tid="SIGNUP.SIGNUP_FORM.SUCCESS" />
                      )}
                    </SectionLayout>
                    <ButtonPrimary
                      tid="SIGNUP.SIGNUP_FORM.BUTTON.SUBMIT"
                      type="submit"
                      disabled={pending}
                    />
                    {pending && <LoaderPrimary />}
                  </SectionLayout>
                </form>
              );
            }}
          </Formik>
          <BlockAuthSocial />
          <div>
            <TextSecondary tid="SIGNUP.FOOTER.HAVE_ACCOUNT" />
            &nbsp;
            <LinkPrimary tid="SIGNUP.FOOTER.LOGIN" path={LOGIN_ROUTE_PATH} />
          </div>
        </SectionLayout>
      </SectionLayout>
    </ContentLayout>
  );
}
