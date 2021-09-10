import styled from 'styled-components';

import { convertedText } from '../../common/text';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { TextPropsType } from './text.type';

export function TextPrimary(props: TextPropsType) {
  const { tid, tvalue, className, onClick, children } = props;

  return (
    <Text className={className} onClick={onClick}>
      {convertedText(children, tid, tvalue)}
    </Text>
  );
}

const Text = styled.span`
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
