import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { TitlePrimary } from 'src/lib/element/title';

export function NotificationHeaderComponent() {
  return (
    <div>
      <Title tid="NOTIFICATION.PRE_CTA" />
      &nbsp;
      <BoldTitle tid="NOTIFICATION.CTA" />
    </div>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const BoldTitle = styled(Title)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
