import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { FieldPrimary } from '../../../../lib/element/field';
import { ButtonSecondary } from '../../../../lib/element/button';
import { SuccessRequest } from '../../../../lib/element/success';
import { ErrorRequest } from '../../../../lib/element/error';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function EmailSubscribeComponent(props) {
  const {
    className,
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
    <div className={className}>
      <IndentLayout type="small">
        <CTAContainer>
          <PreCTAText tid="FOOTER.EMAIL_SUBSCRIBE.PRE_CTA" />
          <CTAText tid="FOOTER.EMAIL_SUBSCRIBE.CTA" />
        </CTAContainer>
        <form onSubmit={handleSubmit}>
          <IndentLayout type="small">
            <EmailField
              placeholderTid="FOOTER.EMAIL_SUBSCRIBE.FIELD_PLACEHOLDER"
              type="email"
              name={fieldEmail}
              value={values[fieldEmail]}
              error={getFieldError(fieldEmail)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isError && <ErrorRequest tid={errorMessage} />}
            {isSuccess && (
              <SuccessRequest tid="FOOTER.EMAIL_SUBSCRIBE.SUCCESS" />
            )}
            {!isSuccess && (
              <SubscribeButton
                tid="FOOTER.EMAIL_SUBSCRIBE.BUTTON_TEXT"
                type="submit"
                disabled={isSubmitDisabled()}
              />
            )}
            {isPending && <LoaderPrimary />}
          </IndentLayout>
        </form>
      </IndentLayout>
    </div>
  );
}

const CTAContainer = styled.div`
  display: grid;
  gap: ${spacing(4)};
  white-space: nowrap;
`;

const PreCTAText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const CTAText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;

const EmailField = styled(FieldPrimary)`
  background-color: ${THEME_COLOR.BACKGROUND.WHITE};
`;

const SubscribeButton = styled(ButtonSecondary)`
  height: ${spacing(9.2)};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;
