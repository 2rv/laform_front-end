import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';

export function NotificationHeaderComponent() {
  return (
    <CTAContainer>
      <PreCTAText tid="NOTIFICATION.PRE_CTA" />
      <CTAText tid="NOTIFICATION.CTA" />
    </CTAContainer>
  );
}

const CTAContainer = styled.div`
  display: grid;
  gap: ${spacing(4)};
  white-space: nowrap;
`;

const PreCTAText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const CTAText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
