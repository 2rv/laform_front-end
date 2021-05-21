import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { TitlePropsType } from './title.type';

export function TitlePrimary(props: TitlePropsType) {
  const { tid, tvalue } = props;

  return <Title>{text(tid, tvalue)}</Title>;
}

const Title = styled.span`
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: 500;
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
