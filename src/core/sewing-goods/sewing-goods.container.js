import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { sewingGoodsUploadData } from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods.type';

export function SewingGoodsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[SEWING_GOODS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(sewingGoodsUploadData());
  // }, []);

  const initialValue = () => {
    return {
      [SEWING_GOODS_FIELD_NAME.CATEGORY]: 1,
      [SEWING_GOODS_FIELD_NAME.TAGS]: 1,
      [SEWING_GOODS_FIELD_NAME.FIND_INPUT]: '',
    };
  };

  const onSubmit = (values) => {
    console.log(values); // вроде должно приходить сюда изменения из формы
  };
  return (
    <SewingGoodsComponent
	isPending={isRequestPending(state.sewingGoods)}
      isError={isRequestError(state.sewingGoods)}
      isSuccess={isRequestSuccess(state.sewingGoods)}
      errorMessage={getRequestErrorMessage(state.sewingGoods)}
      pageLoading={pageLoading}
      initialValue={initialValue()}
      activePath={activePath}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={testListItems}
      fieldName={SEWING_GOODS_FIELD_NAME}
      onSubmit={onSubmit}
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
    tid: 'Самые дорогие',
  },
  {
    id: 3,
    tid: 'Самые дешевые',
  },
];

export const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    complexity: 1,
    selected: true,
    price: {
      min: 500,
      max: null,
    },
    isLiked: true,
    hit: false,
    discount: 230,
    backgroundImage: '/static/test/popular-gods-1.png',
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    complexity: 3,
    selected: false,
    price: {
      min: 200,
      max: 4150,
    },
    isLiked: false,
    hit: false,
    discount: null,
    backgroundImage: '/static/test/popular-gods-2.png',
  },
  {
    id: 3,
    name: 'Батист',
    complexity: 3,
    selected: false,
    price: {
      min: 200,
      max: 900,
    },
    isLiked: false,
    hit: true,
    discount: null,
    backgroundImage: '/static/test/popular-gods-3.png',
  },
];
