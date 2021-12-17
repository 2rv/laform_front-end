import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { THEME_SIZE } from 'src/lib/theme';

export function SettingsLogutComponent(props: { onClick: () => void }) {
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
