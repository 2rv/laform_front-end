import styled from 'styled-components';
import { TextPrimary } from 'src/lib/element/text';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { PURCHASE_STATUS } from 'src/lib/basic-types';
import { TableStatusProps } from '../table.type';

export function TableStatus(props: TableStatusProps) {
  const { status } = props;
  if (typeof status !== 'number') return null;
  return (
    <Td>
      <Case>
        <ColoredText tid={PURCHASE_STATUS[status]} />
      </Case>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  @media screen and (max-width: 875px) {
    margin-left: 90px;
  }
`;
const Case = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
`;
const ColoredText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
