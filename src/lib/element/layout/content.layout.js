import styled from 'styled-components';

import { THEME_SIZE } from '../../theme';

export const ContentLayout = styled.div`
  width: ${(p) => THEME_SIZE.LAYOUT[p.type?.toUpperCase() || 'DEFAULT']};
`;