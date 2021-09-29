import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { LinkPrimary } from '../link';

export function CardImage({ image, bestseller, action, path, pathConfig }) {
  const [imageLoaded, setimageLoaded] = useState(false);
  return (
    <Container path={path} pathConfig={pathConfig}>
      {!imageLoaded && <SkeletonImage />}
      <Image onLoad={() => setimageLoaded(true)} src={image} />
      <ModifierContainer>
        {action ? <Modifier tid="PRODUCT_PRICE.STOCK" /> : null}
        {bestseller && <Modifier alt tid={bestseller} />}
      </ModifierContainer>
    </Container>
  );
}
const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 260px;
  max-height: 260px;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled(LinkPrimary)`
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
  min-width: 97px;
  flex-direction: column;
  gap: ${spacing(2)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Modifier = styled(TextSecondary)`
  background-color: ${({ alt }) =>
    alt ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.PRIMARY_DARK};
  color: ${THEME_COLOR.WHITE};
  padding: ${spacing(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const animation = keyframes`
    0% {
      background-position: -600px;
    }
    100% {
      background-position: 600px;
    }
`;
const SkeletonImage = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  min-width: 360px;
  height: 260px;
  background-color: #ccc;
  animation: ${animation} 1.6s infinite linear;
`;
