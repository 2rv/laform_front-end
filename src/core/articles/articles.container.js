import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { articlesUploadData } from './articles.action';
import { ARTICLES_STORE_NAME } from './articles.constant';
import { ARTICLES_FIELD_NAME } from './articles.type';
import { ArticlesComponent } from './articles.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function ArticlesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ARTICLES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [filteredProducts, setFilteredProducts] = useState(testListItems);

  // React.useEffect(() => {
  //   dispatch(articlesUploadData());
  // }, []);

  const initialValue = () => {
    return {
      [ARTICLES_FIELD_NAME.CATEGORY]: 1,
      [ARTICLES_FIELD_NAME.TAGS]: 1,
      [ARTICLES_FIELD_NAME.FIND_INPUT]: '',
    };
  };

  const onSubmit = (values) => {
    console.log(values); // вроде должно приходить сюда изменения из формы
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
    <ArticlesComponent
      isPending={isRequestPending(state.sewingGoods)}
      isError={isRequestError(state.sewingGoods)}
      isSuccess={isRequestSuccess(state.sewingGoods)}
      errorMessage={getRequestErrorMessage(state.sewingGoods)}
      pageLoading={pageLoading}
      initialValue={initialValue()}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={filteredProducts}
      fieldName={ARTICLES_FIELD_NAME}
      onSubmit={onSubmit}
      filterProducts={filterProducts}
    />
  );
}

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

export const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    date: '1 неделю назад',
    type: 2,
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    date: '1 неделю назад',
    type: 2,
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',

    like: false,
    date: '2 недели назад',
    type: 2,
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    date: '2 недели назад',
    type: 2,
  },
];
