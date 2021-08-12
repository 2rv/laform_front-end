import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function CardImage({ image, bestseller, action }) {
  return (
    <Container>
      <Image src={image} />
      <ModifierContainer>
        {action && <Modifier tid={'Акция'} />}
        {bestseller && <Modifier alt tid={'Хит'} />}
      </ModifierContainer>
    </Container>
  );
}
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 0;
`;

const ModifierContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  flex-direction: column;
  gap: ${spacing(0.5)};
`;
const Modifier = styled(TextSecondary)`
  background-color: ${({ alt }) =>
    alt ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.PRIMARY_DARK};
  color: ${THEME_COLOR.WHITE};
  width: 97px;
  padding: ${spacing(1.6)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
