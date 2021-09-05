import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';
import { AboutAccountComponent } from './about-account.component';

import {
  userLoadData,
  userDeliveryInfoLoadData,
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
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ABOUT_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(userLoadData());
    dispatch(userDeliveryInfoLoadData());
    dispatch(likesLoadData());
    dispatch(commentsLoadData());
  }, []);

  return (
    <AboutAccountComponent
      isUserPending={isRequestPending(state.user)}
      user={getRequestData(state.user, [])}
      isUserDeliveryInfoPending={isRequestPending(state.userDeliveryInfo)}
      userDeliveryInfo={getRequestData(state.userDeliveryInfo, [])}
      isLikesPending={isRequestPending(state.likes)}
      likes={getRequestData(state.likes, [])}
      isCommentsPending={isRequestPending(state.comments)}
      comments={getRequestData(state.comments, [])}
      pageLoading={pageLoading}
      orderItems={orderItems}
      commentItems={commentItems}
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
const commentItems = [
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    comment: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелось`,
  },
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    comment: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасиодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосбо! Хотелось`,
  },
];
