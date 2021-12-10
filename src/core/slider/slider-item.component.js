import React from 'react';
import styled from 'styled-components';
import 'keen-slider/keen-slider.min.css';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { text } from 'src/lib/common/text';
import { ButtonBasic } from 'src/lib/element/button';
import { SLIDER_COLORS } from 'src/lib/basic-types';

export function SliderItemComponent(props) {
  const {
    titleText,
    titleTextColor,
    buttonText,
    buttonTextColor,
    buttonColor,
    isButton,
    buttonPath,
    image,
  } = props;

  return (
    <Container className="keen-slider__slide">
      <Content>
        <Title color={SLIDER_COLORS[titleTextColor]}>{titleText}</Title>
        {isButton && (
          <LinkPrimary path={buttonPath}>
            <Button
              bgcolor={SLIDER_COLORS[buttonColor]}
              color={SLIDER_COLORS[buttonTextColor]}
            >
              {buttonText}
            </Button>
          </LinkPrimary>
        )}
      </Content>
      <Image src={image} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 350px;
  > * {
    grid-area: 1/-1;
  }
`;
const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  filter: drop-shadow(0px 15px 75px rgba(0, 0, 0, 0.1));
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  user-select: none;
  pointer-events: none;
`;
const Title = styled(TextPrimary)`
  text-align: center;
  color: ${(p) => p.color};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.25em;
  @media screen and (max-width: 500px) {
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
`;
const Button = styled(ButtonBasic)`
  min-width: 200px;
  color: ${(p) => p.color};
  background-color: ${(p) => p.bgcolor};
`;
