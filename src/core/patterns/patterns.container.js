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
import {
  filterByType,
  sorterItemsByParams,
} from '../../lib/common/filter-list-card';
import { patternsUploadData } from './patterns.action';
import { PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';
import { PATTERNS_FIELD_NAME } from './patterns.type';
import { LANG_STORE_NAME } from 'src/lib/common/lang';

export function PatternsContainer() {
  const dispatch = useDispatch();
  const { patternsState, pageLoading, currentLang } = useSelector((state) => ({
    patternsState: state[PATTERNS_STORE_NAME].patternsState,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => dispatch(patternsUploadData(currentLang)), []);
  const filterInitialValue = () => ({
    [PATTERNS_FIELD_NAME.FILTER]: 0,
    [PATTERNS_FIELD_NAME.FIND]: '',
  });
  //---------------------------------------------------
  const [activeTab, setActiveTab] = useState(9);
  const [filter, setFilter] = useState(filterInitialValue());

  return (
    <PatternsComponent
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      //-----
      listItems={filterByType(
        sorterItemsByParams(
          getRequestData(patternsState, []),
          filter[PATTERNS_FIELD_NAME.FIND],
          Number(filter[PATTERNS_FIELD_NAME.FILTER]),
        ),
        activeTab,
      )}
      //-----
      filterOptions={filterOptionss}
      initialValue={filterInitialValue()}
      setFilter={setFilter}
      filterSelectName={PATTERNS_FIELD_NAME.FILTER}
      findFieldName={PATTERNS_FIELD_NAME.FIND}
      //-----
      pageLoading={pageLoading}
      isPending={isRequestPending(patternsState)}
      isError={isRequestError(patternsState)}
      isSuccess={isRequestSuccess(patternsState)}
      errorMessage={getRequestErrorMessage(patternsState)}
    />
  );
}

export const tabItems = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', type: 9 },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED', type: 2 },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC', type: 1 },
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
      discount: 20,
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
    createdDate: '2021-04-14T11:33:22.332Z',
    price: {
      min: 200,
      discount: 30,
    },
  },
];
export const filterOptionss = [
  {
    id: 0,
    tid: 'Все',
  },
  {
    id: 1,
    tid: 'Акция',
  },
  {
    id: 2,
    tid: 'Хит',
  },
  {
    id: 3,
    tid: 'По возрастанию',
  },
  {
    id: 4,
    tid: 'По убыванию',
  },
];
