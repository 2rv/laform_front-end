import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../../lib/element/text';
import { SectionLayout } from '../../../../lib/element/layout';

export function ProductDiliveryInfo(props) {
  const { address, paymentMethod, status } = props;

  return (
    <SectionLayout type="TEXT">
      {Boolean(address) && (
        <TextSecondary>
          <TextSecondary tid="PROFILE.DELIVERY_ADDRESS" />: &nbsp;
          <TextPrimary tid={address} />
        </TextSecondary>
      )}
      {Boolean(paymentMethod) && (
        <TextSecondary>
          <TextSecondary tid="PROFILE.PAYMENT_METHOD" />: &nbsp;
          <TextPrimary tid={paymentMethod} />
        </TextSecondary>
      )}
      {Boolean(status) && (
        <TextSecondary>
          <TextSecondary tid="PROFILE.STATE" />: &nbsp;
          <ColoredText tid={status} />
        </TextSecondary>
      )}
    </SectionLayout>
  );
}
const ColoredText = styled(TextPrimary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
