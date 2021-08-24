import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';

export function NotificationHeaderComponent() {
  return (
    <div>
      <TitlePrimary tid="NOTIFICATION.PRE_CTA" />
      &nbsp;
      <BoldTitle tid="NOTIFICATION.CTA" />
    </div>
  );
}
const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
