import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';

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
        <FieldPrimary
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
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}
