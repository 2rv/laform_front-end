import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

export function CardImage({ backgroundImage, hit, discount }) {
  return (
    <ImageContainer>
      <BackgroundImage src={backgroundImage} />
      <ModifierContainer>
        {hit && <Modifier hit={hit} tid={'Хит'} />}
        {discount && <Modifier tid={'Акция'} />}
      </ModifierContainer>
    </ImageContainer>
  );
}
const BackgroundImage = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  height: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 260px;
  height: 100%;
`;
const ModifierContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  width: max-content;
  flex-direction: column;
  gap: ${spacing(0.5)};
`;
const Modifier = styled(TextSecondary)`
  background-color: ${({ hit }) =>
    hit ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.PRIMARY_DARK};
  color: ${THEME_COLOR.TEXT.WHITE};
  width: 97px;
  padding: ${spacing(1.6)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
