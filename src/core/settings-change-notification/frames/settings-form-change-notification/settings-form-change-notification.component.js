import styled from 'styled-components';

import { FieldCheckbox } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';

export function SettingsFormChangeNotificationComponent(props) {
  return (
    <IndentLayout type="small">
      <TitlePrimary tid="SETTINGS.CHANGE_NOTIFICATION.TITLE" />
      <FieldCheckbox
        titleTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.TITLE"
        labelTid="SETTINGS.CHANGE_NOTIFICATION.NEWSLETTER.LABEL"
      />
      <Submit tid="SETTINGS.CHANGE_NOTIFICATION.SUBMIT" />
    </IndentLayout>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
