import styled, { css } from 'styled-components';
import { useState } from 'react';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { ReactComponent as ArrowLeft } from 'src/asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from 'src/asset/svg/arrow-slider-right.svg';
import { ButtonBasic } from 'src/lib/element/button';
import { THEME_COLOR } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';

export function ProductImages(props: { images: string[] }) {
  const { images = [] } = props;
  console.log(images, images.length);

  const [slide, setSlide] = useState(0);

  const prev = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  const next = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  return !images.length ? (
    <BackgroudBlock>
      <TextSecondary tid="Изображения отсутствует" />
    </BackgroudBlock>
  ) : (
    <Container>
      <List>
        {images.map((src, index) => (
          <ImageCase
            key={index}
            active={slide === index}
            onClick={() => setSlide(index)}
          >
            <Image active={slide === index} src={src} />
          </ImageCase>
        ))}
      </List>
      <Content>
        <MainImage src={images[slide]} />
        <Action onClick={prev}>
          <ArrowLeft />
        </Action>
        <Action onClick={next} right>
          <ArrowRight />
        </Action>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
  min-height: 0;
  height: 100%;
  max-height: 484px;
  width: 100%;
  grid-template-columns: 68px 1fr;
  @media screen and (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const List = styled.div`
  display: grid;
  height: 100%;
  gap: ${spacing(3)};
  overflow: hidden;
  grid-template-rows: repeat(6, 68px);
  @media screen and (max-width: 1070px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 239.5px);
    gap: ${spacing(1)};
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const ImageCase = styled.div<{ active: boolean }>`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  ${(p) =>
    p.active &&
    css`
      border-color: ${THEME_COLOR.PRIMARY};
    `}
`;
const Image = styled.img<{ active: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  ${(p) =>
    p.active &&
    css`
      border-radius: 0;
    `}
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 0;
  height: 484px;
`;
const MainImage = styled.img`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const BackgroudBlock = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
  height: 484px;
`;
const Action = styled(ButtonBasic)<{ right?: boolean }>`
  z-index: 1;
  width: auto;
  background: none;
  position: absolute;
  ${(p) => {
    return p.right
      ? css`
          right: ${spacing(2)};
        `
      : css`
          left: ${spacing(2)};
        `;
  }}
`;
