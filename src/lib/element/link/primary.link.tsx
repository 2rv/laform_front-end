import { setLinkRedirect } from '../../../main/navigation';
import { TextPrimary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkPrimary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, className } = props;

  return (
    <a
      className={className}
      href={path}
      onClick={setLinkRedirect(path, pathConfig)}
    >
      <TextPrimary tid={tid} tvalue={tvalue} />
    </a>
  );
}
