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
    <Container>
      <ImageList>
        {images.map((src, index) => (
          <ImageItem
            key={index}
            onClick={() => setSlide(index)}
            active={slide === index}
            src={src}
          />
        ))}
      </ImageList>
      <Content>
        <MainImage src={images[slide]} />
        <Action onClick={prev} icon={ArrowLeft} />
        <Action onClick={next} rigth icon={ArrowRight} />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  gap: ${spacing(3)};
  display: grid;
  grid-template-columns: 68px auto;
`;
const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const ImageItem = styled.img`
  ${({ active }) => active && `border: 3px solid ${THEME_COLOR.PRIMARY};`}
  cursor: pointer;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const MainImage = styled.img`
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const Action = styled(ButtonBasic)`
  position: absolute;
  background: none;
  ${({ rigth }) => `${rigth ? 'right' : 'left'}: ${spacing(6)}`}
`;
