import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { Price } from '../price';
import { CardAction } from './card-action.component';
import { CardDescription } from './card-description.component';
import { CardImage } from './card-image.component';

export function BasicCard(props) {
  const {
    id,
    name = null,
    complexity = false,
    selected = false,
    Purchased = false,
    price = { max: 0, min: 0 },
    isLiked = false,
    hit = false,
    discount = 0,
    backgroundImage,
    actions = [null, null],
  } = props;

  const isActived = Purchased || selected;
  return (
    <Container>
      <CardImage
        backgroundImage={backgroundImage}
        hit={hit}
        discount={discount}
      />
      <CardDescription
        name={name}
        price={price}
        discount={discount}
        difficulty={complexity}
      />
      <CardAction isLiked={isLiked} isActived={isActived} actions={actions} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  width: 100%;
  min-height: max-content;
  gap: ${spacing(3)};
`;
