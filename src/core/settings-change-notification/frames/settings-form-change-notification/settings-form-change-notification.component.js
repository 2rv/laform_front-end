import styled from 'styled-components';
import { FieldCheckbox } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { THEME_SIZE } from '../../../../lib/theme';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
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
      <SectionLayout type="SMALL">
        <Title tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
        <FieldCheckbox
          titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
          labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
          checked={false}
          name={fieldNotification}
          value={values[fieldNotification]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {!isFormUploadSuccess && (
          <SuccessAlert tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />
        )}
        {!(isFormUploadError || formUploadErrorMessage) && (
          <ErrorAlert tid={formUploadErrorMessage} />
        )}
        <FieldLayout type="double" adaptive>
          <ButtonSecondary
            tid="SETTINGS.CHANGE_NOTIFICATION.SUBMIT"
            type="submit"
            disabled={isSubmitDisabled()}
          />
        </FieldLayout>
        {(isFormUploadPending || isNotificationLoadPending || pageLoading) && (
          <LoaderPrimary />
        )}
      </SectionLayout>
    </form>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
