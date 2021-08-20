import { useState } from 'react';
import { spacing, THEME_SIZE } from '../../lib/theme';
import styled, { css } from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../asset/svg/arrow-slider-right.svg';
import { ButtonBasic } from '../../lib/element/button';
import { THEME_COLOR } from '../../lib/theme';

export function GalleryBlock(props) {
  const { items = [] } = props;
  if (!items) return null;
  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? items.length - 1 : slide - 1);
  };
  const next = () => {
    setSlide(slide === items.length - 1 ? 0 : slide + 1);
  };
  return (
    <Container>
      <List>
        {items.map((src, index) => (
          <ListItem
            key={index}
            active={slide === index}
            onClick={() => setSlide(index)}
          >
            <Image src={src} />
          </ListItem>
        ))}
      </List>
      <Content>
        <MainImage src={items[slide]} />
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
  grid-template-columns: 68px minmax(469px, 1fr);
  gap: ${spacing(3)};
  min-height: 0;
  height: 100%;
  max-height: 470px;
  width: 100%;
  @media screen and (max-width: 1070px) {
    grid-template-columns: minmax(100px, 300px) 1fr;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-height: inherit;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  overflow: auto;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const ListItem = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 68px;
  width: 100%;
  @media screen and (max-width: 1070px) {
    height: 200px;
  }
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  ${(p) =>
    p.active &&
    css`
      border-color: ${THEME_COLOR.PRIMARY};
    `}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MainImage = styled.img`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Action = styled(ButtonBasic)`
  z-index: 1;
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
