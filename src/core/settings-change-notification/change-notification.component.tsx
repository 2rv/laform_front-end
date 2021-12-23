import styled from 'styled-components';
import { FieldCheckbox } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { ChangeNotificationComponentProps } from './change-notification.type';

export function ChangeNotificationComponent(
  props: ChangeNotificationComponentProps,
) {
  const {
    state: { pending, checked, success, error },
    onChange,
  } = props;
  return (
    <SectionLayout type="SMALL">
      <Title tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
      <FieldCheckbox
        titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
        labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
        checked={checked}
        onChange={onChange}
        disabled={pending}
      />
      {success && <SuccessAlert tid="SETTINGS.CHANGE_NOTIFICATION.SUCCESS" />}
      {error && <ErrorAlert tid={error} />}
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
