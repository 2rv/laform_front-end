import styled from 'styled-components';

import { THEME_COLOR } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';

export function SettingsFormChangeEmailComponent(props) {
  return (
    <IndentLayout type="small">
      <TitlePrimary tid="SETTINGS.CHANGE_EMAIL.TITLE" />
      <FieldLayout>
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.TITLE"
          placeholderTid="SETTINGS.CHANGE_EMAIL.OLD_EMAIL.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.TITLE"
          placeholderTid="SETTINGS.CHANGE_EMAIL.NEW_EMAIL.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="SETTINGS.CHANGE_EMAIL.PASSWORD.TITLE"
          placeholderTid="SETTINGS.CHANGE_EMAIL.PASSWORD.PLACEHOLDER"
        />
      </FieldLayout>
      <Submit tid="SETTINGS.CHANGE_EMAIL.SUBMIT" />
    </IndentLayout>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
  color: ${THEME_COLOR.TEXT.GRAY};
`;
