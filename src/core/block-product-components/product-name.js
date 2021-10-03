import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, spacing } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';

export function ProducName(props) {
  const { name, modifier, discount } = props;

  if (!name) return null;

  return (
    <Container>
      <Title tid={name} />
      {Boolean(modifier) && <Modifier alt tid={modifier} />}
      {Boolean(discount !== 0) && <Modifier tid="PRODUCT_PRICE.STOCK" />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  ::first-letter {
    text-transform: uppercase;
  }
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
  ::first-letter {
    text-transform: uppercase;
  }
`;
