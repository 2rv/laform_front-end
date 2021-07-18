import { useEffect, useState } from 'react';
import { SliderComponent } from './slider.component';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { SLIDER_STORE_NAME } from './slider.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { sliderLoadData } from './slider.action';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SliderContainer(props) {
  const dispatch = useDispatch();
  const { state, pageLoading, slides, lang } = useSelector((state) => ({
    state: state[SLIDER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    slides: state[SLIDER_STORE_NAME].slider.data,
    lang: state[LANG_STORE_NAME].active,
  }));

  const [slide, setSlide] = useState(0);
  const prev = () => {
    setSlide(slide === 0 ? 0 : slide - 1);
  };
  const next = () => {
    setSlide(slide === BANNER_LIST_ITEMS.length - 1 ? slide : slide + 1);
  };

  // useEffect(() => dispatch(sliderLoadData(lang)), []);

  return (
    <SliderComponent
      slide={slide}
      prevSlide={prev}
      nextSlide={next}
      items={BANNER_LIST_ITEMS}
      isPending={isRequestPending(state.slider)}
      isError={true}
      isSuccess={true}
      errorMessage={getRequestErrorMessage(state.slider)}
      // isSuccess={isRequestSuccess(state.slider)}
    />
  );
}

export const BANNER_LIST_ITEMS = [
  {
    TITLE: 'Готовые выкройки в интернет-магазине LaForme',
    IMAGE_URL: 'https://dummyimage.com/1500x300/000/ffffff&text=+',
    BUTTON: 'Купить',
    BUTTON_URL: '/',
  },
  {
    TITLE: 'Готовые выкройки в интернет-магазине LaForme',
    IMAGE_URL: 'https://dummyimage.com/1500x300/4f4f4f/ffffff&text=+',
    BUTTON: 'Купить',
    BUTTON_URL: '/',
  },
  {
    TITLE: 'Готовые выкройки в интернет-магазине LaForme',
    IMAGE_URL: 'https://dummyimage.com/1500x300/000545/ffffff&text=+',
    BUTTON: 'Купить',
    BUTTON_URL: '/',
  },
];
