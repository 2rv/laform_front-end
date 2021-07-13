import styled from 'styled-components';

import { THEME_SIZE } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { ErrorRequest } from '../../../../lib/element/error';
import { SuccessRequest } from '../../../../lib/element/success';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function SettingsFormChangeEmailComponent(props) {
  const {
    fieldEmail,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <Title tid="SETTINGS.CHANGE_EMAIL.TITLE" />
        <FieldLayout>
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_EMAIL.EMAIL.TITLE"
            placeholderTid="SETTINGS.CHANGE_EMAIL.EMAIL.PLACEHOLDER"
            name={fieldEmail}
            value={values[fieldEmail]}
            error={getFieldError(fieldEmail)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_EMAIL.PASSWORD.TITLE"
            placeholderTid="SETTINGS.CHANGE_EMAIL.PASSWORD.PLACEHOLDER"
            type="password"
            name={fieldPassword}
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formError && <ErrorRequest tid={errorMessage} />}
          {formSuccess && (
            <SuccessRequest tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />
          )}
        </FieldLayout>
        <Submit
          tid="SETTINGS.CHANGE_EMAIL.SUBMIT"
          type="submit"
          disabled={dataPending || formPending}
        />
        {(dataPending || formPending) && <LoaderPrimary />}
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
