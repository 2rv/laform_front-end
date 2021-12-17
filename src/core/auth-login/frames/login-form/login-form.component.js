import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { BasicField } from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { ErrorAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { LOGIN_FIELD_NAME } from '../../login.type';

export function LoginFormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldvalue,

    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;
  const getFieldError = (name) => {
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
          {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        </FieldLayout>
        <ButtonPrimary
          tid="LOGIN.LOGIN_FORM.BUTTON.SUBMIT"
          type="submit"
          disabled={isPending}
        />
        {isPending && <LoaderPrimary />}
      </SectionLayout>
    </form>
  );
}
