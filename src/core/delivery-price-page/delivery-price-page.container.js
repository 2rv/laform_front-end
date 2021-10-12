import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { LoaderPrimary } from 'src/lib/element/loader';
import { createDeliveryPrice, fetchDeliveryPriceData } from './delivery-price-page.action';
import { DeliveryPricePageComponent } from './delivery-price-page.component';
import { deliveryPriceFormValidation } from './delivery-price-page.validation';
import { DELIVERY_PRICE_FORM_DATA_NAME, DELIVERY_PRICE_PAGE_STORE_NAME } from './delivery-price-page.constant';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';

export function DeliveryPricePageContainer() {
  const dispatch = useDispatch();
  const { state, user, isAuth, pageLoading } = useSelector((state) => ({
    state: state[DELIVERY_PRICE_PAGE_STORE_NAME].deliveryPricePage,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(fetchDeliveryPriceData());
  }, []);

  const onSubmitForm = (values, { resetForm }) => {
    dispatch(createDeliveryPrice(values));
    resetForm({});
  };

  const formInitialValues = () => ({
    [DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE]: '',
    [DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE_PRICE]: '',
  });

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  return (
    <DeliveryPricePageComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      deliveryPriceData={getRequestData(state)}
      initialValues={formInitialValues()}
      validation={deliveryPriceFormValidation}
      onSubmitForm={onSubmitForm}
    />
  );
}
