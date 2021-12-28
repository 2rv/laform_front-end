import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, spacing } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';

type ProducNameProps = {
  name: string;
  discount?: boolean;
  modifier?: string;
};

export function ProducName(props: ProducNameProps) {
  const { name, modifier, discount } = props;

  return (
    <Container>
      <Title tid={name} />
      {Boolean(modifier) && <Modifier alt tid={modifier} />}
      {discount && <Modifier tid="PRODUCT_PRICE.STOCK" />}
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
const Modifier = styled(TextSecondary)<{ alt?: boolean }>`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  ::first-letter {
    text-transform: uppercase;
  }
  color: ${(p) => (p.alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
  ::first-letter {
    text-transform: uppercase;
  }
`;
