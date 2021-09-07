import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';
import { AboutAccountComponent } from './about-account.component';

import {
  userLoadData,
  purchasesLoadData,
  likesLoadData,
  commentsLoadData,
} from './about-account.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AboutAccountContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[ABOUT_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  useEffect(() => {
    dispatch(userLoadData());
    dispatch(purchasesLoadData());
    dispatch(likesLoadData());
    dispatch(commentsLoadData());
  }, []);

  return (
    <AboutAccountComponent
      isUserPending={isRequestPending(state.user)}
      user={getRequestData(state.user, [])}
      isPurchasesPending={isRequestPending(state.purchases)}
      purchases={getRequestData(state.purchases, [])}
      isLikesPending={isRequestPending(state.likes)}
      likes={getRequestData(state.likes, [])}
      isCommentsPending={isRequestPending(state.comments)}
      comments={getRequestData(state.comments, [])}
      pageLoading={pageLoading}
    />
  );
}

const orderItems = [
  {
    name: 'Батист Макс Мара Горохи',
    price: 999,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 1 },
    ],
    status: 'Доставленно',
  },
  {
    name: 'Хлопок Том Форд',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],

    status: 'Доставленно',
  },
  {
    name: 'Хлопок Том Форд',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],

    status: 'Доставленно',
  },
];
const likeItems = [
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [{ name: 'Категория', value: 'Верхняя одежда' }],
  },
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [{ name: 'Категория', value: 'Верхняя одежда' }],
  },
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [{ name: 'Категория', value: 'Верхняя одежда' }],
  },
];
