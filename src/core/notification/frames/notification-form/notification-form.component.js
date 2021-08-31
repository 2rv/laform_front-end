import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
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
    return pageLoading || isFormPending || loadEmailPending;
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Field
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
        <ButtonSecondary
          tid="NOTIFICATION.BUTTON_TEXT"
          type="submit"
          disabled={isSubmitDisabled()}
        />

        {(pageLoading || isFormPending || loadEmailPending) && (
          <LoaderPrimary />
        )}
      </SectionLayout>
    </form>
  );
}
const Field = styled(BasicField)`
  background-color: ${THEME_COLOR.WHITE};
`;
