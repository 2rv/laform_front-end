import { HomeComponent } from './home.component';

export function HomeContainer() {
  return (
    <HomeComponent
      articlesListItems={testArticlesListItems}
      masterClassesListItems={testMasterClassesListItems}
      sewingGoodsListItems={testSewingGoodsListItems}
    />
  );
}

export const testArticlesListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    date: '1 неделю назад',
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    date: '1 неделю назад',
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',

    like: false,
    date: '2 недели назад',
  },
];
export const testMasterClassesListItems = [
  {
    id: 1,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    bestseller: true,
    select: false,
    like: true,
    patternType: 1,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: true,
    select: true,
    like: false,
    patternType: 1,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 3,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: false,
    select: true,
    like: true,
    patternType: 1,
    price: {
      min: 500,
      discount: 230,
      max: 1000,
    },
  },
];
export const testPatternsListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    complexity: 1,
    select: true,
    like: true,
    patternType: 1,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    patternType: 2,
    price: {
      min: 200,
      discount: null,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    patternType: 1,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
export const testSewingGoodsListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    select: true,
    like: true,
    patternType: 1,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    select: false,
    like: false,
    bestseller: true,
    patternType: 2,
    price: {
      min: 200,
      discount: null,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    select: false,
    like: false,
    bestseller: true,
    patternType: 1,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
