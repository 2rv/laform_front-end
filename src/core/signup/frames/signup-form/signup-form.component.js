import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { FieldPrimary } from '../../../../lib/element/field';
import { ButtonPrimary } from '../../../../lib/element/button';
import { ErrorRequest } from '../../../../lib/element/error';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldEmail,
    fieldPassword,
    fieldPasswordRepeat,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            value={values[fieldLogin]}
            error={getFieldError(fieldLogin)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.PLACEHOLDER"
            name={fieldEmail}
            type="email"
            value={values[fieldEmail]}
            error={getFieldError(fieldEmail)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            type="password"
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.PLACEHOLDER"
            name={fieldPasswordRepeat}
            type="password"
            value={values[fieldPasswordRepeat]}
            error={getFieldError(fieldPasswordRepeat)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {isError && <ErrorRequest tid={errorMessage} />}
        </FieldLayout>
        <ButtonPrimary
          tid="SIGNUP.SIGNUP_FORM.BUTTON.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}
