import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { patternsUploadData } from './patterns.action';
import { PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';
import { PATTERNS_FIELD_NAME } from './patterns.type';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { filterByType } from '../../lib/common/filter-list-card';

export function PatternsContainer() {
  const [activeTab, setActiveTab] = useState(9);
  const [filteredProducts, setFilteredProducts] = useState(testListItems);
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[PATTERNS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // useEffect(() => {
  //   dispatch(patternsUploadData());
  // }, []);

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

  const filterProducts = (name) => {
    setFilteredProducts(testListItems.filter((product) => {
      return product.name
        .toLowerCase()
        .trim()
        .includes(name);
    }));
  };

  return (
    <PatternsComponent
      isPending={isRequestPending(state.patterns)}
      isError={isRequestError(state.patterns)}
      isSuccess={isRequestSuccess(state.patterns)}
      errorMessage={getRequestErrorMessage(state.patterns)}
      pageLoading={pageLoading}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      initialValue={initialValue()}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={filterByType(filteredProducts, activeTab)}
      fieldName={PATTERNS_FIELD_NAME}
      onSubmit={onSubmit}
      filterProducts={filterProducts}
    />
  );
}

export const tabItems = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', type: 9 },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED', type: 4 },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC', type: 5 },
];

export const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    complexity: 1,
    select: true,
    like: true,
    type: 4,
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
    type: 4,
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
    type: 5,
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
    type: 5,
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
    tid: 'Самые новые',
  },
  {
    id: 3,
    tid: 'Самые старые',
  },
];
