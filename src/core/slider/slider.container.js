import { useEffect, useState } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { SLIDER_STORE_NAME } from './slider.constant';
import { sliderLoadData } from './slider.action';
import { SliderComponent } from './slider.component';
import { useKeenSlider } from 'keen-slider/react';

export function SliderContainer(props) {
  const dispatch = useDispatch();
  const { state, pageLoading, slides, lang } = useSelector((state) => ({
    state: state[SLIDER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    slides: state[SLIDER_STORE_NAME].slider.data,
    lang: state[LANG_STORE_NAME].active,
  }));
  useEffect(() => {
    //   dispatch(sliderLoadData(lang));
  }, []);

  const [slide, setSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setSlide(s.details().relativeSlide);
    },
  });
  const nextSlide = (e) => e.stopPropagation() || slider.next();
  const prevSlide = (e) => e.stopPropagation() || slider.prev();
  //   const setActiveSlide = (index) => ;
  return (
    <SliderComponent
      isPending={isRequestPending(state.slider)}
      isError={true}
      isSuccess={true}
      // isSuccess={isRequestSuccess(state.slider)}
      errorMessage={getRequestErrorMessage(state.slider)}
      slide={slide}
      prev={prevSlide}
      next={nextSlide}
      setSlide={slider?.moveToSlideRelative}
      items={testSlides} // сделать нормальную конвертацию и посмотреть testSlides что бы понимать
      sliderRef={sliderRef}
    />
  );
}

export const testSlides = [
  {
    id: 1,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '#FFFFFF',
    buttonText: 'Купить',
    buttonTextColor: '#FFFFFF',
    buttonColor: '#FF005A',
    isButton: true,
    buttonPath: '/',
    image: 'http://placekitten.com/900/300',
  },
  {
    id: 2,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '#2F80ED',
    buttonText: 'Купить',
    buttonTextColor: '#5F5B5D',
    buttonColor: '#F0F0F0',
    isButton: true,
    buttonPath: '/',
    image: 'http://placekitten.com/900/301',
  },
  {
    id: 3,
    titleText: 'Готовые выкройки в интернет-магазине LaForme',
    titleTextColor: '#219653',
    buttonText: 'Купить',
    buttonTextColor: '#FFFFFF',
    buttonColor: '#FF005A',
    isButton: false,
    buttonPath: '/',
    image: 'http://placekitten.com/901/300',
  },
];
