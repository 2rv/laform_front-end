import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, ButtonBasic, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { CardActions } from './card-actions';
import { LinkPrimary } from '../link';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../../../core/patterns-product';

export function CardPattern(props) {
  const {
    id,
    image = null,
    name = null,
    complexity = false,
    select = false,
    like = false,
    bestseller = false,
    patternType = null,
    price = { min: null, discount: null, max: null },
  } = props.data;

  return (
    <Container>
      <CardImage
        path={PATTERNS_PRODUCT_ROUTE_PATH}
        pathConfig={{ query: { id: id } }}
        image={image}
        bestseller={bestseller}
        action={price?.discount}
      />
      <Content>
        <CardName tid={name} />
        <LineCase>
          <Price
            min={price?.min}
            max={price?.max}
            discount={price?.discount}
            valute="OTHER.VALUTE"
          />
          <ItemCase>
            {[1, 2, 3, 4, 5].map((rate, index) => (
              <ComplexityDot key={index} act={rate <= complexity ? 1 : 0} />
            ))}
          </ItemCase>
        </LineCase>
      </Content>
      <CardActions select={select} like={like} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 360px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const ItemCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const ComplexityDot = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
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
