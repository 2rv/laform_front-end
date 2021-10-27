import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  createSewingGoodsPreUploadData,
  sewingGoodsLoadData,
  updateSewingProductPreUpload,
} from './sewing-goods-create.action';
import { CREATE_SEWING_GOODS_STORE_NAME } from './sewing-goods-create.constant';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';
import { formValidation } from './sewing-goods-create.validation';
import { CreateSewingGoodsComponent } from './sewing-goods-create.component';
import { getQuery } from 'src/main/navigation';
import { useEffect } from 'react';

export function CreateSewingGoodsContainer() {
  const dispatch = useDispatch();
  const sewingProductId = getQuery('id');

  const { state, productState, pageLoading, updateSewingGoodsState } =
    useSelector((state) => ({
      state: state[CREATE_SEWING_GOODS_STORE_NAME].createSewingGoods,
      productState: state[CREATE_SEWING_GOODS_STORE_NAME].product,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      updateSewingGoodsState:
        state[CREATE_SEWING_GOODS_STORE_NAME].updateSewingGoods,
    }));

  useEffect(() => {
    if (Boolean(sewingProductId)) {
      dispatch(sewingGoodsLoadData(sewingProductId));
    }
  }, [sewingProductId]);

  const onSubmit = (formValues) => {
    if (Boolean(sewingProductId)) {
      dispatch(updateSewingProductPreUpload(sewingProductId, formValues));
    } else {
      dispatch(createSewingGoodsPreUploadData(formValues));
    }
  };
  const initialValues = () => {
    const data = getRequestData(productState, {
      [SEWING_GOODS_FIELD_NAME.NAME]: '',
      [SEWING_GOODS_FIELD_NAME.MODIFIER]: '',
      [SEWING_GOODS_FIELD_NAME.CATEGORIES]: [],
      [SEWING_GOODS_FIELD_NAME.DESCRIPTION]: '',
      [SEWING_GOODS_FIELD_NAME.IMAGES]: [],
      [SEWING_GOODS_FIELD_NAME.PRICE]: '',
      [SEWING_GOODS_FIELD_NAME.DISCOUNT]: '',
      [SEWING_GOODS_FIELD_NAME.OPTIONS]: [],
      [SEWING_GOODS_FIELD_NAME.OPTION_TYPE]: 0,
      [SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]: [],
      [SEWING_GOODS_FIELD_NAME.COUNT]: '',
      [SEWING_GOODS_FIELD_NAME.LENGTH]: '',
      [SEWING_GOODS_FIELD_NAME.IS_COUNT]: false,
      [SEWING_GOODS_FIELD_NAME.IS_LENGTH]: false,
    });
    return data;
  };

  const initialOption = {
    [SEWING_GOODS_FIELD_NAME.OPTION_SIZE]: '',
    [SEWING_GOODS_FIELD_NAME.OPTION_COLOR]: '',
    [SEWING_GOODS_FIELD_NAME.OPTION_PRICE]: '',
    [SEWING_GOODS_FIELD_NAME.OPTION_DISCOUNT]: '',
    [SEWING_GOODS_FIELD_NAME.OPTION_COUNT]: '',
    [SEWING_GOODS_FIELD_NAME.OPTION_LENGTH]: '',
  };

  return (
    <CreateSewingGoodsComponent
      pageLoading={pageLoading}
      isEdit={Boolean(sewingProductId)}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      updateIsPending={isRequestPending(updateSewingGoodsState)}
      updateIsError={isRequestError(updateSewingGoodsState)}
      updateIsSuccess={isRequestSuccess(updateSewingGoodsState)}
      updateErrorMessage={getRequestErrorMessage(updateSewingGoodsState)}
      initialOption={initialOption}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
