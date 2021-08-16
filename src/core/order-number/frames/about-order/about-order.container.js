import styled from 'styled-components';

import { AboutOrderFormContainer } from './frame';

import { ABOUT_ORDER_FIELD_NAME } from '../../order-number.type';

import { ContentLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';

export function AboutOrderContainer({ orderNumberDetails }) {
  const aboutOrderFormSendData = (values) => {
    console.log('Values: ', values);
  };

  const aboutOrderFormGetInitialValue = () => ({
    [ABOUT_ORDER_FIELD_NAME.FULL_NAME]: '',
    [ABOUT_ORDER_FIELD_NAME.CURRENT_CITY]: '',
    [ABOUT_ORDER_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: '',
    [ABOUT_ORDER_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: '',
    [ABOUT_ORDER_FIELD_NAME.CONTACT_PHONE_NUMBER]: '',
    [ABOUT_ORDER_FIELD_NAME.ORDER_NOTE]: '',
    [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]: '',
  });

  return (
    <Content>
      <AboutOrderFormContainer
        onSubmitForm={aboutOrderFormSendData}
        initialValue={aboutOrderFormGetInitialValue()}
        fieldName={ABOUT_ORDER_FIELD_NAME}
        orderNumberDetails={orderNumberDetails}
      />
    </Content>
  );
}

const Content = styled(ContentLayout)`
  padding-top: ${spacing(4)};
`;
