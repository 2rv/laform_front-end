import styled from 'styled-components';
import { TextPrimary } from 'src/lib/element/text';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

interface props {
  status?: string;
}

export function TableStatus(props: props) {
  const { status } = props;
  if (!status) return null;
  return (
    <Td>
      <Case>
        <ColoredText tid={status} />
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
