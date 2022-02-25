import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { LinkPrimary } from '../link';
import { CardImageProps } from './card.type';

function ImageBlock(props: { src: any }) {
  const { src } = props;

  if (!src) {
    return (
      <BackgroudBlock>
        <TextSecondary tid="Изображение отсутствует" />
      </BackgroudBlock>
    );
  }

  return (
    <ImageCase>
      <StyledImage
        loader={({ src }) => src}
        layout="fill"
        placeholder="blur"
        src={src}
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iYXV0byIgaGVpZ2h0PSJhdXRvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgPHN0b3Agc3RvcC1jb2xvcj0iI2NjYyIgb2Zmc2V0PSIyMCUiIC8+CiAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZGRkIiBvZmZzZXQ9IjUwJSIgLz4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNjY2MiIG9mZnNldD0iNzAlIiAvPgogIDwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjYyIgLz4KPHJlY3QgaWQ9InIiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiIC8+CjxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItMTAwJSIgdG89IjEwMCUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAgLz4KPC9zdmc+"
      />
    </ImageCase>
  );
}
const ImageCase = styled.div`
  min-height: 360px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const StyledImage = styled(Image)<ImageProps>`
  object-fit: contain;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const BackgroudBlock = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  min-width: 360px;
  width: 100%;
  height: 100%;
  min-height: 360px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function CardImage(props: CardImageProps) {
  const {
    image,
    modifier,
    discount,
    deleted,
    path,
    pathConfig,
    isCreateList = false,
  } = props;

  return (
    <Container path={path} pathConfig={pathConfig}>
      <ImageBlock src={image} />

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
          <Modifier bgColor={THEME_COLOR.PRIMARY} tid={modifier} />
        )}
      </Case>
    </Container>
  );
}

const Container = styled(LinkPrimary)`
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
