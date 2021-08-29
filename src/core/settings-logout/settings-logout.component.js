import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';

export function SettingsLogutComponent(props) {
  return (
    <SectionLayout type="SMALL">
      <Title tid="SETTINGS.LOGOUT.TITLE" />
      <FieldLayout type="double" adaptive>
        <ButtonSecondary onClick={props.onClick} tid="SETTINGS.LOGOUT.BUTTON" />
      </FieldLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
