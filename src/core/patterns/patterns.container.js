import { PatternsComponent } from './patterns.component';
import { useState } from 'react';
import { PATTERNS_FIELD_NAME } from './patterns.type';

export function PatternsContainer() {
  const [activeTab, setActiveTab] = useState(0);

  const initialValue = () => {
    return {
      [PATTERNS_FIELD_NAME.CATEGORY]: 1,
      [PATTERNS_FIELD_NAME.TAGS]: 1,
      [PATTERNS_FIELD_NAME.FIND_INPUT]: '',
    };
  };

  const onSubmit = (values) => {
    console.log(values); // это ответ с формы если пользователь что то изменяет селект/инпут
  };
  console.log(activeTab); // сбда приходит с tabs значение которое пользователь поставил

  return (
    <PatternsComponent
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      initialValue={initialValue()}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={testListItems}
      fieldName={PATTERNS_FIELD_NAME}
      onSubmit={onSubmit}
    />
  );
}

export const tabItems = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL' },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED' },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC' },
];

export const testListItems = [
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
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    patternType: 2,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];

export const categorySelectOptions = [
  {
    id: 1,
    tid: 'Категория 1',
  },
  {
    id: 2,
    tid: 'Категория 2',
  },
];

export const tagsSelectOptions = [
  {
    id: 1,
    tid: 'Популярные',
  },
  {
    id: 2,
    tid: 'Самые дорогие',
  },
  {
    id: 3,
    tid: 'Самые дешевые',
  },
];
