import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { DeliveryPricePageFormComponent } from './frame/delivery-price-page-form.component';
import { DeliveryPriceListComponent } from './frame/delivery-price-list.component';
import { DELIVERY_PRICE_FORM_DATA_NAME } from './delivery-price-page.constant';

export function DeliveryPricePageComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValues,
    validation,
    onSubmitForm,
    deliveryPriceData,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="DELIVERY_PRICE.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(formProps) => (
          <DeliveryPricePageFormComponent
            {...formProps}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
          />
        )}
      </Formik>
      <DeliveryPriceListComponent deliveryPriceData={deliveryPriceData} isPending={isPending} />
    </SectionLayout>
  );
}
