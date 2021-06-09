import styled from 'styled-components';

import { THEME_COLOR } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';

export function SettingsFormChangePasswordComponent(props) {
  return (
    <IndentLayout type="small">
      <TitlePrimary tid="SETTINGS.CHANGE_PASSWORD.TITLE" />
      <FieldLayout>
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.TITLE"
          placeholderTid="SETTINGS.CHANGE_PASSWORD.OLD_PASSWORD.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
          placeholderTid="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
          placeholderTid="SETTINGS.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
        />
      </FieldLayout>
      <Submit tid="SETTINGS.CHANGE_PASSWORD.SUBMIT" />
    </IndentLayout>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
  color: ${THEME_COLOR.TEXT.GRAY};
`;
