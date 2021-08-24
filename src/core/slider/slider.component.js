import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { LinkPrimary } from '../../lib/element/link';
import { text } from '../../lib/common/text';
import { ButtonPrimary, ButtonBasic } from '../../lib/element/button';
import { SLIDER_DATA_KEY } from './slider.type';
import { ReactComponent as ArrowLeft } from '../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../asset/svg/arrow-slider-right.svg';
import { LoaderPrimary } from '../../lib/element/loader';
import { ErrorAlert } from '../../lib/element/alert';
import { SliderSkeleton } from '../../lib/element/skeleton';
import { SliderItemComponent } from './slider-item.component';
import 'keen-slider/keen-slider.min.css';

export function SliderComponent(props) {
  const {
    items,
    slide,
    prev,
    next,
    setSlide,
    sliderRef,
    pDisabled,
    nDisabled,
    isPending,
    isError,
    errorMessage,
  } = props;
  return (
    <>
      {isPending && <LoaderPrimary />}
      {isError && errorMessage ? (
        <ErrorAlert tid={errorMessage} />
      ) : items ? (
        <Container>
          <Button onClick={prev}>
            <ArrowLeft />
          </Button>

          <Button onClick={next} right>
            <ArrowRight />
          </Button>

          <div ref={sliderRef} className="keen-slider">
            {items.map((data, index) => (
              <SliderItemComponent data={data} index={index} />
            ))}
          </div>
          <Dots>
            {items.map((_, i) => (
              <Dot key={i} active={slide === i} onClick={() => setSlide(i)} />
            ))}
          </Dots>
        </Container>
      ) : (
        <SliderSkeleton />
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 350px;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  align-items: center;
`;
const Button = styled(ButtonBasic)`
  z-index: 1;
  width: fit-content;
  background: none;
  position: absolute;
  ${(p) =>
    p.right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`;
const Dots = styled.div`
  display: flex;
  position: absolute;
  gap: ${spacing(2)};
  bottom: ${spacing(6)};
  @media screen and (max-width: 500px) {
    bottom: ${spacing(2)};
  }
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.WHITE};
  opacity: ${(P) => (P.active && 1) || 0.5};
`;
