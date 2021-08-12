import styled from 'styled-components';

import { FieldCheckbox } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { THEME_SIZE } from '../../../../lib/theme';
import { BasicField } from '../../../../lib/element/field';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';
import { LoaderPrimary } from '../../../../lib/element/loader';

export function SettingsFormChangeNotificationComponent(props) {
  const {
    fieldNotification,

    values,
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
    isNotificationLoadPending,
    pageLoading,
  } = props;

  console.log(values);

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid ||
          isSubmitting ||
          isFormUploadSuccess ||
          pageLoading ||
          isNotificationLoadPending ||
          isFormUploadPending;
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <TitlePrimary tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
        <FieldLayout>
          <FieldCheckbox
            titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
            labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
            name={fieldNotification}
            value={values[fieldNotification]}
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
          tid="SETTINGS.CHANGE_NOTIFICATION.SUBMIT"
          type="submit"
          disabled={isSubmitDisabled()}
        />

        {(isFormUploadPending || isNotificationLoadPending || pageLoading) && (
          <LoaderPrimary />
        )}
      </IndentLayout>
    </form>
    // <IndentLayout type="small">
    //   <TitlePrimary tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
    //   <FieldCheckbox
    //     titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
    //     labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
    //   />
    //   <Submit tid="SETTINGS.CHANGE_NOTIFICATION.SUBMIT" />
    // </IndentLayout>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
