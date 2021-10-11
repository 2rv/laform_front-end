import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Remove } from 'src/asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import { IconButton } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { removeDeliveryPrice } from '../delivery-price-page.action';

export function DeliveryPriceListItemComponent({ id, deliveryType, deliveryTypePrice }) {
  const dispatch = useDispatch();

  const removePromocode = () => {
    dispatch(removeDeliveryPrice(id));
  };

  return (
    <List>
      <div>
        <DeliveryBoldText tid="OTHER.DELIVERY_TYPE" />{' '}
        <DeliveryText>{deliveryType}</DeliveryText>
      </div>
      <div>
        <DeliveryBoldText tid="OTHER.DELIVERY_TYPE_PRICE" />{' '}
        <DeliveryText>{deliveryTypePrice}</DeliveryText>
      </div>
      <IconButton onClick={removePromocode}>
        <Remove />
      </IconButton>
      <Divider />
    </List>
  );
}

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${spacing(3)};
`;

const DeliveryCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;

const DeliveryText = styled(TextSecondary)`
  word-break: break-word;
`;

const DeliveryBoldText = styled(DeliveryText)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
