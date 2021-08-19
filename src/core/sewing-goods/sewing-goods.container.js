import { useEffect, useState } from 'react';
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
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SEWING_GOODS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [filteredProducts, setFilteredProducts] = useState(testListItems);

  useEffect(() => {
    // dispatch(sewingGoodsUploadData());
  }, []);

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

  const filterProducts = (name) => {
    setFilteredProducts(testListItems.filter((product) => {
      return product.name
        .toLowerCase()
        .trim()
        .includes(name);
    }));
  };

  return (
    <SewingGoodsComponent
      isPending={isRequestPending(state.sewingGoods)}
      isError={isRequestError(state.sewingGoods)}
      isSuccess={isRequestSuccess(state.sewingGoods)}
      errorMessage={getRequestErrorMessage(state.sewingGoods)}
      pageLoading={pageLoading}
      initialValue={initialValue()}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={filteredProducts}
      fieldName={SEWING_GOODS_FIELD_NAME}
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
    select: true,
    like: true,
    type: 0,
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
    select: false,
    like: false,
    bestseller: true,
    type: 0,
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
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
