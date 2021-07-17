import styled from 'styled-components';

import { FormalizationOrderingFormContainer } from './frame';

import { FORMALIZATION_ORDERING_FIELD_NAME } from '../../basket.type';

import { ContentLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';

export function FormalizationOrderingContainer() {
  const formalizationOrderingFormSendData = (values) => {
    console.log('Values: ', values);
  };

  const formalizationOrderingFormGetInitialValue = () => ({
    [FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE]: '',
    [FORMALIZATION_ORDERING_FIELD_NAME.PROMO_CODE]: '',
  });

  return (
    <Content>
      <FormalizationOrderingFormContainer
        onSubmitForm={formalizationOrderingFormSendData}
        initialValue={formalizationOrderingFormGetInitialValue()}
        fieldName={FORMALIZATION_ORDERING_FIELD_NAME}
      />
    </Content>
  );
}

const Content = styled(ContentLayout)`
  padding-top: ${spacing(7)};
`;
