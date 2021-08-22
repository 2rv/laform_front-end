import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';

export function SettingsLogutComponent(props) {
  return (
    <SectionLayout type="SMALL">
      <Title tid="Выйти из аккаунта" />
      <FieldLayout type="double" adaptive>
        <ButtonSecondary tid="Выйти" />
      </FieldLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
