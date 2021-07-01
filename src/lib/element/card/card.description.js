import styled from 'styled-components';
import { Price } from '../price';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function CardDescription({ name, price = null, complexity, discount }) {
  return (
    <Container>
      <CardName tid={name} />
      <FlexContainer>
        {price && (
          <Price
            min={price?.min}
            max={price?.max}
            discount={discount}
            valute="OTHER.VALUTE"
          />
        )}
        {complexity && (
          <ComplexityContainer>
            {[1, 2, 3, 4, 5].map((i) => (
              <ComplexityDot
                key={i}
                complexity={i <= complexity || i == complexity}
              />
            ))}
          </ComplexityContainer>
        )}
      </FlexContainer>
    </Container>
  );
}
const FlexContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 1295px) {
    flex-direction: column;
  }
`;
const CardName = styled(TextSecondary)`
  display: flex;
  flex-grow: 1;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  word-break: break-word;
`;
const Container = styled.div`
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
  background-color: ${({ complexity }) => {
    return complexity ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY;
  }};
`;
