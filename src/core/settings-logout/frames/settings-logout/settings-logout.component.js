import styled from 'styled-components';

import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';
import { THEME_SIZE } from '../../../../lib/theme';

export function AuthVerificateEmailComponent(props) {
  return (
    <IndentLayout type="small">
      <Title tid="SETTINGS.LOGOUT.TITLE" />
      <Button tid="SETTINGS.LOGOUT.SUBMIT" />
    </IndentLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Button = styled(ButtonSecondary)`
  width: 50%;
`;
