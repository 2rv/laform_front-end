import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { sewingGoodsUploadData } from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods.type';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { sorterItemsByParams } from '../../lib/common/filter-list-card';

export function SewingGoodsContainer() {
  const dispatch = useDispatch();
  const { sewingGoodsState, pageLoading, currentLang } = useSelector(
    (state) => ({
      sewingGoodsState: state[SEWING_GOODS_STORE_NAME].sewingGoodsState,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    }),
  );
  useEffect(() => dispatch(sewingGoodsUploadData(currentLang)), []);
  const filterInitialValue = () => ({
    [SEWING_GOODS_FIELD_NAME.FILTER]: 0,
    [SEWING_GOODS_FIELD_NAME.FIND]: '',
  });
  const [filter, setFilter] = useState(filterInitialValue());

  return (
    <SewingGoodsComponent
      listItems={sorterItemsByParams(
        getRequestData(sewingGoodsState, []),
        filter[SEWING_GOODS_FIELD_NAME.FIND],
        Number(filter[SEWING_GOODS_FIELD_NAME.FILTER]),
      )}
      //-----
      setFilter={setFilter}
      initialValue={filterInitialValue()}
      filterOptions={filterOptionss}
      filterSelectName={SEWING_GOODS_FIELD_NAME.FILTER}
      findFieldName={SEWING_GOODS_FIELD_NAME.FIND}
      //-----
      pageLoading={pageLoading}
      isPending={isRequestPending(sewingGoodsState)}
      isError={isRequestError(sewingGoodsState)}
      isSuccess={isRequestSuccess(sewingGoodsState)}
      errorMessage={getRequestErrorMessage(sewingGoodsState)}
    />
  );
}

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

export const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    select: true,
    like: true,
    type: 0,
    createdDate: '2021-02-19T11:33:22.332Z',
    price: {
      min: 500,
      discount: 10,
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
    type: 0,
    createdDate: '2021-08-19T11:33:22.332Z',
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
    type: 0,
    createdDate: '2021-04-19T11:33:22.332Z',
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
    select: false,
    like: false,
    bestseller: true,
    type: 0,
    createdDate: '2021-04-14T11:33:22.332Z',
    price: {
      min: 200,
      discount: 5,
      max: 900,
    },
  },
];
