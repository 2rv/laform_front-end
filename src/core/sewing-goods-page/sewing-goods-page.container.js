import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { sewingGoodsPageUploadData } from './sewing-goods-page.action';
import { SEWING_GOODS_PAGE_STORE_NAME } from './sewing-goods-page.constant';
import { SewingGoodsPageComponent } from './sewing-goods-page.component';
import { getQuery } from 'src/main/navigation';

export function SewingGoodsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SEWING_GOODS_PAGE_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const id = getQuery('id');

  useEffect(() => {
    dispatch(sewingGoodsPageUploadData(id));
  }, []);

  return (
    <SewingGoodsPageComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      currentPageData={getRequestData(state)}
    />
  );
}

export const currentPageData = {
  title: 'Комбинезон 0717',
  shortDescription: 'Верхня одежда, сложный пошив, печатная версия',
  fullDescription:
    'Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны)  Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны) ',
  bestSeller: true,
  price: 3200,
  discount: 5,
  discountPrice: 299,
  diliveryPrice: 299,
  like: true,
  select: false,
  images: [
    '/static/test/product-image-1.png',
    '/static/test/product-image-2.png',
    '/static/test/product-image-3.png',
  ],
  optionInfo: [
    { name: 'Цвет', value: 'Зелёный' },
    { name: 'Размер', value: '15/170/250' },
    { name: 'Категория', value: 'Верхняя одежда' },
    { name: 'Количество', value: 3 },
  ],
  address: 'Улица пушкина',
  paymentMethod: 'Наличными',
  status: 'Доставлено',
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
