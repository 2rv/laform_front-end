import { useState } from 'react';
import { spacing } from 'src/lib/theme';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../../../asset/svg/arrow-slider-right.svg';
import { BannerItemComponent } from './banner-item.component';
import { ButtonBasic } from 'src/lib/element/button';
export function BannerComponent(props) {
  const { items } = props;
  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? 0 : slide - 1);
  };
  const next = () => {
    setSlide(slide === items.length - 1 ? slide : slide + 1);
  };
  return (
    <Container>
      <Action onClick={prev} icon={ArrowLeft} />
      <Action onClick={next} direction="right" icon={ArrowRight} />
      <BannerItemComponent {...items[slide]} />
      <BannerDot>
        {items.map((x, i) => (
          <DotItem key={i} active={slide === i} />
        ))}
      </BannerDot>
    </Container>
  );
}
const Container = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const BannerDot = styled.div`
  display: flex;
  position: absolute;
  gap: ${spacing(2)};
  bottom: 15%;
`;
const DotItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
const Action = styled(ButtonBasic)`
  z-index: 1;
  background: none;
  position: absolute;
  ${({ direction = 'left' }) => `${direction}: 3%`}
`;
