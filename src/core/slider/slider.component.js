import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ButtonBasic } from '../../lib/element/button';
import { ReactComponent as ArrowLeft } from '../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../asset/svg/arrow-slider-right.svg';
import { SliderItemComponent } from './slider-item.component';
import 'keen-slider/keen-slider.min.css';

export function SliderComponent({ sliders }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Container>
      <Button onClick={(e) => e.stopPropagation() || slider.prev()}>
        <ArrowLeft />
      </Button>

      <Button onClick={(e) => e.stopPropagation() || slider.next()} right>
        <ArrowRight />
      </Button>

      <div ref={sliderRef} className="keen-slider">
        {sliders.map((data) => (
          <SliderItemComponent key={data.id} {...data} />
        ))}
      </div>
      <Dots>
        {sliders.map((_, i) => (
          <Dot key={i} active={currentSlide === i} onClick={() => slider.moveToSlideRelative(i)} />
        ))}
      </Dots>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const Button = styled(ButtonBasic)`
  z-index: 1;
  width: fit-content;
  background: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
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
  justify-content: center;
  width: 100%;
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
