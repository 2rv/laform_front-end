import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR } from 'src/lib/theme';

export function CardImage({ backgroundImage, bestseller, discount }) {
  return (
    <Container>
      <Image src={backgroundImage} />
      <ModifierContainer>
        {discount && <Modifier tid={'Акция'} />}
        {bestseller && <Modifier alt={true} tid={'Хит'} />}
      </ModifierContainer>
    </Container>
  );
}
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 260px;
  max-width: 360px;
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
  color: ${THEME_COLOR.TEXT.WHITE};
  width: 97px;
  padding: ${spacing(1.6)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
