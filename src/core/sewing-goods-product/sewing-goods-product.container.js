import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { sewingGoodsProductUploadData } from './sewing-goods-product.action';
import { SEWING_GOODS_PRODUCT_STORE_NAME } from './sewing-goods-product.constant';
import { SewingGoodsProductComponent } from './sewing-goods-product.component';

export function SewingGoodsProductContainer() {
  const dispatch = useDispatch();
  const [selectOptionsValue, setValueSelectOption] = useState();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SEWING_GOODS_PRODUCT_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(sewingGoodsProductUploadData());
  }, []);

  //   console.log(selectOptionsValue); // тут появляется ответ от select

  return (
    <SewingGoodsProductComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      currentProductData={currentProductData}
      comments={testCommentsItems}
      listItems={testSewingGoodsListItems}
      setValueSelectOption={setValueSelectOption}
    />
  );
}

const initialValueForSelectOptions = (options) => {
  return options.reduce((acc, { codeName }) => {
    acc[codeName] = 0;
    return acc;
  }, {});
};
const testSelectOptions = [
  {
    name: 'Размер',
    codeName: 'size',
    tooltip: true,
    options: [
      { id: 0, tid: `Детский` },
      { id: 1, tid: `Подростковый` },
      { id: 2, tid: `Взрослый` },
    ],
  },
  {
    name: 'Цвет',
    codeName: 'color',
    tooltip: false,
    options: [
      { id: 0, tid: `Синий` },
      { id: 1, tid: `Красный` },
      { id: 2, tid: `Зелёный` },
    ],
  },
];
export const currentProductData = {
  title: 'Комбинезон 0717',
  shortDescription: 'Верхня одежда, сложный пошив, печатная версия',
  fullDescription:
    'Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны)  Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны) ',
  bestSeller: true,
  price: 300,
  discount: 5,
  like: true,
  select: false,
  images: [
    'http://placekitten.com/400/600',
    'http://placekitten.com/100/200',
    'http://placekitten.com/900/600',
    'http://placekitten.com/500/600',
    'http://placekitten.com/350/800',
    'http://placekitten.com/700/900',
  ],
  selectOptions: testSelectOptions,
  initialValueForSelectOptions: initialValueForSelectOptions(testSelectOptions),
};
export const testSewingGoodsListItems = [
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
];
export const testCommentsItems = [
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей.
  	  Очень удгобная и хорошая вещь, спасибо! Хотелось бы сказать что вещь правда хороашая и дошла очень быстро, буду заказывать ещё. Из минусов – дороговато, всё таки.`,
  },
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
  {
    me: true,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
];
