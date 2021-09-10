import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { CardPrice } from './card-price';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { CardActions } from './card-actions';
import { SectionLayout } from '../layout';
import { LinkPrimary } from '../link';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../../../core/master-class-product';

export function CardMasterClasses(props) {
  const { onSetCart, onSetLike, onSetSelect, onDeleteProduct, isAdmin } = props;
  const {
    id,
    type,

    selected,
    cart,
    purchase,
    like,

    image = null,
    name = null,
    bestseller = false,
    price = { min: null, discount: null, max: null },
  } = props.data;
  return (
    <Container>
      <CardImage
        path={MASTER_CLASS_PRODUCT_ROUTE_PATH}
        pathConfig={{ query: { id: id } }}
        image={image}
        bestseller={bestseller}
        action={price?.discount}
      />
      <Content>
        <CardName tid={name} />
        <CardPrice
          min={price?.min}
          max={price?.max}
          discount={price?.discount}
        />
      </Content>
      <CardActions
        id={id}
        type={type}
        like={like}
        selected={selected}
        purchase={purchase}
        cart={cart}
        onSetCart={onSetCart}
        onSetLike={onSetLike}
        onSetSelect={onSetSelect}
        onDeleteProduct={onDeleteProduct}
        isAdmin={isAdmin}
      />
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
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  gap: ${spacing(3)};
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
