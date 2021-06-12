import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function AuthFormChangePasswordComponent(props) {
  const {
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
        <TitlePrimary tid="AUTH.CHANGE_PASSWORD.TITLE" />
        <FieldLayout>
          <FieldPrimary
            titleTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
            placeholderTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            type="password"
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
            placeholderTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
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
          tid="AUTH.CHANGE_PASSWORD.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}
