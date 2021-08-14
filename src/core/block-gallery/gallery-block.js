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
  height: 100%;
  width: 100%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const ListItem = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 68px;
  width: 100%;
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
const Content = styled.div`
  display: grid;
  align-items: center;
  position: relative;
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
