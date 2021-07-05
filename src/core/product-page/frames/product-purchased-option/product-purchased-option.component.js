import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';

export function ProductPurchasedOptionComponent(props) {
  const { optionItem } = props;
  return optionItem.map(({ title, value }) => (
    <Container>
      <Line>
        <TextSecondary>{title}:</TextSecondary>
        <TextPrimary tid={value} />
      </Line>
    </Container>
  ));
}
const TextPrimary = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
