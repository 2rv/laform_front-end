import { ButtonPrimary, ButtonBasic } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { Price } from '../../../../lib/element/price';
import { ReactComponent as FavoriteIcon } from '../../../../asset/svg/favorite-icon.svg';
export function PopularGodsItemComponent(props) {
  const {
    id,
    name,
    complexity = 0,
    selected,
    price,
    favorite,
    hit,
    discount,
    backgroundImage,
  } = props;

  return (
    <Container>
      <ImageContainer>
        <BackgroundImage src={backgroundImage} />
        {(hit || favorite) && (
          <Modifier hit={hit} tid={hit ? 'Хит' : 'Акция'} />
        )}
      </ImageContainer>
      <ProductName>{name}</ProductName>
      <FlexContainer>
        <Price
          min={price?.min}
          max={price?.max}
          discount={discount}
          valute="OTHER.VALUTE"
        />
        <ComplexityContainer>
          {[1, 2, 3, 4, 5].map((i) => (
            <ComplexityDot x={i <= complexity} />
          ))}
        </ComplexityContainer>
      </FlexContainer>
      <FlexContainer>
        <Button
          sel={selected}
          tid={selected ? 'OTHER.SELECTED' : 'OTHER.SELECT'}
        />
        <FavoriteButton sel={selected} icon={FavoriteIcon} />
      </FlexContainer>
    </Container>
  );
}
const FlexContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const ComplexityDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${({ x }) =>
    x ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
const ComplexityContainer = styled(FlexContainer)`
  height: 100%;
  width: max-content;
  gap: ${spacing(2)};
`;
const FavoriteButton = styled(ButtonBasic)`
  margin: 0;
  background-color: ${({ sel }) =>
    sel ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const Button = styled(ButtonPrimary)`
  width: 165px;
  padding: ${spacing(3)};
  ${({ sel }) => sel && `background-color: ${THEME_COLOR.SECONDARY}`}
`;
const Container = styled(FlexContainer)`
  flex-direction: column;
  height: 391px;
  width: 360px;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 260px;
  width: 100%;
`;
const Modifier = styled(TextSecondary)`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({ hit }) =>
    hit ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.PRIMARY_DARK};
  color: ${THEME_COLOR.TEXT.WHITE};
  width: 97px;
  padding: ${spacing(1.6)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
`;
const ProductName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
