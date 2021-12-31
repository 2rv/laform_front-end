import { MouseEvent, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ButtonBasic } from 'src/lib/element/button';
import { ReactComponent as ArrowLeft } from 'src/asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from 'src/asset/svg/arrow-slider-right.svg';
import { SliderItemComponent } from './slider.item';
import { SliderComponentProps } from './slider.type';

export function SliderComponent(props: SliderComponentProps) {
  const {
    state: { pending, slidersData },
    lang,
  } = props;

  if (pending) {
    return <SliderSkeleton />;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  function nextSlide(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    slider.next();
  }
  function prevSlide(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    slider.prev();
  }

  return (
    <Container>
      <div ref={sliderRef} className="keen-slider">
        {slidersData.map((data) => (
          <div className="keen-slider__slide">
            <SliderItemComponent lang={lang} key={data.id} data={data} />
          </div>
        ))}
      </div>
      <Button onClick={prevSlide}>
        <ArrowLeft />
      </Button>

      <Button onClick={nextSlide} right>
        <ArrowRight />
      </Button>

      <Dots>
        {slidersData.map((_, i) => (
          <Dot
            key={i}
            active={currentSlide === i}
            onClick={() => slider.moveToSlideRelative(i)}
          />
        ))}
      </Dots>
    </Container>
  );
}

const skeletonAnimation = keyframes`
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 2000px;
    }
`;
const SliderSkeleton = styled.div`
  width: 100%;
  height: 350px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 40px);
  background-size: 2000px;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;
const Container = styled.div`
  position: relative;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Button = styled(ButtonBasic)<{ right?: boolean }>`
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
const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.WHITE};
  opacity: ${(P) => (P.active && 1) || 0.5};
`;
