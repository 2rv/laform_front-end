import styled from 'styled-components';
import { ButtonBasic } from '../../lib/element/button';
import { LinkSecondary } from '../../lib/element/link';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextBlock } from '../block-text';

export function CommentTd(props) {
  const { text } = props;
  return (
    <Td>
      <TextBlock text={text} />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
`;
