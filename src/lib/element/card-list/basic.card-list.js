import React, { useState } from 'react';
import styled from 'styled-components';
import { BasicCard } from '../card';
import { ReactComponent as ArrowLeft } from '../../../asset/svg/arrow-home-right.svg';
// import { ReactComponent as ArrowLeft } from '../../../asset/svg/arrow-home-right.svg';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { text } from 'src/lib/common/text';
import { ButtonPrimary, ButtonBasic } from 'src/lib/element/button';
import { LoaderPrimary } from '../../../lib/element/loader';
import { ErrorAlert } from '../../../lib/element/alert';
import { SliderSkeleton } from '../../../lib/element/skeleton';

export function BasicCardList({ items, actions, ItemComponent }) {
  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? 0 : slide - 1);
  };
  const next = () => {
    setSlide(slide === items.length - 1 ? slide : slide + 1);
  };
  const showSlideLeft = slide !== 0;
  const showSlideRight = slide + 1 !== items.length;

  const Item = ItemComponent || BasicCard;
  return (
    <React.Fragment>
      <Container>
        {items.map((item, index) => (
          <Item key={item?.id || index} actions={actions} {...item} />
        ))}
      </Container>
      <SliderContainer>
        {items.map((item, index) =>
          index === slide ? (
            <Item
              showSlideLeft={showSlideLeft}
              showSlideRight={showSlideRight}
              prev={prev}
              next={next}
              key={item?.id || index}
              actions={actions}
              {...item}
            />
          ) : null,
        )}
      </SliderContainer>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing(6)};
  }
  /* @media screen and (min-width: 721px) and (max-width: 1259px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  } */
`;

const SliderContainer = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
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
  }
`;
