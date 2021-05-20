import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { TextPropsType } from './text.type';

export function TextSecondary(props: TextPropsType) {
  const { tid, tvalue, fontSize } = props;

  const Text = styled.span`
    font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
    font-size: ${fontSize || THEME_SIZE.FONT.DEFAULT};
    color: ${THEME_COLOR.TEXT_SECONDARY};
  `;

  return <Text>{text(tid, tvalue)}</Text>;
}
