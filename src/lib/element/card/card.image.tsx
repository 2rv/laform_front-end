import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { LinkPrimary } from '../link';
import { CardImageProps } from './card.type';

export function CardImage(props: CardImageProps) {
  const {
    image,
    modifier,
    discount,
    deleted,
    path,
    pathConfig,
    isCreateList = false,
    modifierColor = THEME_COLOR.PRIMARY,
  } = props;
  const [imageLoaded, setimageLoaded] = useState(false);
  return (
    <Container path={path} pathConfig={pathConfig}>
      {!imageLoaded && <SkeletonImage />}
      <Image onLoad={() => setimageLoaded(true)} src={image} />

      <Case>
        {isCreateList &&
          (deleted ? (
            <Modifier
              bgColor={THEME_COLOR.BACKGROUND.DANGER}
              color={THEME_COLOR.TEXT.DANGER}
              tid="PRODUCT_PRICE.DISABLED"
            />
          ) : (
            <Modifier
              bgColor={THEME_COLOR.BACKGROUND.SUCCESS}
              color={THEME_COLOR.TEXT.SUCCESS}
              tid="PRODUCT_PRICE.ENABLED"
            />
          ))}
        {Boolean(discount) && <Modifier tid="PRODUCT_PRICE.STOCK" />}
        {Boolean(modifier) && (
          <Modifier bgColor={modifierColor} tid={modifier} />
        )}
      </Case>
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 260px;
  max-height: 500px;
  object-fit: contain;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled(LinkPrimary)<any>`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 0;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Case = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 97px;
  flex-direction: column;
  gap: ${spacing(2)};
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
  width: 100%;
  height: 100%;
  min-height: 360px;
  max-height: 500px;
  background-color: #ccc;
  animation: ${animation} 1.6s infinite linear;
`;
const Modifier = styled(TextSecondary)<{ bgColor?: string; color?: string }>`
  background-color: ${(p) =>
    p.bgColor ? p.bgColor : THEME_COLOR.PRIMARY_DARK};
  color: ${(p) => (p.color ? p.color : THEME_COLOR.WHITE)};
  ::first-letter {
    text-transform: uppercase;
  }
  padding: ${spacing(2)};
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
