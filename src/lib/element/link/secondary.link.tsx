import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';
import { text } from '../../common/text';
import { LinkPropsType } from './link.type';
import { LinkPrimary } from './primary.link';

export function LinkSecondary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, className, children } = props;

  return (
    <Link className={className} tid={tid} path={path} pathConfig={pathConfig}>
      {children || text(tid, tvalue)}
    </Link>
  );
}

const Link = styled(LinkPrimary)`
  color: ${THEME_COLOR.SECONDARY};
`;
