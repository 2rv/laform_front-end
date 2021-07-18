import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { FieldPrimary } from '../../../../lib/element/field';
import { ButtonPrimary } from '../../../../lib/element/button';
import { ErrorAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function LoginFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,

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
            titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            value={values[fieldLogin]}
            error={getFieldError(fieldLogin)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            type="password"
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        </FieldLayout>
        <ButtonPrimary
          tid="LOGIN.LOGIN_FORM.BUTTON.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}
