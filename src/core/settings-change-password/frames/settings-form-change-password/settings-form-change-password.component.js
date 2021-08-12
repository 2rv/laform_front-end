import styled from 'styled-components';

import { BasicField } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function SettingsFormChangePasswordComponent(props) {
  const {
    fieldOldPassword,
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

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <TitlePrimary tid="SETTINGS.CHANGE_PASSWORD.TITLE" />
        <FieldLayout>
          <BasicField
            titleTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.TITLE"
            placeholderTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.PLACEHOLDER"
            name={fieldOldPassword}
            type="password"
            value={values[fieldOldPassword]}
            error={getFieldError(fieldOldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
            placeholderTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            type="password"
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
            placeholderTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
            name={fieldPasswordRepeat}
            type="password"
            value={values[fieldPasswordRepeat]}
            error={getFieldError(fieldPasswordRepeat)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {isSuccess && <SuccessAlert tid="SETTINGS.CHANGE_PASSWORD.SUCCESS" />}
          {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        </FieldLayout>
        <Submit
          tid="SETTINGS.CHANGE_PASSWORD.SUBMIT"
          type="submit"
          disabled={isPending}
        />
        {isPending && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
