import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';
import { setLinkRedirect } from '../../../main/navigation';
import { text } from '../../common/text';

import { LinkPropsType } from './link.type';

export function LinkPrimary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, className, children } = props;

  return (
    <Link className={className} onClick={setLinkRedirect(path, pathConfig)}>
      {children || text(tid, tvalue)}
    </Link>
  );
}

const Link = styled.a`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY_DARK};
  cursor: pointer;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;
