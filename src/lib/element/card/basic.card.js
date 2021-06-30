import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { Price } from '../price';
import { CardButton } from './card.button';
import { CardDescription } from './card.description';
import { CardImage } from './card.image';

export function BasicCard(props) {
  const {
    id,
    name = null,
    complexity = false,
    selected = false,
    Purchased = false,
    price = { max: null, min: null },
    isLiked = false,
    bestseller = false,
    discount = false,
    backgroundImage = null,
    actions = [null, null],
  } = props;

  const actived = Purchased || selected;

  return (
    <Container>
      <CardImage
        backgroundImage={backgroundImage}
        bestseller={bestseller}
        discount={discount}
      />
      <CardDescription
        name={name}
        price={price}
        complexity={complexity}
        discount={discount}
      />
      <CardButton liked={isLiked} actived={actived} actions={actions} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 360px;
  gap: ${spacing(3)};
`;
