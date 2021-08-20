import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { CardActions } from './card-actions';
import { LinkPrimary } from '../link';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../../../core/sewing-goods-product';

export function CardSewingGoods(props) {
  const {
    id,
    image = null,
    name = null,
    select = false,
    like = false,
    bestseller = false,
    price = { min: null, discount: null, max: null },
  } = props.data;

  return (
    <Container>
      <CardImage
        path={SEWING_GOODS_PRODUCT_ROUTE_PATH}
        pathConfig={{ query: { id: id } }}
        image={image}
        bestseller={bestseller}
        action={price?.discount}
      />
      <Content>
        <CardName tid={name} />
        <Price
          min={price?.min}
          max={price?.max}
          discount={price?.discount}
          valute="OTHER.VALUTE"
        />
      </Content>
      <CardActions select={select} like={like} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  flex: 1;
  justify-content: space-between;
`;
const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;
