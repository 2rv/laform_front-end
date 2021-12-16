import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert } from 'src/lib/element/alert';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { THEME_SIZE } from 'src/lib/theme';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { SLIDER_STORE_NAME } from './slider.constant';
import { sliderLoadData } from './slider.action';
import { SliderComponent } from './slider.component';

export function SliderContainer(props) {
  const dispatch = useDispatch();
  const { state, currentLang } = useSelector((state) => ({
    state: state[SLIDER_STORE_NAME],
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const sliders = getRequestData(state.slider, []);

  useEffect(() => {
    dispatch(sliderLoadData(currentLang));
  }, []);

  if (isRequestPending(state.slider)) {
    return <SliderSkeleton />;
  }

  if (isRequestError(state.slider) && getRequestErrorMessage(state.slider)) {
    return <ErrorAlert tid={getRequestErrorMessage(state.slider)} />;
  }

  return isRequestSuccess(state.slider) && Boolean(sliders.length > 0) ? (
    <SliderComponent sliders={sliders} />
  ) : (
    <></>
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

export const SliderSkeleton = styled.div`
  width: 100%;
  height: 350px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 40px);
  background-size: 2000px;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;
