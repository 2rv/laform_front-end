import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { articlesUploadData } from './articles.action';
import { ARTICLES_STORE_NAME } from './articles.constant';
import { ARTICLES_FIELD_NAME } from './articles.type';
import { ArticlesComponent } from './articles.component';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { sorterItemsByParams } from '../../lib/common/filter-list-card';

export function ArticlesContainer() {
  const dispatch = useDispatch();
  const { articlesState, pageLoading, currentLang } = useSelector((state) => ({
    articlesState: state[ARTICLES_STORE_NAME].articlesState,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  //   useEffect(() => dispatch(articlesUploadData(currentLang)), []);
  //---------------------------------------------------
  const filterInitialValue = () => ({
    [ARTICLES_FIELD_NAME.FILTER]: 0,
    [ARTICLES_FIELD_NAME.FIND]: '',
  });
  const [filter, setFilter] = useState(filterInitialValue());

  return (
    <ArticlesComponent
      listItems={sorterItemsByParams(
        getRequestData(articlesState, [...testListItems]),
        filter[ARTICLES_FIELD_NAME.FIND],
        Number(filter[ARTICLES_FIELD_NAME.FILTER]),
      )}
      //-----
      filterOptions={filterOptionss}
      initialValue={filterInitialValue()}
      setFilter={setFilter}
      filterSelectName={ARTICLES_FIELD_NAME.FILTER}
      findFieldName={ARTICLES_FIELD_NAME.FIND}
      //-----
      pageLoading={pageLoading}
      isPending={isRequestPending(articlesState)}
      isError={isRequestError(articlesState)}
      isSuccess={isRequestSuccess(articlesState)}
      errorMessage={getRequestErrorMessage(articlesState)}
    />
  );
}

export const filterOptionss = [
  {
    id: 0,
    tid: 'Все',
  },
  {
    id: 5,
    tid: 'Созданы первыми',
  },
  {
    id: 6,
    tid: 'Созданы последними',
  },
];

export const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 2,
    createdDate: '2021-02-19T11:33:22.332Z',
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    type: 2,
    createdDate: '2021-08-25T06:20:10.332Z',
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    type: 2,
    createdDate: '2021-04-15T11:33:05.332Z',
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    type: 2,
    createdDate: '2021-04-19T11:33:22.332Z',
  },
];
