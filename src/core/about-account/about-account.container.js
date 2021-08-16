import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { aboutAccountUploadData } from './about-account.action';
import { AboutAccountComponent } from './about-account.component';
import { ABOUT_ACCOUNT_STORE_NAME } from './about-account.constant';

export function AboutAccountContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ABOUT_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(aboutAccountUploadData());
  }, []);

  return (
    <AboutAccountComponent
      isPending={isRequestPending(state.aboutAccount)}
      isError={isRequestError(state.aboutAccount)}
      isSuccess={isRequestSuccess(state.aboutAccount)}
      errorMessage={getRequestErrorMessage(state.aboutAccount)}
      pageLoading={pageLoading}
      activityData={ABOUT_ACCOUNT_TEST_ITEMS}
      orderItems={orderItems}
      likeItems={likeItems}
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
    comment: {
      id: 1,
      text: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелось`,
    },
  },
  {
    name: 'Батист Макс Мара Горохи',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    comment: {
      id: 1,
      text: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасиодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосодходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелосбо! Хотелось`,
    },
  },
];

const ABOUT_ACCOUNT_TEST_ITEMS = {
  myGoods: {
    title: 'Мои покупки',
    items: [
      {
        id: 1,
        name: 'Товары для шитья',
        backgroundImage: '/static/test/popular-gods-1.png',
        color: 'Зелёный',
        size: '15/170/250',
        category: 'Верхняя одежда',
        numberOfItems: 1,
        price: 999,
        status: 2,
      },
      {
        id: 2,
        name: 'Товары для шитья',
        backgroundImage: '/static/test/popular-gods-1.png',
        color: 'Зелёный',
        size: '15/170/250',
        category: 'Верхняя одежда',
        numberOfItems: 1,
        price: 3200,
        status: 1,
      },
    ],
  },
  aboutAccount: {
    title: 'Мои лайки',
    items: [
      {
        id: 1,
        name: 'Мастер-класс по пошиву брюк 1003',
        backgroundImage: '/static/test/popular-gods-1.png',
        category: 'Мастер-класс',
      },
      {
        id: 2,
        name: 'Вискоза Жёлтые цветы',
        backgroundImage: '/static/test/popular-gods-2.png',
        category: 'Товар для шитья',
      },
    ],
  },
  myComments: {
    title: 'Мои отзывы',
    items: [
      {
        id: 1,
        name: 'Вискоза Желтые цветы',
        commentText: `Подходит для пальтово-костюмной группы тканей.
		  Очень удгобная и хорошая вещь, спасибо! Хотелось`,
        backgroundImage: '/static/test/popular-gods-1.png',
      },
      {
        id: 2,
        name: 'Мастер-класс по пошиву брюк 1003',
        commentText: `Подходит для пальтово-костюмной группы тканей.
		  Очень удгобная и хорошая вещь, спасибо!`,
        backgroundImage: '/static/test/popular-gods-2.png',
      },
    ],
  },
};
