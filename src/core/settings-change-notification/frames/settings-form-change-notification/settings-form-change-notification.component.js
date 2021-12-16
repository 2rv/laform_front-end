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
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,

    isFormUploadPending,
    isFormUploadSuccess,
    isFormUploadError,
    formUploadErrorMessage,
    isNotificationLoadPending,
    pageLoading,
    notificationData,
  } = props;

  const isSubmitDisabled = () => {
    return (
      pageLoading ||
      isNotificationLoadPending ||
      isFormUploadPending ||
      notificationData[fieldNotification] === values[fieldNotification]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Title tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
        <FieldCheckbox
          titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
          labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
          name={fieldNotification}
          value={values[fieldNotification]}
          onBlur={handleBlur}
          checked={values[fieldNotification]}
          onClick={() =>
            setFieldValue(fieldNotification, !values[fieldNotification])
          }
        />
        {isFormUploadSuccess && (
          <SuccessAlert tid="SETTINGS.CHANGE_NOTIFICATION.SUCCESS" />
        )}
        {(isFormUploadError || formUploadErrorMessage) && (
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
