import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
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
import { patternsUploadData, patternsUpdateData } from './patterns.action';
import { PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';
import { PATTERNS_FIELD_NAME } from './patterns.type';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

export function PatternsContainer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { patternsState, pageLoading, currentLang, user, isAuth } = useSelector(
    (state) => ({
      patternsState: state[PATTERNS_STORE_NAME].patternsState,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }),
  );
  const [activeTab, setActiveTab] = useState(
    router.query.type === 'all'
      ? 9
      : router.query.type === 'printed'
      ? 2
      : router.query.type === 'electronic'
      ? 1
      : 0,
  );

  useEffect(() => {
    dispatch(patternsUploadData(currentLang, isAuth));

    if (!['all', 'printed', 'electronic'].includes(router.query.type)) {
      router.push(
        '/patterns?type=all',
        { query: { type: 'all' } },
        { shallow: true },
      );
      setActiveTab(9);
    }

    if (activeTab === 9) {
      router.push(
        '/patterns?type=all',
        { query: { type: 'all' } },
        { shallow: true },
      );
    } else if (activeTab === 2) {
      router.push(
        '/patterns?type=printed',
        { query: { type: 'printed' } },
        { shallow: true },
      );
    } else if (activeTab === 1) {
      router.push(
        '/patterns?type=electronic',
        { query: { type: 'electronic' } },
        { shallow: true },
      );
    }
  }, [activeTab, router.query.type]);
  const filterInitialValue = () => ({
    [PATTERNS_FIELD_NAME.FILTER]: 0,
    [PATTERNS_FIELD_NAME.FIND]: '',
  });
  //---------------------------------------------------
  const [filter, setFilter] = useState(filterInitialValue());

  const onDeleteProduct = (id, body) => {
    dispatch(patternsUpdateData(currentLang, id, body));
  };

  const addToCart = (id, type, inCart) => {
    if (inCart) return dispatch(addToBasket({ id, type }, currentLang, isAuth));
  };

  return (
    <PatternsComponent
      addToCart={addToCart}
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
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
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
    type: 1,
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
    bestseller: 'Хит',
    type: 2,
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
    type: 1,
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
    type: 2,
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
