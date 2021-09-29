import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { SLIDER_STORE_NAME } from './slider.constant';
import { sliderLoadData } from './slider.action';
import { SliderComponent } from './slider.component';
import { LoaderPrimary } from '../../lib/element/loader';
import { ErrorAlert } from '../../lib/element/alert';
import { SliderSkeleton } from '../../lib/element/skeleton';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SliderContainer(props) {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
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
