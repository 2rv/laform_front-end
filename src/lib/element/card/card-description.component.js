import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { Price } from '../price';
import styled from 'styled-components';

export function CardDescription({ price, difficulty, discount }) {
  return (
    <FlexContainer>
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
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
  min-height: max-content;
  width: 260px;
  max-width: 360px;
  @media screen and (max-width: 1295px) {
    flex-direction: column;
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
