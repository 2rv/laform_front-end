import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { ButtonPrimary } from '../../../../lib/element/button';
import { ErrorRequest } from '../../../../lib/element/error';

export function LoginFormComponent(props) {
  const {
    // fieldLogin,
    // fieldEmail,
    // fieldPassword,
    // fieldPasswordRepeat,

    // values,
    // errors,
    // touched,
    // handleChange,
    // handleBlur,
    handleSubmit,

    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  // const getFieldError = (name) => {
  //   return errors[name] && touched[name] && errors[name];
  // };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
            // name={fieldLogin}
            // value={values[fieldLogin]}
            // error={getFieldError(fieldLogin)}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
            // name={fieldPassword}
            type="password"
            // value={values[fieldPassword]}
            // error={getFieldError(fieldPassword)}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          {isError && <ErrorRequest tid={errorMessage} />}
        </FieldLayout>
        <ButtonPrimary
          tid="LOGIN.LOGIN_FORM.BUTTON.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />
      </Container>
    </form>
  );
}

const FieldLayout = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
