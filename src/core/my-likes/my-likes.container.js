import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType } from '../../lib/common/filter-list-card';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { myLikesUploadData } from './my-likes.action';
import { MyLikesComponent } from './my-likes.component';
import { MY_LIKES_STORE_NAME } from './my-likes.constant';

export function MyLikesContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(9);
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[MY_LIKES_STORE_NAME].myLikes,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(myLikesUploadData());
  }, []);

  return (
    <MyLikesComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      listItems={filterByType(testMixedListItems, activeTab)}
    />
  );
}

const tabItems = [
  { name: 'Все', type: 9 },
  { name: 'Товары для шитья', type: 0 },
  { name: 'Мастер-классы', type: 1 },
  { name: 'Выкройки', type: 3 },
  { name: 'Статьи', type: 2 },
];

const testMixedListItems = [
  {
    id: 1,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    select: true,
    type: 0,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 1,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    bestseller: true,
    select: false,
    type: 1,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 1,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 2,
    date: '1 неделю назад',
  },
  {
    id: 1,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    complexity: 1,
    select: true,
    type: 3,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
];
