import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { promocodeRemoveData } from '../../promocodes.action';
import { ReactComponent as Remove } from '../../../../asset/svg/remove.svg';
import { Divider } from '../../../../lib/element/divider';
import { IconButton } from '../../../../lib/element/button';
import { TextSecondary } from '../../../../lib/element/text';
import { spacing } from '../../../../lib/theme';

export function PromocodesListItemComponent({ id, promocode, discount }) {
  const dispatch = useDispatch();

  const removePromocode = (id) => {
    dispatch(promocodeRemoveData(id));
  };

  return (
    <List>
      <PromocodeText>{promocode} | {discount}%</PromocodeText>
      <IconButton onClick={() => removePromocode(id)}>
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

const PromocodeText = styled(TextSecondary)`
  word-break: break-word;
`;
