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
import { patternsPageUploadData } from './patterns-page.action';
import { PATTERNS_PAGE_STORE_NAME } from './patterns-page.constant';
import { PatternsPageComponent } from './patterns-page.component';
import { getQuery } from 'src/main/navigation';

export function PatternsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[PATTERNS_PAGE_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const id = getQuery('id');

  useEffect(() => {
    dispatch(patternsPageUploadData(id));
  }, []);

  return (
    <PatternsPageComponent
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
  price: 3200,
  discount: 5,
  discountPrice: 299,
  diliveryPrice: 299,
  images: [
    '/static/test/product-image-1.png',
    '/static/test/product-image-2.png',
    '/static/test/product-image-3.png',
  ],
  materials:
    'РекомеРекомендуемые материалы (Двоеточие) пальтовые матРекомендуемые материалы (Двоеточие) пальтовые матРекомендуемые материалы (ДвоеточиРекомендуемые материалы (Двоеточие) пальтовые матРекомендуемые материалы (Двоеточие) пальтовые мате) пальтовые матРекомендуемые материалы (Двоеточие) пальтовые матндуемые материалы (Двоеточие) пальтовые материалы натуральных и смешанных составов. При пошиве из ворсовых материалов следует выбирать эту модель с рукавом реглан, так как в цельнокроеном рукаве-3 направление ворса пойдет по косой и могут проявиться залысины в ворсе — проверить ткань, сложив под углом 45 ',
  optionInfo: [
    { name: 'Размер', value: '15/170/250' },
    { name: 'Категория', value: 'Верхняя одежда' },
  ],
};
