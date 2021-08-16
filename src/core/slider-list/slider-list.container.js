import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { sliderListLoadData } from './slider-list.action';
import { SLIDER_LIST_STORE_NAME } from './slider-list.constant';
import { SliderListComponent } from './slider-list.component';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SliderListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  React.useEffect(() => {
    dispatch(sliderListLoadData(currentLang.toLowerCase()));
  }, []);

  return (
    <SliderListComponent
      isPending={isRequestPending(state.sliderList)}
      isError={isRequestError(state.sliderList)}
      isSuccess={isRequestSuccess(state.sliderList)}
      errorMessage={getRequestErrorMessage(state.sliderList)}
      pageLoading={pageLoading}
      sliders={getRequestData(state.sliderList, [])}
      currentLang={currentLang}
    />
  );
}

const itemsTable = [
  {
    name: 'Товары для шитья',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Товары для шитья',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
];
