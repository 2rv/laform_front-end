import styled from 'styled-components';

import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';

import { BadgePropsType } from './badge.type';

export function BadgeDark(props: BadgePropsType) {
  const { badgeContent, children, onClick } = props;

  return (
    <Container onClick={onClick}>
      {children}
      <Badge>{badgeContent}</Badge>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  right: 0;
  height: 24px;
  min-width: 24px;
  padding: 0 ${spacing(1)};
  transform: translate(75%, -25%);
  align-content: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  color: ${THEME_COLOR.WHITE};
  background-color: ${THEME_COLOR.PRIMARY_DARK};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  user-select: none;
`;
