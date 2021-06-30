import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { Price } from '../price';
import styled from 'styled-components';

export function CardDescription({ name, price, difficulty, discount }) {
  return (
    <FlexContainer>
      <ProductName>{name}</ProductName>
      <Container>
        <Price
          min={price?.min}
          max={price?.max}
          discount={discount}
          valute="OTHER.VALUTE"
        />
        {difficulty && (
          <ComplexityContainer>
            {[1, 2, 3, 4, 5].map((i) => (
              <ComplexityDot x={i <= difficulty} />
            ))}
          </ComplexityContainer>
        )}
      </Container>
    </FlexContainer>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 1295px) {
    flex-direction: column;
  }
`;
const ProductName = styled(TextSecondary)`
  display: flex;
  flex-grow: 1;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  word-break: break-word;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: ${spacing(3)};
  min-height: max-content;
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 1295px) {
    width: 260px;
  }
`;
const ComplexityContainer = styled.div`
  gap: ${spacing(2)};
  display: flex;
`;
const ComplexityDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${({ x }) =>
    x ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
