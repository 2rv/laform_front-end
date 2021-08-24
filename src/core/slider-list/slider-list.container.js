import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { sliderListLoadData } from './slider-list.action';
import { SLIDER_LIST_STORE_NAME } from './slider-list.constant';
import { SliderListComponent } from './slider-list.component';
import { sliderListUploadData, sliderItemRemove } from './slider-list.action';
import { SLIDER_EDIT_ROUTE_PATH } from '../slider-edit';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SliderListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[SLIDER_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    user: state[AUTH_STORE_NAME].user,
  }));

  React.useEffect(() => {
    if (user && user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(sliderListLoadData(currentLang));
  }, []);

  const editSlide = (id) => redirect(SLIDER_EDIT_ROUTE_PATH(id));
  const removeSlide = (id) => dispatch(sliderItemRemove(currentLang, id));
  const addSlide = () => dispatch(sliderListUploadData(currentLang));
  return (
    <SliderListComponent
      isPending={isRequestPending(state.sliderList)}
      isError={isRequestError(state.sliderList)}
      isSuccess={isRequestSuccess(state.sliderList)}
      errorMessage={getRequestErrorMessage(state.sliderList)}
      pageLoading={pageLoading}
      slidersItems={getRequestData(state.sliderList, [])}
      editSlide={editSlide}
      removeSlide={removeSlide}
      addSlide={addSlide}
    />
  );
}

const itemsTable = [
  {
    id: 1,
    name: 'Товары для шитья',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    id: 2,
    name: 'Товары для шитья',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
  {
    id: 3,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
  },
];
