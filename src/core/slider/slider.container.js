import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { SLIDER_STORE_NAME } from './slider.constant';
import { sliderLoadData } from './slider.action';
import { SliderComponent } from './slider.component';
import { LoaderPrimary } from '../../lib/element/loader';
import { ErrorAlert } from '../../lib/element/alert';
import { SliderSkeleton } from '../../lib/element/skeleton';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from '../../main/store/store.service';

export function SliderContainer(props) {
  const dispatch = useDispatch();
  const { state, currentLang } = useSelector((state) => ({
    state: state[SLIDER_STORE_NAME],
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const sliders = getRequestData(state.slider, [...testSlides]);

  useEffect(() => {
    dispatch(sliderLoadData(currentLang));
  }, []);

  if (isRequestPending(state.slider)) {
    return <LoaderPrimary />;
  }

  if (isRequestError(state.slider) && getRequestErrorMessage(state.slider)) {
    return <ErrorAlert tid={getRequestErrorMessage(state.slider)} />;
  }

  return Boolean(sliders.length > 0) ? (
    <SliderComponent sliders={sliders} />
  ) : (
    <SliderSkeleton />
  );
}

export const testSlides = [
  {
    id: 1,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '5',
    buttonText: 'Купить',
    buttonTextColor: '1',
    buttonColor: '3',
    isButton: true,
    buttonPath: '/',
    image: 'http://placekitten.com/900/300',
  },
  {
    id: 2,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '1',
    buttonText: 'Купить тоже',
    buttonTextColor: '2',
    buttonColor: '4',
    isButton: true,
    buttonPath: '/',
    image: 'http://placekitten.com/900/301',
  },
  {
    id: 3,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '3',
    buttonText: '5',
    buttonTextColor: '1',
    buttonColor: '#FF005A',
    isButton: false,
    buttonPath: '/',
    image: 'http://placekitten.com/901/300',
  },
];
