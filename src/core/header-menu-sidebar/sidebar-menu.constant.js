import { ABOUT_ACCOUNT_ROUTE_PATH } from '../about-account';
import { CREATE_ARTICLE_ROUTE_PATH } from '../article-create';
import { ARTICLE_PAGE_ROUTE_PATH } from '../article-page';
import { ARTICLES_ROUTE_PATH } from '../articles';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from '../auth-change-password';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';
import { AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH } from '../auth-verificate-email-confirm';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-verificate-email-recovery-account';
import { BASKET_ROUTE_PATH } from '../basket';
import { EDIT_COMPILATION_ROUTE_PATH } from '../edit-compilation';
import { FAQ_PAGE_ROUTE_PATH } from '../faq-page';
import { HOME_ROUTE_PATH } from '../home';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { LOGIN_ROUTE_PATH } from '../login';
import { CREATE_MASTER_CLASS_ROUTE_PATH } from '../master-class-create';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from '../master-class-page';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';
import { ORDERS_ROUTE_PATH } from '../orders';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { ELECTRONIC_PATTERN_ROUTE_PATH } from '../patterns-create-electronic';
import { CREATE_PRINT_PATTERN_ROUTE_PATH } from '../patterns-create-print';
import { PATTERNS_PAGE_ROUTE_PATH } from '../patterns-page';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { CREATE_SEWING_GOODS_ROUTE_PATH } from '../sewing-goods-create';
import { SEWING_GOODS_PAGE_ROUTE_PATH } from '../sewing-goods-page';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { SIGNUP_ROUTE_PATH } from '../signup';
import { SLIDER_EDIT_ROUTE_PATH } from '../slider-edit';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from '../purchase-products';

export const NAVIGATION_MENU = [
  { title: 'Домашняя', pathname: HOME_ROUTE_PATH },
  {
    title: 'Auth',
    items: [
      { title: 'регистрация', pathname: SIGNUP_ROUTE_PATH },
      { title: 'авторизация', pathname: LOGIN_ROUTE_PATH },

      {
        title: 'Отправить код на почту',
        pathname: AUTH_VERIFICATE_EMAIL_ROUTE_PATH,
      },
      {
        title: 'Страница что почта подтверждена',
        pathname: AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH,
      },
      {
        title: 'восстановить аккаунт',
        pathname: AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
      },
      {
        title: 'Страница отправки кода для смены пароля',
        pathname: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH,
      },
      { title: 'сменить пароль', pathname: AUTH_CHANGE_PASSWORD_ROUTE_PATH },
    ],
  },
  {
    title: 'Админка',
    items: [
      { title: 'Список заказов', pathname: ORDERS_ROUTE_PATH },
      { title: 'Промокоды', pathname: PROMOCODES_ROUTE_PATH },
      { title: 'Список слайдов', pathname: SLIDER_LIST_ROUTE_PATH },
      {
        title: 'Редактировать слайд',
        pathname: SLIDER_EDIT_ROUTE_PATH,
      },
      {
        title: 'Подборка лучших товаров',
        pathname: EDIT_COMPILATION_ROUTE_PATH,
      },
      {
        title: 'Создать мастер-класс',
        pathname: CREATE_MASTER_CLASS_ROUTE_PATH,
      },
      {
        title: 'Создать электронную выкройку',
        pathname: ELECTRONIC_PATTERN_ROUTE_PATH,
      },
      {
        title: 'Создать печатную выкройку',
        pathname: CREATE_PRINT_PATTERN_ROUTE_PATH,
      },
      {
        title: 'Создать товар для шитья',
        pathname: CREATE_SEWING_GOODS_ROUTE_PATH,
      },
      { title: 'Создать статью', pathname: CREATE_ARTICLE_ROUTE_PATH },
    ],
  },
  {
    title: 'Разное',
    items: [
      { title: 'Ошибка', pathname: '/error' },
      { title: 'Помощь', pathname: FAQ_PAGE_ROUTE_PATH },
      { title: 'Настройки', pathname: SETTINGS_ROUTE_PATH },
      { title: 'Корзина', pathname: BASKET_ROUTE_PATH },
      {
        title: 'Товар',
        items: [
          { title: 'Мои лайки', pathname: ALL_LIKES_ROUTE_PATH },
          { title: 'Мои покупки', pathname: PURCHASE_PRODUCTS_ROUTE_PATH },
          { title: 'Заказ', pathname: ORDER_NUMBER_ROUTE_PATH },
        ],
      },
    ],
  },
  {
    title: 'Статьи',
    items: [
      { title: 'Все статьи', pathname: ARTICLES_ROUTE_PATH },
      { title: 'Статья', pathname: ARTICLE_PAGE_ROUTE_PATH },
    ],
  },
  {
    title: 'Мастер-классы',
    items: [
      { title: 'Все мастер-классы', pathname: MASTER_CLASSES_ROUTE_PATH },
      {
        title: 'Мастер-класс',
        pathname: MASTER_CLASS_PRODUCT_ROUTE_PATH,
      },
      {
        title: 'Купленный мастер-класс',
        pathname: MASTER_CLASS_PAGE_ROUTE_PATH,
      },
    ],
  },
  {
    title: 'Выкройки',
    items: [
      { title: 'Все выкройки', pathname: PATTERNS_ROUTE_PATH },
      { title: 'Выкройка', pathname: PATTERNS_PRODUCT_ROUTE_PATH },
      { title: 'Купленная выкройка', pathname: PATTERNS_PAGE_ROUTE_PATH },
    ],
  },
  {
    title: 'Товары для шитья',
    items: [
      { title: 'Все товары', pathname: SEWING_GOODS_ROUTE_PATH },
      {
        title: 'Товар для шитья',
        pathname: SEWING_GOODS_PRODUCT_ROUTE_PATH,
      },
      {
        title: 'Купленный товар для шитья',
        pathname: SEWING_GOODS_PAGE_ROUTE_PATH,
      },
    ],
  },
];

// const test = [
//   {
//     title: 'Название',
//     items: [
//       { title: 'Под название', pathname: 'путь обязателен' },
//       {
//         title: 'Под под название',
//         pathname: 'путь обязателен',
//       },
//       {
//         title: 'Под под название',
//         items: [{ tid: 'Под под под название', pathname: 'путь обязателен' }],
//       },
//     ],
//   },
// ];
