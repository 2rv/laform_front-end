import { setLinkRedirect } from '../../../main/navigation';
import { TextPrimary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkPrimary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, className, children } = props;

  return (
    <a
      className={className}
      href={path}
      onClick={setLinkRedirect(path, pathConfig)}
    >
      {children || <TextPrimary tid={tid} tvalue={tvalue} />}
    </a>
  );
}
