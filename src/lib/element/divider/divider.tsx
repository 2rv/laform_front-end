import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

export const Divider = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  min-height: 2px;
  height: 2px;
  width: 100%;
`;
