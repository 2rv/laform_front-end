import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { ButtonPrimary } from '../../../../lib/element/button';

export function SignupFormComponent(props) {
  const handleSubmit = () => {}; // mock

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            // name={fieldLogin}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values[fieldLogin]}
            // error={getFieldError(fieldLogin)}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.PLACEHOLDER"
            // name={fieldLogin}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values[fieldLogin]}
            // error={getFieldError(fieldLogin)}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            // name={fieldLogin}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values[fieldLogin]}
            // error={getFieldError(fieldLogin)}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.PLACEHOLDER"
            // name={fieldLogin}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values[fieldLogin]}
            // error={getFieldError(fieldLogin)}
          />
        </FieldLayout>
        <Button
          tid="SIGNUP.SIGNUP_FORM.BUTTON.SUBMIT"
          type="submit"
          // disabled={isSubmitDisabled()}
        />
        {/* {isPending && <LoaderForm tid="SIGNUP.SIGNUP_FORM.LOADING" />}
        {isError && <ErrorForm errorTid={errorMessage} />} */}
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
  gap: ${spacing(6)};
`;

const Button = styled(ButtonPrimary)`
  &&& {
    background-color: ${THEME_COLOR.PINK_LIGHT_2};
  }
`;
