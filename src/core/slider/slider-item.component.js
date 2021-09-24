import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { LinkPrimary } from '../../lib/element/link';
import { text } from '../../lib/common/text';
import { ButtonBasic } from '../../lib/element/button';
import 'keen-slider/keen-slider.min.css';

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

  const sliderItemsColor = (item) => {
    return item === '0'
      ? '#2F2A2C'
      : item === '1'
      ? '#5F5B5D'
      : item === '2'
      ? '#8F8D8E'
      : item === '3'
      ? '#FFFFFF'
      : item === '4'
      ? '#F0F0F0'
      : item === '5'
      ? '#FF005A'
      : item === '6'
      ? '#7C1C3E'
      : '';
  };

  return (
    <Container className="keen-slider__slide">
      <Content>
        <Title color={sliderItemsColor(titleTextColor)}>
          {titleText}
        </Title>
        {isButton && (
          <LinkPrimary path={buttonPath}>
            <Button
              bgcolor={sliderItemsColor(buttonColor)}
              color={sliderItemsColor(buttonTextColor)}
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  min-width: 100%;
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6.3)};
  margin: 0 36px;
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
const Image = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  user-select: none;
  pointer-events: none;
`;
