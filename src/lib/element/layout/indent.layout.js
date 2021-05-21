import styled from 'styled-components';

import { THEME_SIZE } from '../../theme';

export const IndentLayout = styled.div`
  display: grid;
  gap: ${(p) => THEME_SIZE.INDENT[p.type?.toUpperCase() || 'DEFAULT']};
`;
