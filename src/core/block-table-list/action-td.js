import styled from 'styled-components';
import { ButtonBasic } from '../../lib/element/button';
import { LinkSecondary } from '../../lib/element/link';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function ActionTd(props) {
  const { id, children } = props;
  return (
    <Td>
      <ActionBlock>{children(id)}</ActionBlock>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-left: ${spacing(6)};
  @media screen and (max-width: 875px) {
    padding-left: 0;
  }
`;
const ActionBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
