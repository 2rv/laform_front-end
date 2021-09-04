import styled from 'styled-components';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { SidebarMenuListItem } from './sidebar-menu-list-item';

export function SidebarMenu(props) {
  const { items, setOpen, isOpen } = props;
  return (
    <Container toggle={isOpen}>
      <Content>
        {navMenu.map((data, index) => (
          <SidebarMenuListItem key={index} data={data} />
        ))}
      </Content>
    </Container>
  );
}

const navMenu = [
  { title: 'Главная', pathname: '/' },
  {
    title: 'Auth',
    items: [
      { title: 'регистрация', pathname: '/signup' },
      { title: 'авторизация', pathname: '/login' },
      { title: 'сменить пароль', pathname: '/auth/change-password' },
      { title: 'восстановить аккаунт', pathname: '/auth/recovery-account' },
      {
        title: 'Отправить код на почту',
        pathname: '/auth/verificate-email',
      },
      {
        title: 'Почта подтверждена',
        pathname: '/auth/verificate-email/confirm',
      },
    ],
  },
  {
    title: 'Админка',
    items: [
      { title: 'Промокоды', pathname: '/promocodes' },
      { title: 'Список слайдов', pathname: '/slider-list' },
      { title: 'Редактировать слайд', pathname: '/slider/edit-slider/new' },
      { title: 'Рекомендации', pathname: '/compilation ' },
      { title: 'Создание товара', pathname: '/create-product' },
      { title: 'Создание статьи', pathname: '/create-article' },
      { title: 'Профиль пользователя', pathname: '/profile' },
    ],
  },
  {
    title: 'Разное',
    items: [
      { title: 'Ошибка', pathname: '/error' },
      { title: 'Помощь', pathname: '/faq' },
      { title: 'Настройки', pathname: '/settings' },
      { title: 'Корзина', pathname: '/basket' },
      {
        title: 'Товар',
        items: [
          { title: 'Мои лайки', pathname: '/favorites' },
          { title: 'Мои покупки', pathname: '/purchases-history' },
          { title: 'Мои заказы', pathname: '/orders' },
          { title: 'Заказ', pathname: '/order/1' },
        ],
      },
    ],
  },
  {
    title: 'Статьи',
    items: [
      { title: 'Все статьи', pathname: '/article' },
      { title: 'Статья', pathname: '/article/1' },
    ],
  },
  {
    title: 'Мастер-классы',
    items: [
      { title: 'Все мастер-классы', pathname: '/master-class' },
      { title: 'Мастер-класс', pathname: '/master-class/1' },
      { title: 'Купленный мастер-класс', pathname: '/master-class-page' },
    ],
  },
  {
    title: 'Выкройки',
    items: [
      { title: 'Все выкройки', pathname: '/patterns' },
      { title: 'Выкройка', pathname: '/patterns/1' },
      { title: 'Купленная выкройка', pathname: '/patterns-page' },
    ],
  },
  {
    title: 'Товары для шитья',
    items: [
      { title: 'Все товары', pathname: '/sewing-goods' },
      { title: 'Товар для шитья', pathname: '/sewing-goods/1' },
      { title: 'Купленный товар для шитья', pathname: '/sewing-goods-page' },
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

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Content = styled.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  padding: ${spacing(3)};
  gap: ${spacing(2)};
  height: 100%;
  flex: 1;
  overflow: auto;
  min-height: max-content;
  box-sizing: border-box;
  padding-bottom: 200px;
`;

const Container = styled.div`
  position: fixed;
  top: 180px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 350px;
  min-width: 0;
  min-height: max-content;
  overflow: hidden;
  max-width: ${(p) => (p.toggle ? `350px` : 0)};
  background-color: #fff;
  z-index: 4;
  transition: 0.4s;
  @media screen and (max-width: 720px) {
    width: 100vw;
    max-width: ${(p) => (p.toggle ? `100vw` : 0)};
    top: 120px;
  }
`;
