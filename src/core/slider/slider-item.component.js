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
  return (
    <Container className="keen-slider__slide">
      <Content>
        <Title color={
            titleTextColor === '0' ? 'white'
          : titleTextColor === '1' ? 'black'
          : titleTextColor === '2' ? 'red'
          : titleTextColor === '3' ? 'green'
          : titleTextColor === '4' ? 'blue'
          : ''
        }>{titleText}</Title>
        {isButton && (
          <LinkPrimary path={buttonPath}>
            <Button
              bgcolor={
                  buttonColor === '0' ? 'orange'
                : buttonColor === '1' ? 'blue'
                : buttonColor === '2' ? 'white'
                : buttonColor === '3' ? 'red'
                : buttonColor === '4' ? 'yellow'
                : ''
              }
              color={
                  buttonTextColor === '0' ? 'blue'
                : buttonTextColor === '1' ? 'gray'
                : buttonTextColor === '2' ? 'red'
                : buttonTextColor === '3' ? 'red'
                : buttonTextColor === '4' ? 'purple'
                : ''
              }
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
