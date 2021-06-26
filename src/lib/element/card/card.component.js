import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
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
    favorite = false,
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
      <ProductName>{name}</ProductName>
      <CardDescription
        price={price}
        discount={discount}
        difficulty={complexity}
      />
      <CardAction isActived={isActived} actions={actions} />
    </Container>
  );
}
const ProductName = styled(TextSecondary)`
  display: flex;
  flex-grow: 1;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  width: 100%;
  word-break: break-word;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  gap: ${spacing(3)};
  min-height: max-content;
`;
