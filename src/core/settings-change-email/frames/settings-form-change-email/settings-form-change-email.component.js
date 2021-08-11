import styled from 'styled-components';

import { THEME_SIZE } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function SettingsFormChangeEmailComponent(props) {
  const {
    fieldOldEmail,
    fieldNewEmail,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,

    isFormUploadPending,
    isFormUploadSuccess,
    isFormUploadError,
    formUploadErrorMessage,
    isEmailLoadPending,
    pageLoading,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid ||
          isSubmitting ||
          isFormUploadSuccess ||
          pageLoading ||
          isEmailLoadPending ||
          isFormUploadPending;
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <TitlePrimary tid="SETTINGS.CHANGE_EMAIL.TITLE" />
        <FieldLayout>
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.TITLE"
            placeholderTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.PLACEHOLDER"
            name={fieldOldEmail}
            value={values[fieldOldEmail]}
            error={getFieldError(fieldOldEmail)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.TITLE"
            placeholderTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.PLACEHOLDER"
            name={fieldNewEmail}
            value={values[fieldNewEmail]}
            error={getFieldError(fieldNewEmail)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_EMAIL.PASSWORD.TITLE"
            placeholderTid="SETTINGS.CHANGE_EMAIL.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            type="password"
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {isFormUploadSuccess && (
            <SuccessAlert tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />
          )}

          {(isFormUploadError || formUploadErrorMessage) && (
            <ErrorAlert tid={formUploadErrorMessage} />
          )}
        </FieldLayout>

        <Submit
          tid="SETTINGS.CHANGE_EMAIL.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />

        {(isFormUploadPending || isEmailLoadPending || pageLoading) && (
          <LoaderPrimary />
        )}
      </IndentLayout>
    </form>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
