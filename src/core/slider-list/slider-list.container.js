import { SliderListComponent } from './slider-list.component';

export function SliderListContainer() {
  return <SliderListComponent itemsTable={itemsTable} />;
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
