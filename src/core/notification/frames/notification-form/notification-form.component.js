import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { BasicField } from '../../../../lib/element/field';
import { ButtonSecondary } from '../../../../lib/element/button';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function NotificationFormComponent(props) {
  const {
    fieldEmail,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isFormPending,
    isFormSuccess,
    isFormError,
    formErrorMessage,
    loadEmailPending,
    pageLoading,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return pageLoading || isFormPending || isFormSuccess || loadEmailPending;
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <FieldLayout>
          <NotificationField
            placeholderTid="NOTIFICATION.FIELD_PLACEHOLDER"
            name={fieldEmail}
            type="email"
            value={values[fieldEmail]}
            error={getFieldError(fieldEmail)}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {(isFormError || formErrorMessage) && (
            <ErrorAlert tid={formErrorMessage} />
          )}
          {isFormSuccess && <SuccessAlert tid="NOTIFICATION.SUCCESS" />}
        </FieldLayout>

        <NotificationButton
          tid="NOTIFICATION.BUTTON_TEXT"
          type="submit"
          disabled={isSubmitDisabled()}
        />

        {(pageLoading || isFormPending || loadEmailPending) && (
          <LoaderPrimary />
        )}
      </IndentLayout>
    </form>
  );
}

const NotificationField = styled(BasicField)`
  background-color: ${THEME_COLOR.BACKGROUND.WHITE};
`;

const NotificationButton = styled(ButtonSecondary)`
  height: ${spacing(9)};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;
