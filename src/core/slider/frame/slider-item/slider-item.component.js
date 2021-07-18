import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { text } from 'src/lib/common/text';
import { ButtonPrimary, ButtonBasic } from 'src/lib/element/button';
import { SLIDER_DATA_KEY } from '../../slider.type';
import { ReactComponent as ArrowLeft } from '../../../../asset/svg/arrow-slider-left.svg';
import { ReactComponent as ArrowRight } from '../../../../asset/svg/arrow-slider-right.svg';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { ErrorAlert } from '../../../../lib/element/alert';
import { SliderSkeleton } from '../../../../lib/element/skeleton';

export function SliderItemComponent(props) {
  const {
    items,
    slide,
    prevSlide,
    nextSlide,
    isPending,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  const title = items[slide][SLIDER_DATA_KEY.TITLE];
  const button = items[slide][SLIDER_DATA_KEY.BUTTON];
  const buttonUrl = items[slide][SLIDER_DATA_KEY.BUTTON_URL];
  const imageUrl = items[slide][SLIDER_DATA_KEY.IMAGE_URL];

  return (
    <React.Fragment>
      {isError && errorMessage ? (
        <ErrorAlert tid={errorMessage} />
      ) : isSuccess && items.length ? (
        <SliderContainer>
          <Action onClick={prevSlide} icon={ArrowLeft} />
          <Action onClick={nextSlide} direction="right" icon={ArrowRight} />
          <Container>
            <ContentContainer>
              <TitleText>{title}</TitleText>
              <LinkPrimary path={buttonUrl}>
                <Button>{button}</Button>
              </LinkPrimary>
            </ContentContainer>
            <BackgroundImage src={imageUrl} />
          </Container>
          <BannerDot>
            {items.map((x, i) => (
              <DotItem key={i} active={slide === i} />
            ))}
          </BannerDot>
        </SliderContainer>
      ) : null}

      {/* {isPending && <LoaderPrimary />} */}
      {isPending && <SliderSkeleton />}
    </React.Fragment>
  );
}

const SliderContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Action = styled(ButtonBasic)`
  z-index: 1;
  background: none;
  position: absolute;
  ${({ direction = 'left' }) => `${direction}: 3%`}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: 0.5s ease-in slidein;
  @keyframes slidein {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6.3)};
`;

const TitleText = styled(TextPrimary)`
  text-align: center;
  width: 550px;
  color: ${THEME_COLOR.TEXT.WHITE};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.25em;
  @media screen and (max-width: 720px) {
    width: 350px;
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
`;

const Button = styled(ButtonPrimary)`
  padding: ${spacing(3)} ${spacing(11)};
`;

const BackgroundImage = styled.img`
  height: 100%;
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
