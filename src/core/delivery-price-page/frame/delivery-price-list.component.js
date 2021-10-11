import styled from 'styled-components';
import { DeliveryPriceListItemComponent } from './delivery-price-list-item.component';
import { Spinner } from 'src/lib/element/spinner';
import { spacing } from 'src/lib/theme';

export function DeliveryPriceListComponent({ deliveryPriceData, isPending }) {
  return (
    <UnorderedList>
      {isPending ? (
        <Spinner />
      ) : (
        deliveryPriceData.map((deliveryPrice) => (
          <DeliveryPriceListItemComponent key={deliveryPrice.id} {...deliveryPrice}  />
        ))
      )}
    </UnorderedList>
  );
}

const UnorderedList = styled.ul`
  display: grid;
  gap: ${spacing(3)};
`;
