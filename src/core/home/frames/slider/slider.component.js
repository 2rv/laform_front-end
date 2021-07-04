import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../../../asset/svg/arrow-slider-right.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { ButtonBasic } from '../../../../lib/element/button';
import { SliderItemComponent } from './slider-item.component';

export function SliderComponent(props) {
  const { sliderData } = props;
  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? sliderData.length - 1 : slide - 1);
  };
  const next = () => {
    setSlide(slide === sliderData.length - 1 ? 0 : slide + 1);
  };
  return (
    <Container>
      <Action onClick={prev} icon={ArrowLeft} />
      <Action onClick={next} rigth icon={ArrowRight} />
      <SliderItemComponent {...sliderData[slide]} />
      <SliderDot>
        {sliderData.map((x, i) => (
          <SliderDotItem key={i} active={slide === i} />
        ))}
      </SliderDot>
    </Container>
  );
}
const Container = styled.div`
  height: 360px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const SliderDot = styled.div`
  position: absolute;
  display: flex;
  width: max-content;
  bottom: ${spacing(9)};
  gap: ${spacing(2)};
`;
const Action = styled(ButtonBasic)`
  position: absolute;
  background: none;
  ${({ rigth }) => `${rigth ? 'right' : 'left'}: ${spacing(10)}`}
`;
const SliderDotItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.BACKGROUND.WHITE};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
