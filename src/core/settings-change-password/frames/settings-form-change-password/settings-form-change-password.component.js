import styled from 'styled-components';

import { BasicField } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { THEME_SIZE } from '../../../../lib/theme';

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
      <SectionLayout type="SMALL">
        <Title tid="SETTINGS.CHANGE_PASSWORD.TITLE" />
        <SectionLayout type="TEXT">
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
          <FieldLayout type="double" adaptive>
            <ButtonSecondary
              tid="SETTINGS.CHANGE_PASSWORD.SUBMIT"
              type="submit"
              disabled={isPending}
            />
          </FieldLayout>
          {isSuccess && <SuccessAlert tid="SETTINGS.CHANGE_PASSWORD.SUCCESS" />}
          {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        </SectionLayout>
        {isPending && <LoaderPrimary />}
      </SectionLayout>
    </form>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
