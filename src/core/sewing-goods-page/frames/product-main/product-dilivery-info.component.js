import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../../lib/element/text';
import { SectionLayout } from '../../../../lib/element/layout';

export function ProductDiliveryInfo(props) {
  const { adress, paymentMethod, status } = props;

  return (
    <SectionLayout type="TEXT">
      <TextSecondary>
        <TextSecondary tid="Адрес доставки" />: &nbsp;
        <TextPrimary tid={adress} />
      </TextSecondary>
      <TextSecondary>
        <TextSecondary tid="Способ оплаты" />: &nbsp;
        <TextPrimary tid={paymentMethod} />
      </TextSecondary>
      <TextSecondary>
        <TextSecondary tid="Состояние" />: &nbsp;
        <ColoredText tid={status} />
      </TextSecondary>
    </SectionLayout>
  );
}
const ColoredText = styled(TextPrimary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
