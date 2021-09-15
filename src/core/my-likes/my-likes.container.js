import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType } from '../../lib/common/filter-list-card';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
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
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_LIKES_STORE_NAME].myLikes,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(myLikesUploadData());
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
      listItems={filterByType(getRequestData(state, []), activeTab)}
    />
  );
}

const tabItems = [
  { name: 'FAVORITES.TABLE.HEADER.ALL', type: 9 },
  { name: 'FAVORITES.TABLE.HEADER.SEWING_GOODS', type: 3 },
  { name: 'FAVORITES.TABLE.HEADER.MASTER_CLASSES', type: 0 },
  { name: 'FAVORITES.TABLE.HEADER.PATTERNS_PRINTED', type: 1 },
  { name: 'FAVORITES.TABLE.HEADER.PATTERNS_ELECTRONIC', type: 2 },
  { name: 'FAVORITES.TABLE.HEADER.ARTICLES', type: 4 },
];

const testMixedListItems = [
  {
    id: 1,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 3,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    bestseller: true,
    type: 0,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 3,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 4,
    date: '1 неделю назад',
  },
  {
    id: 56,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 4,
    date: '1 неделю назад',
  },
  {
    id: 4,
    name: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    image: '/static/test/popular-gods-1.png',
    like: true,
    complexity: 1,
    type: 2,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
];
