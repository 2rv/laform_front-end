import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { ButtonPrimary } from '../../../../lib/element/button';

export function ProductPurchasedActionsComponent(props) {
  return (
    <ActionsContainer>
      <Button altColor tid="Отправить на Email" />
      <Button tid="Скачать" />
    </ActionsContainer>
  );
}

const ActionsContainer = styled.div`
  gap: ${spacing(2)};
  display: flex;
`;
const Button = styled(ButtonPrimary)`
  padding: ${spacing(3)} ${spacing(6)};
  ${({ altColor }) =>
    altColor && `background-color: ${THEME_COLOR.SECONDARY_DARK}`}
`;
