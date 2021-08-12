import { BasicField } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { SuccessAlert, ErrorAlert } from '../../../../lib/element/alert';

export function AuthFormRecoveryAccountComponent(props) {
  const {
    fieldEmail,

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
        <TitlePrimary tid="AUTH.RECOVERY_ACCOUNT.TITLE" />
        <BasicField
          titleTid="AUTH.RECOVERY_ACCOUNT.EMAIL.TITLE"
          placeholderTid="AUTH.RECOVERY_ACCOUNT.EMAIL.PLACEHOLDER"
          type="email"
          name={fieldEmail}
          value={values[fieldEmail]}
          error={getFieldError(fieldEmail)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ButtonPrimary
          tid="AUTH.RECOVERY_ACCOUNT.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />
        {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        {isSuccess && <SuccessAlert tid="AUTH.RECOVERY_ACCOUNT.SUCCESS" />}
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}
