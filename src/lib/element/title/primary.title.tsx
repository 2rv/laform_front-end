import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { TitlePropsType } from './title.type';

export function TitlePrimary(props: TitlePropsType) {
  const { className, tid, tvalue } = props;

  return <Title className={className}>{text(tid, tvalue)}</Title>;
}

const Title = styled.span`
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
