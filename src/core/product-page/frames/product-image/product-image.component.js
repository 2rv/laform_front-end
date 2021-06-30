import { useState } from 'react';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from 'src/asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from 'src/asset/svg/arrow-slider-right.svg';
import { ButtonBasic } from 'src/lib/element/button';
import { THEME_COLOR } from '../../../../lib/theme';

export function ProductImageComponent(props) {
  const { images } = props;
  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };
  const next = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };
  return (
    <ImageContainer>
      <ImageList>
        {images.map((src, index) => (
          <Image
            onClick={() => setSlide(index)}
            active={slide === index}
            src={src}
          />
        ))}
      </ImageList>
      <Container>
        <MainImage src={images[slide]} />
        <Action onClick={prev} icon={ArrowLeft} />
        <Action onClick={next} direction="right" icon={ArrowRight} />
      </Container>
    </ImageContainer>
  );
}
const ImageContainer = styled.div`
  gap: ${spacing(3)};
  display: flex;
`;
const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const MainImage = styled.img`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Image = styled.img`
  ${({ active }) => active && `border: 3px solid ${THEME_COLOR.PRIMARY};`}
  cursor: pointer;
  width: 71px;
  height: 71px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled.div`
  width: 469px;
  height: 555px;
  display: flex;
  position: relative;
  align-items: center;
`;
const Action = styled(ButtonBasic)`
  z-index: 1;
  background: none;
  position: absolute;
  ${({ direction = 'left' }) => `${direction}: ${spacing(3)}`}
`;
